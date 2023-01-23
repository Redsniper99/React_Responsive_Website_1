import React from 'react'
import styles from '../styles'
import GetStarted from './GetStarted'
import { hero } from '../assets'

const Hero = () => 
   (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
        <span className='text-gradient'>Transforming 
          </span>{" "}
         Spaces,  <br className='sm:block hidden'/>{" "}

          <span className='text-gradient'>Creating 
          </span>{" "}
          Possibilities
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted/>
        </div>
      </div>

      <div>
        <img src={hero} alt="hero" className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink_gradient'/>
      </div>

      

    
    

    </section>
    
  )


export default Hero