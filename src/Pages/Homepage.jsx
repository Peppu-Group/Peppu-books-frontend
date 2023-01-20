import React from 'react'
import {AiOutlineUserSwitch, AiOutlineArrowRight,} from 'react-icons/ai'
import {SiSpringsecurity} from 'react-icons/si'
import {BiCopyright} from 'react-icons/bi'
import {BsFillArrowRightCircleFill, BsArrowLeftCircle, BsFacebook, BsTwitter, BsGoogle, BsInstagram} from 'react-icons/bs'
import {AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
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
import Container from 'react-bootstrap/Container';

const Homepage = () => {
  return (
    <main className='root'>

    <section className='home-page'>

    {/** Navbar div */}

      <nav className='fixed'>
        <Navbar />
      
        </nav>


      {/** Home Page body beginning Text */}

      <section className='body'>


         <article className='body-header'>
           <span><h1>Book keeping</h1></span>
           <h3>done seemlessly</h3>
         </article>

          <article className='first-paragragh'>
              <p>We offer a seamless and easy to use <br /> algorithm that suits your desire.</p>
          </article>



            <article className='body-buttons'>
              <div>
              <a href="https://app.peppubooks.com/login">
                 <button className='button-green'>Start&nbsp;for&nbsp;free</button>
              </a>
              </div>
              <div>
             <a href="/about">
                <button className='button-white'>How&nbsp;it&nbsp;works</button>
             </a>
             </div>
             </article>


             {/** list of features*/}
            <section className='offers-main'>
               <section className='check-offers'>
                   <article className='offer-list-1'>
                      <figure className='icon'>
                         <MdLibraryAddCheck />
                      </figure>
                        <p>Create estimates, and convert to quotes.</p>
                    </article>



          {/** SECOND CHECK LIST */}        
                      <article className='offer-list-2'>
                         <figure className='icon'>
                             <MdLibraryAddCheck />
                         </figure>
                            <p>Generate accounting reports,record journal.</p>
                       </article>
       
       
         {/** third check list */}
                       <article className='offer-list-3'>
                          <figure className='icon'>
                            <MdLibraryAddCheck />
                          </figure>
                             <p>Custom schedules and reminders to automate your processes.</p>
                          </article>
                       </section>
        
        {/** Check list image */}
        <figure className='image'>
          <img  src={herosection}/>
        </figure >
      </section>


      <section className='Automate-container'>
        
              <img src={Automate} className='computerman' />
          
              <article className='Automate-head'>
                <header className='Automate'> 
                 <h2>Automate</h2>
                </header>
                  <p>Get automated bookkeeping <br/>process with few clicks.</p>
                   <p className='learn-more'>LEARN MORE <AiOutlineArrowRight/> </p>
                </article>
        </section>


 </section>
        
        
        
        


        <section className='orderly-accounting-container'>
            <article className='orderly-accounting'>
                <h2>Orderly&nbsp;accounting</h2>
                <p>Arrange share and <br/> retrieve all accounting <br/> processes in one place.</p>
                <p className='learn-more'>LEARN MORE <AiOutlineArrowRight/> </p>
            </article>
                <img src={OrderlyAccounting} />
        </section>

        <section className='professional-invoice-container'>
            <img src={Invoice} />
            <article className='professional-invoice'>
              <h2>Professional Invoices</h2>
              <p>Create Professional Invoices and <br/> receipts with few clicks, schedule<br/> and track payments.</p>
              <p className='learn-more'>LEARN MORE <AiOutlineArrowRight/> </p>
            </article>
        </section>


        <section className='custom-schedule-container'>
            <article className='custom-schedule'>
              <h2>Custom Schedules</h2>
              <p>Create custom schedules and <br/> reminders to automate your<br/>processes.</p>
              <p className='learn-more'>LEARN MORE <AiOutlineArrowRight/> </p>
            </article>
            <img src={Schedule} />
        </section>
          
          
        <article className='why-peppu'>
          <h3>Why PEPPU?</h3>
        </article >

          {/** Why you should choose us */}

         <section className='why-peppu-content'>
            <article className='easy-to-use'>
                <figure className='easy-to-use-icon'>
                  <AiOutlineUserSwitch />
                </figure>
                <h3>Easy to use</h3>
                <p>With our automated <br/> processes you have your <br/> accounting done without <br/> stress, and easily <br/> trace changes in <br/> your account.</p>
            </article>

            <article className='easy-to-use'>
              <figure className='easy-to-use-icon'>
                <SiSpringsecurity />
              </figure>
              <h3>Secured</h3>
              <p>With us you are <br/> sure of a safe <br/> account and <br/> good record<br/> keeping of your <br/> invoices.</p>
            </article>

            <article className='easy-to-use last'>
              <figure className='easy-to-use-icon'>
                <GiHumanTarget/>
              </figure>
              <h3>All in one</h3>
              <p>We get all your book<br/> keeping processes <br/> done in one place <br/> with a custom feel <br/> of your choice.</p>
            </article>
          </section>

          {/** Users Testimony */}
            <article className='hear-from'>
              <h2> Hear from our Users</h2>
            </article>

            <section className='testimonies'>
              <section className='first-testimony'>
                <img id="img-1" src={user1} /> 
                <article className='testimony'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>
                  <h4>James Neerd</h4>
                </article>
              </section>

              <section className='first-testimony'>
              <img  id="img-2"src={user2} /> 
                <article className='testimony'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>
                  <h4>James Neerd</h4>
                </article>
              </section>

              <section className='first-testimony'>
                <article className='testimony img-left'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>
                  <h4>James Neerd</h4>
                </article>
                <img id="img-3"src={user3} /> 
              </section>

              <section className='first-testimony'>                
                <article className='testimony img-left'>
                  <p>Book keeping have never <br/> been this easy, Peppu!</p>
                  <h4>James Neerd</h4>
                </article>
                <img id="img-4"src={user4 } />
              </section>
            </section>

              {/** Contact us and link to other pages */}
              <section className='we-offer-content'>
                <h4>We offer the best <br /> accounting experience</h4>
               <section>


                <section className='footer-button'>
                  <a href='https://app.peppubooks.com/login'>
                    <button className='green-button'>Start&nbsp;for&nbsp;free</button>
                  </a>
                
                  <a href='/about'>
                    <button className='white-button'>Learn&nbsp;More</button>
                  </a>
                </section>
               </section>
              </section>

              <footer className='subscribe'>
                
                <section className="subscribe-body">
                <img src={IMG_2437}/>
                <article>
                  <input placeholder='Email'/>
                  <p>Subscribe to our newsletter to <br/> get updated news on our <br/> services</p>
                </article>


                <article className='copyright'>
                  <article className='icons'>
                    <BiCopyright /> 
                  </article>
                  <p>2022 Peppu ventures</p>
                </article>
                </section>


                <section className='Quick-link'>
                  <h4>Quick Links</h4>
                  <ul>
                    <li>About</li>
                    <li>Services </li>
                    <li>Products </li>
                    <li>Contact Us </li>
                  </ul>
                </section>

                <section className='Follow-us'>
                  <h4>Follow Us</h4>
                  <ul>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Facebook </li>
                  </ul>
                </section>

                <section className='Terms'>
                  <h4>Terms & Policies</h4>
                  <ul>
                    <li>Privacy Policies</li>
                    <li>Terms & Conditions</li>
                  </ul>

                  <section className='copyright'>
                    <article className='copyright-text'>
                      <p>Peppu</p>
                    </article>
                    <article className='copyright-icon contacts'>
                    <BsGoogle />
                    <BsTwitter/>
                    <BsInstagram />
                    <BsFacebook />
                    </article>
                  </section>
                </section>
              </footer>
    </section>
    </main>

  )
}

export default Homepage