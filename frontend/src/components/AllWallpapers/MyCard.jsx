
import React from 'react';
import "./Card.css";

const MyCard = ({image,title,author,handleDownloadClick}) => {
  return (
    <div className='card-container'>
      <img src={image} alt={title} className='card-img'/>
      <h1 className='card-wallpapername'>{title}</h1>
      <h3 className='card-authorname'>By {author}</h3>
      <div className='card-divider'>
        <a href="" className='card-view'>View</a>
        <button onClick={() => handleDownloadClick()}className='card-download'>Download</button>
      </div>    
    </div>
  )
}

export default MyCard;