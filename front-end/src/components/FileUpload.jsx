import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button.jsx";
import { db, auth, firebaseApp, storage } from "../../../backend/config/firebase"; // Import storage from firebase
import uploadFile from "./uploadFile"; // Import the uploadFile function

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [progress, setProgress] = useState(0); // State to track upload progress

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        const uploadedFilesData = await uploadFile(acceptedFiles);
        setUploadedFiles(uploadedFilesData);
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    },
  });

  return (
    <div>
      <div {...getRootProps()} className="">
        <input {...getInputProps()} />
        <button className="mt-16 h-56 w-full">
          Drag and drop files here or click to browse. <br />
          <ul>
            {uploadedFiles.map((file) => (
              <li
                className="py-1 px-2 bg-indigo-500 text-white rounded-xl"
                key={file.fileName}
              >
                {file.fileName}
              </li>
            ))}
          </ul>
          <br />
          <span className="py-1 px-2 bg-yellow-500 text-black rounded-xl">
            To change the file, upload again
          </span>
        </button>
      </div>
      <div className="mt-8 flex justify-center">
        <Button className="bg-indigo-600 text-white">Submit</Button>
      </div>
      {/* Display upload progress */}
      <div>{progress}% uploaded</div>
    </div>
  );
};

export default FileUpload;
