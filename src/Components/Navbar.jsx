import React from 'react'
import IMG_2437 from '../assets/IMG_2437.png'
import {AiOutlineSearch } from 'react-icons/ai'
const Navbar = () => {
  return (
    <div>
        {/*Home page Nave-bar components style={{width: 74, height: 30, marginTop: 13}} */}
      <div className='home-navbar'>
       <div className='logo'> 
        <img src={IMG_2437}/>
        </div>
        <div className='nav-menu'>
         <a href="/"><li>Home</li></a>
         <a href="/features"> <li>Features</li></a>
         <a href='/products'> <li>Products</li></a>
         <a href='/pricing'><li>Pricing</li></a>
         <a href='/about'><li>About&nbsp;us</li></a>
        <div className='search-icon'>
        <AiOutlineSearch />
        </div>
        <a href='/getstarted'><li><button>Get&nbsp;Started</button></li></a>
      </div>
     
      </div>
    
    </div>
  )
}

export default Navbar