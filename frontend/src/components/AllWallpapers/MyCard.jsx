
import React from 'react';
import "./Card.css";

const MyCard = ({image,title,author,handleViewClick,fullScreenViewProps}) => {
  return (
    <div className='card-container'>
      <img src={image} alt={title} className='card-img'/>
      <h1 className='card-wallpapername'>{title}</h1>
      <h3 className='card-authorname'>By {author}</h3>
      <button onClick={() => handleViewClick(fullScreenViewProps)}className='card-view'>View</button>
    </div>
  )
}

export default MyCard;