import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Cards(props) {
    return (
      <Router><div className="container">
        <div className='card'>
         <Link to ={props.href}><img src={props.img} alt={props.alt} className='card--img' />
          <h1 className='card--name'>{props.name}</h1></Link> 
        </div>
        <Route path={props.href} />
      </div></Router>
    );
  }
  
  export default Cards;
