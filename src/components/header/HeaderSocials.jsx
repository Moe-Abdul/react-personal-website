import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/moeabdul" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/moe-abdul" target="_blank"><BsGithub/></a>
        <a href="https://instagram.com/moeinstaamoe" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials