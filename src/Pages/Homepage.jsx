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


const Homepage = () => {
  return (
    <main class="root">
      <nav >
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

            <div>
              <p><MdLibraryAddCheck />Create estimates, and convert to quotes.</p>
              <p><MdLibraryAddCheck />Generate accounting reports,record journal.</p>
              <p><MdLibraryAddCheck />Custom schedules and reminders to automate your processes.</p>
            </div>
            <div>
            </div>
        </Container>
      </div>
    </main>

  )
}

export default Homepage