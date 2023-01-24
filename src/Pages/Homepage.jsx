import React from 'react'
import { AiOutlineUserSwitch, AiOutlineArrowRight, } from 'react-icons/ai'
import { SiSpringsecurity } from 'react-icons/si'
import { BiCopyright } from 'react-icons/bi'
import { BsFillArrowRightCircleFill, BsArrowLeftCircle, BsFacebook, BsTwitter, BsGoogle, BsInstagram } from 'react-icons/bs'
import { AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { MdLibraryAddCheck } from 'react-icons/md'
import { GiHumanTarget } from 'react-icons/gi'
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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'


const Homepage = () => {
  return (
    <main class="root">
      <nav className='fixed'>
          <Navbar />
        </nav>
      <div className='home-body'>
        <Container fluid >
          <div className='body-header'>
            <p className='header'>Book keeping</p>
            <p>done seemlessly</p>
          </div>
          <div className='first-paragragh'>
            <p>We offer a seamless and easy to use  algorithm that suits your desire.</p>
          </div>
          <Stack direction="horizontal" gap={3} className='body-buttons'>
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
          </Stack>
          <Row>
            <Col>
              <div className='first-paragrah'>
                <p><MdLibraryAddCheck className='g-tick'/>Create estimates, and convert to quotes.</p>
                <p><MdLibraryAddCheck className='g-tick'/>Generate accounting reports,record journal.</p>
                <p><MdLibraryAddCheck className='g-tick'/>Custom schedules and reminders to automate your processes.</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image fluid='true' src={herosection} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <Image fluid='true' src={Automate} />
              </div>
            </Col>
            <Col>
              <h2 className='pb-4'>Automate</h2>
              <p className='lead fw-normal'>Get automated bookkeeping <br />process with few clicks.</p>
              <p className='learn-more fw-normal lead'>LEARN MORE <AiOutlineArrowRight /> </p>
            </Col>
          </Row>
          <Row className='orderly-accounting-container'>
            <Col>
              <div>
                <h2>Orderly&nbsp;accounting</h2>
                <p className='lead fw-normal'>Arrange share and <br /> retrieve all accounting <br /> processes in one place.</p>
                <p className='learn-more fw-normal lead'>LEARN MORE <AiOutlineArrowRight /> </p>
              </div>
            </Col>
            <Col>
              <div>
                <Image fluid='true' src={OrderlyAccounting} />
              </div>
            </Col>
          </Row>
          <Row className='professional-invoice-container'>
            <Col>
              <h2>Professional Invoices</h2>
              <p className='lead fw-normal'>Create Professional Invoices and <br /> receipts with few clicks, schedule<br /> and track payments.</p>
              <p className='learn-more lead fw-normal'>LEARN MORE <AiOutlineArrowRight /> </p>
            </Col>
            <Col>
              <div>
                <Image fluid='true' src={Invoice} />
              </div>
            </Col>
          </Row>
          <Row className='custom-schedule-container'>
            <Col>
              <h2>Custom Schedules</h2>
              <p className='fw-normal lead'>Create custom schedules and <br /> reminders to automate your<br />processes.</p>
              <p className='learn-more fw-normal'>LEARN MORE <AiOutlineArrowRight /> </p>
            </Col>
            <Col>
              <div>
                <Image fluid='true' src={Schedule} />
              </div>
            </Col>
          </Row>
          <Row>
          <article className='why-peppu'>
          <h3>Why PEPPU?</h3>
          </article >
            <Col>
              <section className='card w-100 h-75'>
                <article className='easy-to-use card-body'>
                  <figure className='easy-to-use-icon'>
                    <AiOutlineUserSwitch />
                  </figure>
                  <h3 className='card-title'>Easy to use</h3>
                  <p className='card-text'>With our automated <br /> processes you have your <br /> accounting done without <br /> stress, and easily <br /> trace changes in <br /> your account.</p>
                </article>
              </section>
            </Col>
            <Col>
            <section className='card w-full h-75'>
              <article className='easy-to-use card-body'>
                <figure className='easy-to-use-icon'>
                  <SiSpringsecurity />
                </figure>
                <h3 className='card-title'>Secured</h3>
                <p className='card-text'>With us you are <br /> sure of a safe <br /> account and <br /> good record<br /> keeping of your <br /> invoices.</p>
              </article>
            </section>
            </Col>
            <Col>
            <section className='card w-full h-75'>

              <article className='easy-to-use last card-body'>
                <figure className='easy-to-use-icon'>
                  <GiHumanTarget />
                </figure>
                <h3 className='card-title'>All in one</h3>
                <p className='card-text'>We get all your book<br /> keeping processes <br /> done in one place <br /> with a custom feel <br /> of your choice.</p>
              </article>
            </section>
              </Col>
          </Row>
          <article className='hear-from'>
            <h2> Hear from our Users</h2>
          </article>
          <section className='testimonies'>
            <section className='first-testimony'>
              <img id="img-1" src={user1} />
              <article className='testimony'>
                <p>Book keeping have never <br /> been this easy, Peppu!</p>
                <h4>James Neerd</h4>
              </article>
            </section>

            <section className='first-testimony'>
              <img id="img-2" src={user2} />
              <article className='testimony'>
                <p>Book keeping have never <br /> been this easy, Peppu!</p>
                <h4>James Neerd</h4>
              </article>
            </section>

            <section className='first-testimony'>
              <article className='testimony img-left'>
                <p>Book keeping have never <br /> been this easy, Peppu!</p>
                <h4>James Neerd</h4>
              </article>
              <img id="img-3" src={user3} />
            </section>

            <section className='first-testimony'>
              <article className='testimony img-left'>
                <p>Book keeping have never <br /> been this easy, Peppu!</p>
                <h4>James Neerd</h4>
              </article>
              <img id="img-4" src={user4} />
            </section>
          </section>

          <section className='we-offer-content'>
            <h4>We offer the best <br /> accounting experience</h4>
            <a href='https://app.peppubooks.com/login'>
              <button className='g-button'>Start&nbsp;for&nbsp;free</button>
            </a>

            <a href='/about'>
              <button className='w-button'>Learn&nbsp;More</button>
            </a>
          </section>


          <footer className="page-footer font-small  pt-4 subscribe">
            <div className="container-fluid text-center text-md-left">
              <div className="row">
                <div className="col-md-3 mb-md-0 mb-3">
                  <section className="subscribe-body">
                    <img src={IMG_2437} />
                    <article>
                      <input placeholder='Email' />
                      <p>Subscribe to our newsletter to <br /> get updated news on our <br /> services</p>
                    </article>
                  </section>

                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                  <ul className="">
                    <li>Quick Links</li>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Services</a></li>
                    <li><a href="#!">Products</a></li>
                    <li><a href="#!">Contact Us</a></li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                  <ul className="">
                    <li>Follow Us</li>
                    <li><a href="#!">Twitter</a></li>
                    <li><a href="#!">Instagram</a></li>
                    <li><a href="#!">Facebook</a></li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                  <ul className="">
                    <li>Terms & Policies</li>
                    <li><a href="#!">Privacy Policies</a></li>
                    <li><a href="#!">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <Row className='foot'>
              <Col>
                <div className="">
                  <p> © 2020
                    <a href="https://peppubooks.com/"> Peppu Ventures</a> </p>
                </div>
              </Col>
              <Col >
                <div >
                  <BsGoogle className="foot-icon"/>
                  <BsTwitter className="foot-icon"/>
                  <BsInstagram className="foot-icon"/>
                  <BsFacebook className="foot-icon"/>
                </div>
              </Col>
            </Row>

          </footer>
          <div>
          </div>
        </Container>
      </div>
    </main>

  )
}

export default Homepage