import React from 'react'
import './about.css'
import Selfie from '../../assets/selfieFull.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Selfie} alt="" />
          </div>
        </div>
        <div className="about__content"></div>
      </div>
    </section>
  )
}

export default About