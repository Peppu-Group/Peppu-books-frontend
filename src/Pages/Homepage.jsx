import React from 'react'
import {AiOutlineUserSwitch, AiOutlineArrowRight, AiFillCheckSquare} from 'react-icons/ai'
import {SiSpringsecurity} from 'react-icons/si'
import {GiHumanTarget} from 'react-icons/gi'
import readers from '../assets/readers.jpeg'
import computerman from '../assets/computerman.jpeg'
import manaccounting from '../assets/manaccounting.jpeg'
import mancomputer from '../assets/mancomputer.jpeg'
import womanscreen from '../assets/womanscreen.png'
import mansmiling from '../assets/mansmiling.jpeg'
import Navbar from '../Components/Navbar'
import IMG_2437 from '../assets/IMG_2437.png'


const Homepage = () => {
  return (
    <div className='home-page'>
      <div>
      <Navbar />
      </div>
      <div className='body-header'>
       <span><h1>Book Keeping</h1></span>
        <h1>Done Seemlessly</h1>
      </div>
      <div className='first-paragragh'>
      <p>We offer a seamless and easy to use <br /> algorithm that suits your desire</p>
      </div>

      <div className='body-buttons'>
        <button className='button-green'>Get Started</button>
        <button className='button-white'>How it works</button>
      </div>

      <div className='offers-main'>
        <div>
        <div className='offer-list-1'>
        <div className='icon'>
          <AiFillCheckSquare />
          </div>
           <p>Create estimates, convert to quotes</p>
        </div>
        <div className='offer-list-2'>
          <div className='icon'>
          <AiFillCheckSquare />
          </div>
          <p>Generate accounting reports, record journal</p>
        </div>
        <div className='offer-list-3'>
        <div className='icon'>
          <AiFillCheckSquare />
          </div>
          <p>Custom schedules and reminders to automate your processes</p>
        </div>
        </div>
        <div className='image'>
          <img  src={readers}/>
        </div>
        </div>
        <div className='Automate-container'>
          <div className='computerman'>
          <img src={computerman} />
          </div>
          <div>
          <div className='Automate'> 
           <h1>Automate</h1>
          </div>
          <p>Get automated bookkeeping <br/>process with few clicks</p>
          <p className='learn-more'>LEARN MORE <AiOutlineArrowRight/> </p>
          </div>

        </div>
          <div className='orderly-accounting-container'>
            <div className='orderly-accounting'>
            <h1>Orderly accounting</h1>
            <p>Arrange share and <br/> retrieve all accounting <br/> processes in one place</p>
            <p className='learn-more'>LEARN MORE <AiOutlineArrowRight/> </p>
            </div>
            <img src={manaccounting} />
          </div>

          <div className='professional-invoice-container'>
            <img src={mancomputer} />
            <div className='professional-invoice'>
            <h1>Professional Invoices</h1>
            <p>Create Professional Invoices and <br/> receipts with few clicks, schedule<br/> and track payments</p>
            <p className='learn-more'>LEARN MORE <AiOutlineArrowRight/> </p>
            </div>
          </div>


          <div className='custom-schedule-container'>
            <div className='professional-invoice'>
            <h1>Custom Schedules</h1>
            <p>Create custom schedules and <br/> reminders to automate your<br/>processes</p>
            <p className='learn-more'>LEARN MORE <AiOutlineArrowRight/> </p>
            </div>
            <img src={womanscreen} />
          </div>
          <div className='why-peppu'>
          <h1>Why PEPPU BOOKS?</h1>
          </div>

          <div className='why-peppu-content'>
            <div className='easy-to-use'>
              <div className='easy-to-use-icon'>
              <AiOutlineUserSwitch />
              </div>
              <h1>Easy to use</h1>
              <p>With our automated <br/> processes you have your <br/> accounting done without <br/> stress, and easily <br/> trace changes in <br/> your account</p>
            </div>

            <div className='easy-to-use'>
              <div className='easy-to-use-icon'>
              <SiSpringsecurity />
              </div>
              <h1>Secured</h1>
              <p>With us you are <br/> sure of a safe <br/> account and <br/> good record<br/> keeping of your <br/> invoices</p>
            </div>

            <div className='easy-to-use'>
              <div className='easy-to-use-icon'>
              <GiHumanTarget/>
              </div>
              <h1>All in one</h1>
              <p>We get all your book<br/> keeping processes <br/> done in one place <br/> with a custom feel <br/> of your choice</p>
            </div>
          </div>
            <div className='hear-from'>
              <h1> Hear from our Users</h1>
            </div>

            <div className='testimonies'>
              <div className='first-testimony'>
                <img src={mansmiling } /> 
                <div className='testimony'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>

                  <h4>James Neerd</h4>
                </div>
              </div>

              <div className='first-testimony'>
                <img src={mansmiling } /> 
                <div className='testimony'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>

                  <h4>James Neerd</h4>
                </div>
              </div>

              <div className='first-testimony'>
                <img src={mansmiling } /> 
                <div className='testimony'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>

                  <h4>James Neerd</h4>
                </div>
              </div>

              <div className='first-testimony'>
                <img src={mansmiling } /> 
                <div className='testimony'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>

                  <h4>James Neerd</h4>
                </div>
              </div>
            </div>

              <div className='we-are-content'>
                <p>We are the best <br /> accounting experience</p>
                <button className='button-green'>Start free</button>
                <button className='button-white'>Learn More</button>
              </div>

              <div className='subscribe'>
                <div className="subscribe-body">
                <img src={IMG_2437} style={{width: 60, height: 10}} />
                <div>
                <input />
                <p>Subscribe to our newsletter to <br/> get updated news on our <br/> services</p>
                </div>

                </div>
                <div className='Quick-link'>
                  <h1>Quick Links</h1>
                  <ul>
                    <li>About</li>
                    <li>Services </li>
                    <li>Products </li>
                    <li>Contact Us </li>
                  </ul>
                </div>
              </div>
    </div>

  )
}

export default Homepage