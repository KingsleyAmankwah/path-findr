import React from 'react'
import Hero from '../components/Hero.js'
import Body from '../components/Body.js'
// import GetStarted from '../components/GetStarted.js'
import Navbar from '../components/Navbar.js'

function Home() {
  return (
    <div>
    <Navbar/>
     <Hero/>
     <Body/>
     {/* <GetStarted/> */}
    </div>
  )
}

export default Home