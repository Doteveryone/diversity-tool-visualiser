import React, { Component } from 'react';
import Papa from 'papaparse';
import ReactUploadFile from 'react-upload-file';
import './App.css';

class App extends Component {
  render() {
    const parseOptions = {
      delimiter: ',',
      header: true,
      comments: false,
      complete: (results, file) => {
        console.log(results);
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
      <div className="App">
        <ReactUploadFile options={uploadOptions} />
      </div>
    );
  }
}

export default App;
