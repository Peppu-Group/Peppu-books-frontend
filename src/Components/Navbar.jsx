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
         <a href="/"><h4>Home</h4></a>
         <a href="/features"> <h4>Features   </h4></a>
         <a href='/products'> <h4>Products   </h4></a>
         <a href='/pricing'><h4>Pricing   </h4></a>
         <a href='/about'><h4>About&nbsp;us  </h4></a>
        <div className='search-icon'>
        <AiOutlineSearch />
        </div>
        <a href='/getstarted'> <button>   Get&nbsp;Started  </button></a>
      </div>
      </div>

    </div>
  )
}

export default Navbar