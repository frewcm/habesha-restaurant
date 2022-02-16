import React from 'react'
import './contact.css'
import Gursha from '../assets/gursha.jpg'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${Gursha})`}}>fbwejhfbeh</div>
        <div className='rightSide'>
          <h1>Contact Us</h1>
          <form method='post' id='contact-form'>
             <lable htmlfor='name' >Full Name</lable>
             <input name='name' placeholder='Enter full name...' type='text'/>
             <lable htmlfor='email' >Email Adress</lable>
             <input name='email' placeholder='Enter email...' type='email'/>
             <lable htmlfor='message' >Massage</lable>
             <textarea rows="6" name='message' placeholder='Enter message...' required></textarea>
             <button type='submit'>Send Message</button>
          </form>
        </div>
    </div>
  )
}

export default Contact