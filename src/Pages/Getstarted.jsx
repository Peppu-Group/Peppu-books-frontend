import React from 'react'
import getstarted from '../assets/getstarted.png'
import IMG_2437 from '../assets/IMG_2437.png'
import google from '../assets/google.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Getstarted = () => {
  return (
    <main className='container'>


      {/* The big image in the get started page* */}
        <figure className='container-image'>
            <img src={getstarted} width={600} />
        </figure>



        {/** The write ups in the right conner */}
        <section className='container-text'>


            <figure>
                 <img src={IMG_2437}  />
            </figure>


            <article className='container-paragraph'>
              <p>Let's make your <br /> life simple with our <br/> seamless book keeping</p>
            </article>


            <article className='getstarted-with-google'>
                <a href='#'>Get started <span className='g-in-google'>G</span ><span className='o-in-google'>o</span><span className='onext-in-google'>o</span><span className='g-in-google'>g</span><span className='l-in-google'>l</span ><span className='e-in-google'>e</span></a>
               
            </article>


            <article className='works'>
                
                
                <p>See how Peppu works </p>

                <figure className='icon'>
                  <AiOutlineArrowRight />
                </figure>


            </article>


            
        </section>
    </main>
  )
}

export default Getstarted