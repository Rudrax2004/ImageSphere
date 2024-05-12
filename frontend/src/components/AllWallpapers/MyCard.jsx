import React from 'react';
import "./Card.css";

const MyCard = ({image,title,author,handleDownloadClick,handleViewClick}) => {

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = image;
    link.download = `${title}.jpg`;
    link.click();
  }

  return (
    <div class="card">
      <div class="card_form">
        <span>{title}</span>
        <img src={image} alt={title}></img>
      </div>
      <div class="card_data">
        <div class="data">
          <div class="text">
            
            <label class="text_m">{title}</label>
            <div class="cube text_s">
              <label class="side front">{author}</label>
              <label class="side top">{author}</label>
            </div>
          </div>
        </div>
        <span onClick={downloadImage} title="Acceder a la lista (Temas)">Downlaod</span>
      </div>
    </div>
  )
}

export default MyCard;