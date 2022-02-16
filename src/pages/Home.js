import React from 'react';
import './home.css'
import Background from '../assets/back.jpg'

function Home() {
  return (
  <div className='home'  style={{backgroundImage : `url(${Background})`}} >
     <div className='header' >
       <div className='textComponent'>
         <h1>Mesob Habesha Food</h1>
        <p>GET YOUR HABESHA MEAL</p>
        <a href='/Menu' >
        <button>ORDER NOW</button>
        </a>
        </div> 
     </div>
     
  </div>
  )
}

export default Home;
