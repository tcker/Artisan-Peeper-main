import { ref, getDownloadURL, uploadBytesResumable, getMetadata, StorageError } from "firebase/storage";
import { storage } from "../../../backend/config/firebase"; // Import storage from your Firebase configuration file
import { db } from "../../../backend/config/firebase"; // Import db from your Firebase configuration file
import { auth } from "../../../backend/config/firebase"; // Import auth from your Firebase configuration file

// Rest of the uploadFile.js code...

const uploadFile = async (files, setProgress) => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error("User not authenticated");
  }

  const userUUID = currentUser.uid; // Get UUID of the current user
  const uploadedFilesData = await Promise.all(
    files.map(async (file) => {
      try {
        // Validate file type (accept only PDF)
        if (file.type !== 'application/pdf') {
          throw new Error('Only PDF files are allowed.');
        }

        // Check if the file already exists
        const fileRef = ref(storage, `resumes/${userUUID}/${file.name}`);
        try {
          await getMetadata(fileRef);
          // File exists, return an object with the file name and exists flag
          return { fileName: file.name, exists: true };
        } catch (error) {
          if (error instanceof StorageError && error.code === 'storage/object-not-found') {
            // File does not exist, proceed with uploading
            const storageRef = ref(storage, `resumes/${userUUID}/${file.name}`);
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

            // Store file information in Firestore
            await db.collection('users').doc(userUUID).collection('resumes').doc(file.name).set({
              fileName: file.name,
              url: downloadURL,
              timestamp: new Date().toISOString()
            });

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
  