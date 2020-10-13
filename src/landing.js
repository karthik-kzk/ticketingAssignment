import image from './Material.jpg';
import React from 'react';
import './landing.css';
import SignIn from './components/login';

export default  function Land(){
return(
    <div className="grid-container">
  <div className="a1"><img  src={image}  alt="fireSpot" width='500%'/></div>
  <div className="a2"><SignIn/></div>
   </div>
)
}