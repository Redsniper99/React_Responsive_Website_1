import styles from './styles'
import {
  Navbar,
  Hero,
  Stats,
  Projects,
  Testimonials,
  Footer,
  Services,
} from './components'

const App = () => (
    <div  className='bg-primary w-full overflow-hidden py-2' >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

          
          <Stats /> 
          <Services/>
          <Projects />
          <Testimonials/>
         



          </div>
         
          
      </div>
      <div >
      <Footer/> 

      </div>
      
    </div>
  );


export default App