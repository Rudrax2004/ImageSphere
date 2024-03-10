import React from 'react';

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="card">
  <img src={image} class="card-img-top" alt={title}/>
  <div className="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{subtitle}</p>
    <a href="#" class="btn btn-primary">View</a>
  </div>
</div>
  );
};

export default Card;

