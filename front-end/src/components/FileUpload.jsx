  import React, { useState } from 'react';
  import { useDropzone } from 'react-dropzone';

  const FileUpload = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
      onDrop: (acceptedFiles) => {
        setUploadedFiles(acceptedFiles);
        // Call your backend API endpoint to upload files
      },
    }

    );
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <button className="h-56 w-full">Drag and drop files here or click to browse. <br/>
        <ul>
          {uploadedFiles.map((file) => (
            <li className="py-1 px-2 bg-indigo-500 text-white rounded-xl" key={file.name}>{file.name}</li>
          ))}
        </ul><br/>
        <span className='py-1 px-2 bg-yellow-500 text-black rounded-xl'>To change the file, upload again</span>
        </button> 
      </div>
    );
  };
  export default FileUpload;