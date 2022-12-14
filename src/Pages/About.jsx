import React from 'react'
import Navbar from '../Components/Navbar'
import Invoice from '../assets/Invoice.png'
import getstarted from '../assets/getstarted.png'
import user1 from '../assets/user1.png'
import {BsFillArrowRightCircleFill, BsArrowLeftCircle, BsFacebook} from 'react-icons/bs'
import {AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
const About = () => {
  return (
  <div>
    <Navbar/>
    <div className='about-header'>
          <div className='about-peppu'>
              <div className='peppu-description'>
                <div>  
                  <h1>Peppu Books</h1>
                  <p>PEPPU Books is an accounting <br/>Software as a Service (SaaS) application</p>
                </div> 
                <div>
                  <img src={Invoice} width={250} height={200}/>
                </div>
              </div>


              <div className='about-us'>
                <h1>About Us</h1>
                <p>At PEPPU Books we revolutionize the traditional 
                bookkeeping <br/> processes, instead of 
                spending valueable time in keeping <b/> books <br/>
                we allow small and medium businesses to focus on what's <br/>
                most important "their business". We do this by automating <br/>
                accounting processes and calculations
                <br />
                <br/>
                <br/>
                With PEPPU books users can now automate and organize <br/> 
                accounting processes using googlesheets. All processes from <br/>
                payment scheduling, account payable, invoice, receipts and <br/> 
                quotes generation as well as accounting reports can be <br/> 
                automated with few clicks
                </p>
              </div>
          </div>
          <div className='mission-class'>
          <img src={getstarted} width={250} height={200}/>
          <div className='mission-vision'>
            <h1>Mission & Vision</h1>
            <p>At PEPPU Books we revolutionize the traditional 
                bookkeeping <br/> processes, instead of 
                spending valueable time in keeping <b/> books <br/>
                we allow small and medium businesses to focus on what's <br/>
                most important "their business". We do this by automating <br/>
                accounting processes and calculations
                <br />
                <br/>
                <br/>
                With PEPPU books users can now automate and organize <br/> 
                accounting processes using googlesheets. All processes from <br/>
                payment scheduling, account payable, invoice, receipts and <br/> 
                quotes generation as well as accounting reports can be <br/> 
                automated with few clicks
                </p>
          </div>
          </div>
  





    <div className='meet-the-team'> 
      
      <h1>Meet the team</h1>

      <div className='team'>
      <div className='the-team'>
        <img src={user1}/>
        <p>Ferdinad Okpeghene</p>
        <p className='position'>UI/UX Designer</p>
      </div>


      <div className='the-team'> 
        <img src={user1}/>
        <p>Ferdinad Okpeghene</p>
        <p className='position'>UI/UX Designer</p>
      </div>


      <div className='the-team'>
        <img src={user1}/>
        <p>Ferdinad Okpeghene</p>
        <p className='position'>UI/UX Designer</p>
      </div>


      <div className='the-team'>
        <img src={user1}/>
        <p>Ferdinad Okpeghene</p>
        <p className='position'>UI/UX Designer</p>
      </div>


      <div className='the-team'>
        <img src={user1}/>
        <p>Ferdinad Okpeghene</p>
        <p className='position'>UI/UX Designer</p>
      </div>
      </div>

      <div className='arrow-icon'>
        <div className='left'>
            <BsArrowLeftCircle/>
        </div>
        <div className='right'>
            <BsFillArrowRightCircleFill/>
        </div>
      </div>

      <div className='start'> 
        <div className='start-buttons'>
          <div>
            <button className='green-button'>start for free</button>
          </div>
          <div >
            <button className='white-button'>How it works</button>
          </div>
        </div>
        <div className='get-in-touch'>
           <h1>Get in touch</h1>
            <div className='socials'>
                <div className='icons'>    
                    <AiOutlineGoogle/>
                </div>
              <p>Peppubooks@gmail.com</p>
            </div>
            <div className='socials'>
                <div className='icons'>   
                  <AiOutlineTwitter/>
                </div>
              <p>Peppubooks</p>
            </div>
            <div className='socials'>
              <div className='icons'>  
                <AiOutlineInstagram/>
              </div>
              <p>Peppubooks</p>
            </div>
            <div className='socials'>
                <div className='icons'>  
                   <BsFacebook/>
                </div>
               <p>Peppubooks</p>
            </div>
          </div>
       </div>

    </div>
    </div>
  </div>
  )
}

export default About