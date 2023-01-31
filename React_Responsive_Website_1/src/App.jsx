import styles from './styles'
import {
  Navbar,
  Hero,
  Stats,
  //FeedbackCard,
  //GetStarted,
  //Button,
  CardDeal,
  Clients,
  Testimonials,
  Footer,
  Business,
  CTA,
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
          <CardDeal />
          <Testimonials/>
           {/* <Business />
         
          
          <Clients/>
          <CTA/>
          <Footer/> */}



          </div>
      </div>
    </div>
  );


export default App