// UploadPageComponent.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './UploadPageComponent.css'; // Import your CSS file for styling

const UploadPageComponent = () => {
  const [file, setFile] = useState(null);
  const [wallpaperName, setWallpaperName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    // Display image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = async () => {
    // Create FormData to send file and other data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('wallpaperName', wallpaperName);
    formData.append('authorName', authorName);

    // Make a POST request to your backend API
    try {
        const response = await axios.post('http://localhost:8080/wallpapers/db/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data); // Handle the response as needed
      } catch (error) {
        console.error('Error:', error);
      }
      
  };

  return (
    <div className="upload-page">
      <h1>Upload Wallpaper</h1>
      <form>
        <div className="form-group">
          <label htmlFor="file">Select Image:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label htmlFor="wallpaperName">Wallpaper Name:</label>
          <input type="text" id="wallpaperName" value={wallpaperName} onChange={(e) => setWallpaperName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="authorName">Author Name:</label>
          <input type="text" id="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
        </div>
        <div className="image-preview">
          {previewImage && <img src={previewImage} alt="Preview" />}
        </div>
        <button type="button" onClick={handleUpload}>Upload</button>
      </form>
    </div>
  );
};

export default UploadPageComponent;
