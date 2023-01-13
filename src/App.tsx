import { Intro, Header, Services, About, Skills, Contact, Footer } from './components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
    <Header />
    <Intro />
    <Services />
    <About />
    <Skills />
    <Contact />
    <Footer />
    </>
  )
}

export default App
