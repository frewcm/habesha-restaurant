import React,{ useState } from 'react';
import './nav.css'
import Logo from '../../assets/mesobimg.png'
import ReorderIcon from '@mui/icons-material/Reorder';



export default function Nav() {
 
 const [showMenu, setShowMenu] = useState(false); 
 
 function handleClick(){
    setShowMenu(!showMenu)
 }
  return (
     
      <div className='nav' >
          <div  className='left' >
             <a href='/'>
             <img src={Logo} alt=''/>
             </a>
          </div>
          <div className='right'>
             <div className='links' id={showMenu ? 'hidden' : ''} >
                <a href='/'>Home</a>
                <a href='/Menu'>Menu</a>
                <a href='/About'>About</a>
                <a href='/Contact'>Contact</a>
             </div >
             <button onClick={handleClick}>
                <ReorderIcon />
             </button>
          </div>
     
     </div>
         )
}
