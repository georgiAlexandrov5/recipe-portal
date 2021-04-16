import React from 'react';
import { Link } from 'react-router-dom';
import '../Unauthorized.scss';

const Unauthorized = () => {
  return (
    <div className='container2'>
      <div class="gandalf">
        <div class="fireball"></div>
        <div class="skirt"></div>
        <div class="sleeves"></div>
        <div class="shoulders">
          <div class="hand left"></div>
          <div class="hand right"></div>
        </div>
        <div class="head">
          <div class="hair"></div>
          <div class="beard"></div>
        </div>
      </div>
      <div class="message">
        <h1>403 - You Shall Not Pass</h1>
        <span>Uh oh, Gandalf is blocking the way!<br />No unauthorized orcs allowed!</span>
        <span><Link to='/'> Back to Home</Link> or <Link to='/login'>Login</Link></span>
      </div>
      
    </div>
  )
}

export default Unauthorized;