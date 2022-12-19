import React from 'react'
import Navbar from '../Components/Navbar'
import Invoice from '../assets/Invoice.png'
import getstarted from '../assets/getstarted.png'
import user1 from '../assets/user1.png'
import {BsFillArrowRightCircleFill, BsArrowLeftCircle, BsFacebook} from 'react-icons/bs'
import {AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
const About = () => {
  return (
  <main>
    <nav>
      <Navbar/>
    </nav>


    <section className='about-header'>
          <section className='about-peppu'>
              <section className='peppu-description'>
                <article>  
                  <h3>Peppu Books</h3>
                  <p>PEPPU Books is an accounting <br/>Software as a Service (SaaS) application</p>
                </article> 
                <figure>
                  <img src={Invoice} width={250} height={200}/>
                </figure>
              </section>


              <article className='about-us'>
                <h3>About Us</h3>
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
              </article>
          </section>


          <section className='mission-class'>
          <img src={getstarted} width={250} height={200}/>
          <article className='mission-vision'>
            <h3>Mission & Vision</h3>
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
          </article>
          </section>
  





    <section className='meet-the-team'> 
      
      <h3>Meet the team</h3>

      <section className='team'>

      <section className='the-team'>
        <img src={user1}/>
        <p>Ferdinad Okpeghene</p>
        <p className='position'>UI/UX Designer</p>
      </section>


      <section className='the-team'> 
        <img src={user1}/>
        <p>Ferdinad Okpeghene</p>
        <p className='position'>UI/UX Designer</p>
      </section>


      <section className='the-team'>
        <img src={user1}/>
        <p>Ferdinad Okpeghene</p>
        <p className='position'>UI/UX Designer</p>
      </section>


      <section className='the-team'>
        <img src={user1}/>
        <p>Ferdinad Okpeghene</p>
        <p className='position'>UI/UX Designer</p>
      </section>


      <section className='the-team'>
        <img src={user1}/>
        <p>Ferdinad Okpeghene</p>
        <p className='position'>UI/UX Designer</p>
      </section>
      </section>

      <section className='arrow-icon'>
        <figure className='left'>
            <BsArrowLeftCircle/>
        </figure>
        <figure className='right'>
            <BsFillArrowRightCircleFill/>
        </figure>
      </section>

      <section className='start'> 
        <section className='start-buttons'>
          <article>
            <button className='green-button'>start for free</button>
          </article>
          <article >
            <button className='white-button'>How it works</button>
          </article>
        </section>


        <footer className='get-in-touch'>
           <h3>Get in touch</h3>
            <article className='socials'>
                <figure className='icons'>    
                    <AiOutlineGoogle/>
                </figure>
              <p>Peppubooks@gmail.com</p>
            </article>

            <article className='socials'>
                <figure className='icons'>   
                  <AiOutlineTwitter/>
                </figure>
              <p>Peppubooks</p>
            </article>

            <artcle className='socials'>
              <figure className='icons'>  
                <AiOutlineInstagram/>
              </figure>
              <p>Peppubooks</p>
            </artcle>
            <article className='socials'>
                <figure className='icons'>  
                   <BsFacebook/>
                </figure>
               <p>Peppubooks</p>
            </article>
          </footer>
       </section>

    </section>
    </section>
  </main>
  )
}

export default About