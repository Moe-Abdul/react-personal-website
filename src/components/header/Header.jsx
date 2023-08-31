import React from 'react'
import './header.css'
import CTA from './CTA'
import Selfie from '../../assets/selfie.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohamed Abdul</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />

        <div className="me">
          <img src={Selfie} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header