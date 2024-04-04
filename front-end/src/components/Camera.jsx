import React, { useEffect, useRef } from 'react';
import * as faceDetection from "@tensorflow-models/face-detection";

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      try {
        const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
        const detectorConfig = {
          runtime: 'mediapipe',
          solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_detection',
        };
        const detector = await faceDetection.createDetector(model, detectorConfig);
        
        const videoElement = videoRef.current;
        
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
            videoElement.srcObject = stream;
            videoElement.onloadedmetadata = () => {
              videoElement.play();
              setInterval(async () => {
                await detectAndAlertDirection(detector, videoElement);
              }, 1000); 
            };
          })
          .catch(error => {
            console.error('Error accessing camera:', error);
          });
      } catch (error) {
        console.error('Error initializing camera:', error);
      }
    };

    init();

    return () => {
      const videoElement = videoRef.current;
      if (videoElement && videoElement.srcObject) {
        const stream = videoElement.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const detectAndAlertDirection = async (detector, videoElement) => {
    try {
      const faces = await detector.estimateFaces(videoElement);
      faces.forEach(face => {
        const direction = determineDirection(face.keypoints);
        // If you want to perform some action based on the direction, you can do it here
      });
    } catch (error) {
      console.error('Error detecting face direction:', error);
    }
  };

  const determineDirection = (keypoints) => {
    // Your determineDirection function remains unchanged
  };

  return (
    <div className='flex bg-black rounded-xl text-whiteborder-[1px] border-gray dark:border-white dark:bg-slate-500 justify-center items-center'>
      <video ref={videoRef} className="w-[100%] rounded-lg" autoPlay playsInline style={{ transform: 'scaleX(-1)' }}></video>
    </div>
  );
};

export default Camera;