import React from 'react'
import Navbar from '../Components/Navbar'
import aboutMain from '../assets/about-main.png'
import mission from '../assets/mission image.png'
import user1 from '../assets/user1.png'
import IMG_2430 from '../assets/IMG_2430.png'
import { BsFillArrowRightCircleFill, BsArrowLeftCircle, BsFacebook } from 'react-icons/bs'
import { AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
const About = () => {
  return (
    <body className='about-main'>
      <nav>
        <Navbar />
      </nav>


      <section className='about-header'>


        <section className='about-peppu'>
          <aside> <img src={IMG_2430} /></aside>

          <main>
            <section className='peppu-description'>
              <article>
                <h3>Peppu</h3>
                <p>Peppubook is an accounting <br />Software as a Service (SaaS).</p>
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
          </main>
        </section>




        <section className='mission-class'>
          <img src={mission} />
          <article className='mission-vision'>
            <h3>Our Offers</h3>
            <p>With PEPPUbooks, this is achieved. We offer seamless and
              easy bookkeeping and accounting processes. Just key in the numbers,
              we do the magic for you.With our invoice generator, you can build, send,
              receive professional invoices and receipts and as well track payments.
              We facilitate a faster yet secured handshake between the business and
              the client through a high level collaborative operation between both parties.
              Our integrated dashboard offers you an on-the-go assessment of the business
              progress and projections.

            </p>
          </article>
        </section>
        <section className='what-we-are'>
          <h3>What we are</h3>
          <p>
            PEPPUbooks is the MSME’s compass, the Accountant and Financial Analyst’s wonder
            tool in the toolset, the large corporation’s financial Mirror-on-the-wall` and the
            rollercoaster to financial accounting success for every user.
            PEPPUBooks is obsessed with seeing your business succeed financially
            because a great financial record is a pointer to success.

          </p>
        </section>






        <section className='meet-the-team'>

          <h3>Meet the team</h3>

          <section className='team'>

            <section className='the-team'>
              <img src={user1} />
              <p>Ferdinad Okpeghene</p>
              <p className='position'>UI/UX Designer</p>
            </section>


            <section className='the-team'>
              <img src={user1} />
              <p>Ferdinad Okpeghene</p>
              <p className='position'>UI/UX Designer</p>
            </section>


            <section className='the-team'>
              <img src={user1} />
              <p>Ferdinad Okpeghene</p>
              <p className='position'>UI/UX Designer</p>
            </section>


            <section className='the-team'>
              <img src={user1} />
              <p>Ferdinad Okpeghene</p>
              <p className='position'>UI/UX Designer</p>
            </section>


            <section className='the-team'>
              <img src={user1} />
              <p>Ferdinad Okpeghene</p>
              <p className='position'>UI/UX Designer</p>
            </section>
          </section>

          <section className='arrow-icon'>
            <figure className='left'>
              <BsArrowLeftCircle />
            </figure>
            <figure className='right'>
              <BsFillArrowRightCircleFill />
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
                  <AiOutlineGoogle />
                </figure>
                <p>Peppubooks@gmail.com</p>
              </article>

              <article className='socials'>
                <figure className='icons'>
                  <AiOutlineTwitter />
                </figure>
                <p>Peppubooks</p>
              </article>

              <artcle className='socials'>
                <figure className='icons'>
                  <AiOutlineInstagram />
                </figure>
                <p>Peppubooks</p>
              </artcle>
              <article className='socials'>
                <figure className='icons'>
                  <BsFacebook />
                </figure>
                <p>Peppubooks</p>
              </article>
            </footer>
          </section>


      </section>
      </section>
    </body>
  )
}

export default About