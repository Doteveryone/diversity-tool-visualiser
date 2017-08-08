import React from 'react';
import Papa from 'papaparse';
import ReactUploadFile from 'react-upload-file';

function FileUpload({
  resultsCallback
}) {
    const parseOptions = {
      delimiter: ',',
      header: true,
      comments: false,
      complete: (results) => {
        resultsCallback(results);
      }
    };

    const uploadOptions = {
      baseUrl: 'http://localhost:3000/upload',
      dataType: 'csv',
      beforeUpload: (files) => {
        return true;
      },
      didUpload: (files) => {
        Papa.parse(files[0], parseOptions)
      },
      uploadError: (err) => {
        console.error(err.message);
      }
    }

    return (
      <div className="file-upload">
        <ReactUploadFile options={uploadOptions} chooseFileButton={<button className="file-upload-button"></button>} />
      </div>
    );
}

export default FileUpload;
