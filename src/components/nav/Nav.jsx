import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {LiaHandshake} from 'react-icons/lia'
import {BiConversation} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" title='Home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2 /></a>
      <a href="#about" title='About' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineInfoCircle /></a>
      <a href="#experience" title='Experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" title='Services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><LiaHandshake /></a>
      <a href="#contact" title='Contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiConversation /></a>
    </nav>
  )
}

export default Nav