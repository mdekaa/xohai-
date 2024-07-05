import React from 'react'
import './Hero.css'
import profile from '../../assets/profile-img.jpg'
import resume from '../../assets/resume-white.png'
import send from '../../assets/send-white.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile} alt='Image'></img>
      <h1>I'm <span>Sadman Saquib</span></h1>
      <p>A Programmer, Graphic Designer & Video Editor</p>
      <div className="hero-action">
        <div className="hero-connect"><img src={send} alt="" />Say Hello</div>
        <div className="hero-resume"><img src={resume} alt="" />My Resume</div>
      </div>
    </div>
  )
}

export default Hero
