import React from 'react'
import Navbar from '../Components/Navbar'
import Invoice from '../assets/Invoice.png'
import getstarted from '../assets/getstarted.png'

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
  





    <div>
      <h1>Meet the team</h1>
    </div>
    </div>
  </div>
  )
}

export default About