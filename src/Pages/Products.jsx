import React from 'react'
import Navbar from '../Components/Navbar'
import aboutMain from '../assets/about-main.png'
import schedule from '../assets/Schedule.png'
import mission from '../assets/mission image.png'
import user1 from '../assets/user1.png'
import symbol from '../assets/Symbol.png'
import enclave from '../assets/Logo enclave.png'
import ugochi from '../assets/ugochi.png'
import bertram from '../assets/bertram.png'
import { BsFillArrowRightCircleFill, BsArrowLeftCircle, BsFacebook } from 'react-icons/bs'
import { AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
const Products = () => {
  return (
    <body className='about-main'>


      <nav className='fixed'>
        <Navbar />
      </nav>
      <section className='about-header'>
        <section className='about-peppu'>
          <aside> <img src={symbol} /></aside>

          <main>
            <section className='product-intro'>
              <h1>Cloudbased Accounting that starts with a spreadsheet.</h1>
              <p>Automate accounting tasks using the tools you already have and save hours of work to focus on what really matters.</p>
            </section>
            <section className='peppu-description'>
              <article>
              </article>
            </section>
            <article className='about-us product'>
              <h2>Products</h2>
              <section className='meet-the-team'>
                <section className='team'>
                  <section className='the-product'>
                    <img src={aboutMain} />
                    <h1>PayTrack</h1>
                    <p className='position'>Automate your bookkeeping and accounting tasks. Visualize and control your accounting and share with others.</p>
                    <a href='/products/paytrack'>Learn More</a>
                  </section>
                </section>
                <section className='team'>
                  <section className='the-product'>
                    <img src={schedule} />
                    <h1>ConnectPay</h1>
                    <p className='position'>Connect your e-commerce shop to Peppubooks. Perform bookkeeping and accounting tasks straight from your checkout point</p>
                    <a href='/products/connectpay'>Learn More</a>
                  </section>
                </section>
              </section>
            </article>
          </main>
        </section>
      </section>




    </body>
  )
}

export default Products