import React from 'react';

const Card = ({ image, title, subtitle }) => {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4"> 
  <div className="col">
    <div className="card">
      <img src={image} class="card-img" alt="{title}" style={{width:275,}}/>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  </div>
  </div>
  

  );
};

export default Card;