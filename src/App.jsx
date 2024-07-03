import React from 'react'
import LandingPage from './components/LandingPage'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='main w-full bg-[#F1F1F1]'>
      <LandingPage/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Footer/>
    </div>
  )
}

export default App