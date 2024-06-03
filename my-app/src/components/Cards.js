import React from 'react';

export default function Cards(props){
return(<div className='card'>
    <img src={props.img} alt={props.ref}  className='card--img'/>
    <h1>{props.name}</h1>
</div>)}

