import { ref, getDownloadURL, uploadBytesResumable, getMetadata, StorageError } from "firebase/storage";
import { storage } from "../../../backend/config/firebase";

const uploadFile = async (files, setProgress) => {
  const uploadedFilesData = await Promise.all(
    files.map(async (file) => {
      try {
        // Check if the file already exists
        const fileRef = ref(storage, `resumes/${file.name}`);
        try {
          await getMetadata(fileRef);
          // File exists, return an object with the file name and exists flag
          return { fileName: file.name, exists: true };
        } catch (error) {
          if (error instanceof StorageError && error.code === 'storage/object-not-found') {
            // File does not exist, proceed with uploading
            const storageRef = ref(storage, `resumes/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Monitoring the upload progress
            uploadTask.on('state_changed',
              (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress); // Update the progress state
              },
              (error) => {
                console.error('Error uploading file:', error);
                throw error;
              }
            );

            await uploadTask;

            // Get the download URL directly from uploadTask.snapshot.ref
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            return { fileName: file.name, url: downloadURL, exists: false };
          } else {
            throw error; // Rethrow the error if it's not "object-not-found"
          }
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
      }
    })
  );

  return uploadedFilesData;
};

export default uploadFile;
