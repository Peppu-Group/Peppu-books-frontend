import React from 'react'
import IMG_2437 from '../assets/IMG_2437.png'
import {AiOutlineSearch } from 'react-icons/ai'
const Navbar = () => {
  return (
    <div>
        {/*Home page Nave-bar components */}
      <div className='home-navbar'>
        <img src={IMG_2437} style={{width: 34, height: 40, marginTop: 13}}/>
        <h4>Home</h4>
        <h4>Features</h4>
        <h4>Products</h4>
        <h4>Pricing</h4>
        <h4>About Us</h4>
        <div className='search-icon'>
        <AiOutlineSearch />
        </div>
        <button>Get started</button>
      </div>

    </div>
  )
}

export default Navbar