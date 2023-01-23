import React from 'react'
import { heroBut } from '../assets'
import styles from '../styles'

const GetStarted = () => 
  (
       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <img src={heroBut} alt='heroBut' className='w-[250px] h-[100px]'/>
      </div> 
    
  )


export default GetStarted