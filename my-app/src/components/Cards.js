import React from 'react';


function Cards(props) {
    return (
      <div className="container">
        <div className='card'>
          <img src={props.img} alt={props.alt} className='card--img' />
          <h1 className='card--name'>{props.name}</h1>
        </div>
      </div>
    );
  }
  
  export default Cards;
