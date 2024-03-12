
import React from 'react';
import "./Card.css";

const MyCard = ({image,title,author,handleDownloadClick,handleViewClick}) => {
  
  return (
    <div className='card-container'>
      <img src={image} alt={title} className='card-img' onClick={handleDownloadClick}/>
      <h1 className='card-wallpapername'>{title}</h1>
      <h3 className='card-authorname'>By {author}</h3>
      <div className='card-divider'>
      <button onClick={handleDownloadClick} className='card-view' download="Image">Download</button>
      <button onClick={handleViewClick} className='card-view'>View</button>
      </div>    
    </div>
  )
}

export default MyCard;