import React from 'react'
import './about.css'
import Selfie from '../../assets/secondPhoto.png'
import {BiTimeFive} from 'react-icons/bi'
import {BsAward} from 'react-icons/bs'
import {AiOutlineLaptop} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Selfie} alt="Landscape view of a mountain overlook" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiTimeFive className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <AiOutlineLaptop className='about__icon' />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolores dicta tempore repellendus est ullam laborum corrupti 
            eius quisquam dolorum aperiam dolore magni, optio suscipit 
            accusantium placeat molestiae, fugiat neque cum!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About