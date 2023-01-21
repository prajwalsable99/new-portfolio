
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
// import Services from "./components/Services";
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Language from './components/Language';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Coding from './components/Coding';
import { useEffect } from 'react';
// import Hero2 from './components/Hero2';

function App() {

useEffect(() => {
  window.history.scrollRestoration='manual';
}, [])

  return (



    <>
{/* <Hero2></Hero2> */}

      <Navbar></Navbar>

      <Header></Header>
      <Journey></Journey>
      <Portfolio></Portfolio>
      <Projects></Projects>
      {/* <Services></Services> */}
      
      <Coding></Coding>
      <Certifications></Certifications>
      <Contact></Contact>
      <Footer></Footer>

      

    </>

  )
}

export default App;
