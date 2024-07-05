import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'

const App = () => {
  return (
    
    <div>
        <h1 className='text-7xl font-extrabold text-center mt-10 text-blue-500'>Tailwind check</h1>
       <Navbar></Navbar>
       <Hero></Hero>
       <AboutMe></AboutMe>
    </div>
  )
}

export default App
