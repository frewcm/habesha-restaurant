import React from 'react'
import './about.css'
import Aynet from '../assets/aynet.jpg'

function About() {
  return (
    <div className='about'> 
    <div className='top' style= {{backgroundImage: `url(${Aynet})`}}>j</div>

    <div className='bottom'>
        <h1>About Us</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and 
           typesetting industry. Lorem Ipsum has been the industry's 
           Lorem Ipsum is simply dummy text of the printing and 
           typesetting industry. Lorem Ipsum has been the industry's 
           standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. 

        </p>
    </div>
    </div>
  )
}

export default About