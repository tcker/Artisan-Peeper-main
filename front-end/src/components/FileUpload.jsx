import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button.jsx';
import { addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth } from "../../../backend/config/firebase";

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          throw new Error('User not authenticated');
        }

        const uploadedFilePromises = acceptedFiles.map(async (file) => {
          // Upload file to Firebase Storage
          const storage = getStorage();
          const storageRef = ref(storage, `resumes/${file.name}`);
          await uploadBytes(storageRef, file);

          // Get the download URL of the uploaded file
          const url = await getDownloadURL(storageRef);

          // Add document to Firestore with custom URL and user UID
          await addDoc(collection(db, 'resumes'), {
            uid: currentUser.uid,
            fileName: file.name,
            url: url,
          });

          return { fileName: file.name, url: url };
        });

        const uploadedFilesData = await Promise.all(uploadedFilePromises);
        setUploadedFiles(uploadedFilesData);
      } catch (error) {
        console.error('Error uploading files:', error);
      }
    },
  });

  return (
    <div>
      <div {...getRootProps()} className=''>
        <input {...getInputProps()} />
        <button className="mt-16 h-56 w-full">Drag and drop files here or click to browse. <br />
          <ul>
            {uploadedFiles.map((file) => (
              <li className="py-1 px-2 bg-indigo-500 text-white rounded-xl" key={file.fileName}>{file.fileName}</li>
            ))}
          </ul><br />
          <span className='py-1 px-2 bg-yellow-500 text-black rounded-xl'>To change the file, upload again</span>
        </button>
      </div>
      <div className='mt-8 flex justify-center'>
        <Button className="bg-indigo-600 text-white">Submit</Button>
      </div>
    </div>
  );
};

export default FileUpload;
