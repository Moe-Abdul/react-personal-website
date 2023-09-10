import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/moeabdul" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/moe-abdul" target="_blank"><BsGithub/></a>
        <a href="https://instagram.com/moeinstaamoe" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/moe_lvz" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials