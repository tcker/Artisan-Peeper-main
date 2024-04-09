import React, { useEffect, useRef, useState } from 'react';
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

const Camera = () => {
  const videoRef = useRef(null);
  const liveViewRef = useRef(null);
  const childrenRef = useRef([]);
  const [detectionEnabled, setDetectionEnabled] = useState(false);

  useEffect(() => {
    const enableCam = async () => {
      // Initialize TensorFlow.js backend
      await tf.setBackend('webgl');

      // getUsermedia parameters to force video but not audio.
      const constraints = { video: true };

      // Activate the webcam stream.
      navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        const video = videoRef.current;
        video.srcObject = stream;
        video.addEventListener('loadeddata', predictWebcam);
      });
    }

    enableCam();

    return () => {
      const video = videoRef.current;
      if (video && video.srcObject) {
        const stream = video.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const toggleDetection = () => {
    setDetectionEnabled(prevState => !prevState);
  };

  const predictWebcam = async () => {
    if (!detectionEnabled) return;

    const model = await cocoSsd.load();
    const video = videoRef.current;
    const liveView = liveViewRef.current;
    const children = childrenRef.current;

    // Now let's start classifying a frame in the stream.
    model.detect(video).then(function (predictions) {
      for (let i = 0; i < children.length; i++) {
        liveView.removeChild(children[i]);
      }
      children.splice(0);

      // Now lets loop through predictions and draw them to the live view if
      // they have a high confidence score.
      for (let n = 0; n < predictions.length; n++) {
        // If we are over 66% sure we are sure we classified it right, draw it!
        if (predictions[n].score > 0.66) {
          const p = document.createElement('p');
          p.innerText = predictions[n].class  + ' - with ' 
              + Math.round(parseFloat(predictions[n].score) * 100) 
              + '% confidence.';
          p.style = 'margin-left: ' + predictions[n].bbox[0] + 'px; margin-top: '
              + (predictions[n].bbox[1] - 10) + 'px; width: ' 
              + (predictions[n].bbox[2] - 10) + 'px; top: 0; left: 0;';

          const highlighter = document.createElement('div');
          highlighter.setAttribute('class', 'highlighter');
          highlighter.style = 'left: ' + predictions[n].bbox[0] + 'px; top: '
              + predictions[n].bbox[1] + 'px; width: ' 
              + predictions[n].bbox[2] + 'px; height: '
              + predictions[n].bbox[3] + 'px;';

          liveView.appendChild(highlighter);
          liveView.appendChild(p);
          children.push(highlighter);
          children.push(p);
        }
      }

      // Call this function again to keep predicting when the browser is ready.
      window.requestAnimationFrame(predictWebcam);
    });
  };

  return (
    <div className='flex bg-black rounded-xl text-whiteborder-[1px] border-gray dark:border-white dark:bg-slate-500 justify-center items-center'>
      <video ref={videoRef} className="w-[100%] rounded-lg" autoPlay playsInline style={{ transform: 'scaleX(-1)' }}></video>
      <div id="liveView" ref={liveViewRef} className="w-full"></div>
    </div>
  );
};

export default Camera;
