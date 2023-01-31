import React from 'react'
import styles from "../styles"
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => 
  (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

      <div/>
     <div className='w-full flx justify-between items-center md:flex-row flex-col sm:sb-16 mb-6 relative z-[1]'>
      <h1 className={styles.heading2}>How peoples <br className='sm:block'/> think about us
      </h1>
     </div>
    </section>
   
  )


export default Testimonials