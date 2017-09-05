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

      <article className="visualisation main">
        <header>
          <h1>Share your results</h1>
        </header>
        <h2>Find your Google Form results</h2>
        <p>This tool can only convert the results exported from Google Forms.</p>
        <p>You can find the export file:</p>
        <ol>
          <li>Open your survey Google Form.</li>
          <li>View the Responses tab.</li>
          <li>From the "&#8942;" menu select "Download responses (.csv)".</li>
        </ol>
        <h2>Visualise the data</h2>
        <p>Upload the CSV file exported from the survey to see the visualisation of your company stats.</p>
        <div className="file-upload">
          <ReactUploadFile options={uploadOptions} chooseFileButton={<button className="file-upload-button"></button>} />
        </div>

      </article>
    );
}

export default FileUpload;
