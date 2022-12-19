import React from 'react'
import Navbar from '../Components/Navbar'
import aboutMain from '../assets/about-main.png'
import  mission from '../assets/mission image.png'
import user1 from '../assets/user1.png'
import IMG_2430 from '../assets/IMG_2430.png'
import {BsFillArrowRightCircleFill, BsArrowLeftCircle, BsFacebook} from 'react-icons/bs'
import {AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
const About = () => {
  return (
  <main className='about-main'>
    <nav>
      <Navbar/>
    </nav>


    <section className='about-header'>
      <main>
      <aside> <img src={IMG_2430} alt="" /></aside>
          <section className='about-peppu'>
              <section className='peppu-description'>
                <article>  
                  <h3>Peppu</h3>
                  <p>Peppubook is an accounting <br/>Software as a Service (SaaS).</p>
                </article> 
                <figure>
                  <img src={aboutMain} />
                </figure>
              </section>


              <article className='about-us'>
                <h3>About Us</h3>
                <p> At Peppubooks, we revolutionize the traditional 
                bookkeeping processes, instead of 
                spending valueable time in keeping books
                we allow small and medium businesses to focus on what's 
                most important "their business". We do this by automating 
                accounting processes and calculations.
                <br /> <br />

                With PEPPU books users can now automate and organize  
                accounting processes using googlesheets. All processes from 
                payment scheduling, account payable, invoice, receipts and 
                quotes generation as well as accounting reports can be
                automated with few clicks.
                </p>
              </article>
          </section>
          </main>


          <section className='mission-class'>
          <img src={mission}/>
          <article className='mission-vision'>
            <h3>Mission & Vision</h3>
            <p>At PEPPU Books we revolutionize the traditional 
                bookkeeping <br/> processes, instead of 
                spending valueable time in keeping <b/> books <br/>
                we allow small and medium businesses to focus on what's <br/>
                most important "their business". We do this by automating <br/>
                accounting processes and calculations.
                <br />
                <br/>
                With PEPPU books users can now automate and organize <br/> 
                accounting processes using googlesheets. All processes from <br/>
                payment scheduling, account payable, invoice, receipts and <br/> 
                quotes generation as well as accounting reports can be <br/> 
                automated with few clicks.
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