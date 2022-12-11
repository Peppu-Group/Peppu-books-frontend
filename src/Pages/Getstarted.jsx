import React from 'react'
import getstarted from '../assets/Getstarted.png'
import IMG_2437 from '../assets/IMG_2437.png'
import google from '../assets/google.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Getstarted = () => {
  return (
    <div className='container'>
        <div className='container-image'>
            <img src={getstarted} width={600} />
        </div>

        <div className='container-text'>
            <div>
                 <img src={IMG_2437} width={80} />
            </div>
            <div className='container-paragraph'>
              <p>Let's make your <br /> life simple with our <br/> seamless book keeping</p>
            </div>
            <div className='h3'>
                <h3>Get started</h3>
                <img src={google} width={60} height={30}/>
            </div>
            <div className='works'>
                <p>See how Peppu works </p>

                <div className='icon'>
                <AiOutlineArrowRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Getstarted