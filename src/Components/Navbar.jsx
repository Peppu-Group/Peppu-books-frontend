import React from 'react'
import IMG_2437 from '../assets/IMG_2437.png'
import {AiOutlineSearch } from 'react-icons/ai'
const Navbar = () => {
  return (
    <div>
        {/*Home page Nave-bar components */}
      <div className='home-navbar'>
        <img src={IMG_2437} style={{width: 74, height: 30, marginTop: 13}}/>
         <a href="/"><h4>Home</h4></a>
         <a href="/features"> <h4>Features</h4></a>
         <a href='/products'> <h4>Products</h4></a>
         <a href='/pricing'><h4>Pricing</h4></a>
         <a href='/about'><h4>About Us</h4></a>
        <div className='search-icon'>
        <AiOutlineSearch />
        </div>
        <div className='get-button'>
        <a href='/getstarted'> <button>Get started</button></a>
        </div>
      </div>

    </div>
  )
}

export default Navbar