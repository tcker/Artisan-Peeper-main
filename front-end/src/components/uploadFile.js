import { uploadBytesResumable, ref } from 'firebase/storage';
import { storage } from "../../../backend/config/firebase";

const uploadFile = async (files) => {
  const uploadedFilesData = await Promise.all(
    files.map(async (file) => {
      try {
        const storageRef = ref(storage, `resumes/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Monitoring the upload progress
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            console.error('Error uploading file:', error);
            throw error;
          }
        );

        await uploadTask;

        const downloadURL = await ref(storageRef).getDownloadURL();
        return { fileName: file.name, url: downloadURL };
      } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
      }
    })
  );

  return uploadedFilesData;
};

export default uploadFile;
