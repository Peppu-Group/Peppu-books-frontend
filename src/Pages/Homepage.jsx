import React from 'react'
import {AiOutlineUserSwitch, AiOutlineArrowRight,} from 'react-icons/ai'
import {SiSpringsecurity} from 'react-icons/si'
import  {MdLibraryAddCheck} from 'react-icons/md'
import {GiHumanTarget} from 'react-icons/gi'
import Navbar from '../Components/Navbar'
import herosection from '../assets/herosection.png'
import Invoice from '../assets/Invoice.png'
import OrderlyAccounting from '../assets/OrderlyAccounting.png'
import Schedule from '../assets/Schedule.png'
import Automate from '../assets/Automate.png'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import user4 from '../assets/user4.png'
import IMG_2437 from '../assets/IMG_2437.png'

const Homepage = () => {
  return (
    <div className='home-page'>

    {/** Navbar div */}

      <div>
        <Navbar />
      </div>



      {/** Home Page body beginning Text */}
      <div className='body'>


         <div className='body-header'>
           <span><h1>Book Keeping</h1></span>
           <h1>Done Seemlessly</h1>
         </div>


          <div className='first-paragragh'>
              <p>We offer a seamless and easy to use <br /> algorithm that suits your desire</p>
          </div>



  
              <a href="/getstarted">
                 <button className='button-green'>Start for free</button>
              </a>
             <a href="/about">
                <button className='button-white'>How it works</button>
             </a>
      

             {/** list of features*/}
            <div className='offers-main'>
               <div className='check-offers'>
                   <div className='offer-list-1'>
                      <div className='icon'>
                         <MdLibraryAddCheck />
                      </div>
                        <p>Create estimates, convert to <br/> quotes</p>
                    </div>



          {/** SECOND CHECK LIST */}        
                      <div className='offer-list-2'>
                         <div className='icon'>
                             <MdLibraryAddCheck />
                         </div>
                            <p>Generate accounting reports, <br/> record journal</p>
                       </div>
       
       
         {/** third check list */}
                       <div className='offer-list-3'>
                          <div className='icon'>
                            <MdLibraryAddCheck />
                          </div>
                             <p>Custom schedules and reminders to automate your processes</p>
                          </div>
                       </div>
        
        {/** Check list image */}
        <div className='image'>
          <img  src={herosection}/>
        </div>
      </div>


 </div>
        
        
        
        <div className='Automate-container'>
          <div className='computerman'>
              <img src={Automate} />
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
                <img src={OrderlyAccounting} />
        </div>

        <div className='professional-invoice-container'>
            <img src={Invoice} />
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
            <img src={Schedule} />
        </div>
          
          
        <div className='why-peppu'>
          <h1>Why PEPPU BOOKS?</h1>
        </div>

          {/** Why you should choose us */}

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

          {/** Users Testimony */}
            <div className='hear-from'>
              <h1> Hear from our Users</h1>
            </div>

            <div className='testimonies'>
              <div className='first-testimony'>
                <img src={user1} /> 
                <div className='testimony'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>
                  <h4>James Neerd</h4>
                </div>
              </div>

              <div className='first-testimony'>
                <img src={user2} /> 
                <div className='testimony'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>
                  <h4>James Neerd</h4>
                </div>
              </div>

              <div className='first-testimony'>
                <img src={user3} /> 
                <div className='testimony'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>
                  <h4>James Neerd</h4>
                </div>
              </div>

              <div className='first-testimony'>
                <img src={user4 } /> 
                <div className='testimony'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>
                  <h4>James Neerd</h4>
                </div>
              </div>
            </div>

              {/** Contact us and link to other pages */}
              <div className='we-are-content'>
                <div className='we-are-box'>
                <p>We are the best <br /> accounting experience</p>
               <div>


                <div className='footer-button'>
                  <a href='/getstarted'>
                    <button className='green'>Start for free</button>
                  </a>
                
                  <a href='/about'>
                    <button className='white'>Learn More</button>
                  </a>
                </div>
                </div>
               </div>
              </div>

              <div className='subscribe'>
                <div className="subscribe-body">
                <img src={IMG_2437} style={{width: 80, height: 30}} />
               
                  <p>Subscribe to our newsletter to <br/> get updated news on our <br/> services</p>

                </div>
                <div className='Quick-link'>
                  <h1>Quick Links</h1>
                  <ul>
                    <a href='/about'><li>About</li></a>
                    <li>Services </li>
                    <li>Products </li>
                    <li>Contact Us </li>
                  </ul>
                </div>

                <div className='Quick-link'>
                  <h1>Follow Us</h1>
                  <ul>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Facebook </li>
                  </ul>
                </div>

                <div className='Quick-link'>
                  <h1>Terms & Policies</h1>
                  <ul>
                    <li>Privacy Policies</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
    </div>

  )
}

export default Homepage