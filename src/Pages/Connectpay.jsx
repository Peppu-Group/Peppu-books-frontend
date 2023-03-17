import React from 'react'
import Navbar from '../Components/Navbar'
import aboutMain from '../assets/about-main.png'
import schedule from '../assets/schedule.png'
import mission from '../assets/mission image.png'
import user1 from '../assets/user1.png'
import symbol from '../assets/Symbol.png'
import enclave from '../assets/Logo enclave.png'
import ugochi from '../assets/ugochi.png'
import bertram from '../assets/bertram.png'
import { BsFillArrowRightCircleFill, BsArrowLeftCircle, BsFacebook } from 'react-icons/bs'
import { AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
const Connect= () => {
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
                            <h1>Facilitate Bookkeeping from E-commerce Shop.</h1>
                            <p>ConnectPay is a middleware to connect PayTrack to your application's checkout. Automate Bookkeeping straight 
                                from your storefront.</p>
                            <a href='https://github.com/Peppu-Group/ConnectPay'>Try Connectpay!</a>
                        </section>
                        <section className='peppu-description'>
                            <article>
                            </article>
                        </section>
                    </main>
                </section>
            </section>
        </body>
    )
}

export default Connect