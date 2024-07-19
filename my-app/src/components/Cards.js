import React from 'react';


function Cards(props) {
    return (
      <div className="container">
        <a href={props.href}><div className='card'>
          <img src={props.img} alt={props.alt} className='card--img' />
          <h1 className='card--name'>{props.name}</h1>
        </div></a>
      </div>
    );
  }
  
  export default Cards;
