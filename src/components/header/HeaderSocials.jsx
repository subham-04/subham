import React from 'react'
import {FiLinkedin, FiGithub, FiInstagram} from 'react-icons/fi'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/subham0422" rel="noreferrer" target="_blank"><FiLinkedin/></a>
        <a href="https://github.com/subham-04" rel="noreferrer" target="_blank"><FiGithub/></a>
        <a href="https://www.instagram.com/subham0422" rel="noreferrer" target="_blank"><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocials