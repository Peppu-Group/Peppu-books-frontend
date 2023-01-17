import React from 'react'
import { useState } from 'react'
import IMG_2437 from '../assets/IMG_2437.png'
import {AiOutlineSearch } from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
const Navbar = () => {
   
  return (
  
   
      <section className='home-navbar'>
        <figure className='logo'> 
          <img src={IMG_2437}/>
        </figure>
        <article className='nav-menu'>
          <a href="/"><li>Home</li></a>
          <a href="/features"> <li>Features</li></a>
          <a href='/products'> <li>Products</li></a>
           <a href='/pricing'><li>Pricing</li></a>
           <a href='/about'><li>About&nbsp;us</li></a>
        <article className='search-icon'>
          < FaSearch/>
        </article>
        <a href='https://app.peppubooks.com/register'><li><button>Get&nbsp;Started</button></li></a>
      </article>
     
      </section>
    
    
  )
}

export default Navbar