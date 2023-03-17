import React from 'react'
import Navbar from '../Components/Navbar'
import aboutMain from '../assets/about-main.png'
import mission from '../assets/mission image.png'
import user1 from '../assets/user1.png'
import symbol from '../assets/Symbol.png'
import enclave from '../assets/Logo enclave.png'
import ugochi from '../assets/ugochi.png'
import bertram from '../assets/bertram.png'
import { BsFillArrowRightCircleFill, BsArrowLeftCircle, BsFacebook } from 'react-icons/bs'
import { AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
const Paytrack = () => {
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
                            <h1>Start Accounting with Google Spreadsheet.</h1>
                            <p>Paytrack facilitates a faster yet secured handshake between the business and the client through a high level collaborative operation between both parties.
                                Our integrated dashboard offers you an on-the-go assessment of the business progress and projections.</p>
                            <a href='https://workspace.google.com/marketplace/app/paytrack/913987535189'>Try PayTrack!</a>
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

export default Paytrack