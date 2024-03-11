
import React from 'react';
import "./Card.css";
import FullScreenViewComponent from './FullScreenViewComponent';

const MyCard = ({image,title,author}) => {
  return (
    <div className='card-container'>
      <img src={image} alt={title} className='card-img'/>
      <h1 className='card-wallpapername'>{title}</h1>
      <h3 className='card-authorname'>By {author}</h3>
      <a href={<FullScreenViewComponent/>} className='card-view'>View</a>
    </div>
  )
}

export default MyCard;