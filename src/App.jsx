import './App.css'
import './assets/css/styles.css'
import './assets/js/script'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Features from './components/Features'
import Locations from './components/Locations'
import Logos from './components/Logos'
import Nav from './components/Nav'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Transfer from './components/Transfer'
function App() {

  return (
    <>
    <Nav />
    <Showcase />
    <Logos />
    <Features/>
    <Carousel />
    <Transfer />
    <Testimonials />
    <Faq />
    <Contact/>
    <Locations /> 
    </>
  )
}

export default App
