import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button.jsx";
import { auth } from "../../../backend/config/firebase";
import uploadFile from "./uploadFile"; // Import the uploadFile function
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [progress, setProgress] = useState(0); // State to track upload progress

  const acceptPdfFiles = ".pdf";

  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptPdfFiles,
    onDrop: async (acceptedFiles) => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          throw new Error("User not authenticated");
        }

        // Check if any dropped files are not PDF files
        const nonPdfFiles = acceptedFiles.filter(file => !file.name.toLowerCase().endsWith(".pdf"));
        if (nonPdfFiles.length > 0) {
          // Display toast for non-PDF files
          toast.error("Only PDF files are allowed to upload.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return; // Stop further processing
        }

        // If all files are PDFs, proceed with upload
        const uploadedFilesData = await uploadFile(acceptedFiles, setProgress);
        setUploadedFiles(uploadedFilesData);
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    },
  });

  return (
    <div>
      <ToastContainer />
      <div {...getRootProps()} className="">
        <input {...getInputProps()} />
        <button className="mt-16 h-56 w-full">
          Drag and drop PDF files here or click to browse. <br />
          <ul>
            {uploadedFiles.map((file) => (
              <li
                className="py-1 px-2 bg-indigo-500 text-white rounded-xl"
                key={file.fileName}
              >
                {file.fileName}
                {file.exists && <span className="ml-2 text-red-500">(File already exists)</span>}
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
      <div className="center"> {progress}% uploaded</div>
    </div>
  );
};

export default FileUpload;
