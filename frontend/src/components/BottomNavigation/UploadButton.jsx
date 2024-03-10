// UploadButton.js
import React, { useRef } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const UploadButton = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Fab color="primary" aria-label="upload" onClick={handleButtonClick} style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <AddIcon />
      </Fab>
    </>
  );
};

export default UploadButton;
