import React from 'react'
import IMG_2437 from '../assets/IMG_2437.png'
import {AiOutlineSearch } from 'react-icons/ai'
const Navbar = () => {
  return (
    <main>
        {/*Home page Nave-bar components style={{width: 74, height: 30, marginTop: 13}} */}
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
        <figure className='search-icon'>
          <AiOutlineSearch />
        </figure>
        <a href='/getstarted'><li><button>Get&nbsp;Started</button></li></a>
      </article>
     
      </section>
    
    </main>
  )
}

export default Navbar