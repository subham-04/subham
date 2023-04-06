import React from 'react';
import {FiLinkedin, FiGithub, FiInstagram} from 'react-icons/fi'
import './footer.css';
import Skyline from '../../assets/gif/Skyline-DFW.gif'

function Footer() {
  return (
    <footer>
      <div className='footer__lists'>
      <a href="#" className='footer__logo'>Sam</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
       
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/subham0422/" target='_blank' rel='noreferrer'><FiLinkedin/></a>
        <a href="https://github.com/subham-04"  target='_blank' rel='noreferrer'><FiGithub/></a>
        <a href="https://www.instagram.com/subham0422/"  target='_blank' rel='noreferrer'><FiInstagram/></a>
      </div>
    </div>
    <div className="skyline-box">
       <img className="skyline" src={Skyline} alt="" />
    </div>
    <div className="footer__copyright">
      
      
      <div>
        &copy; SamCorp All rights Reserved
      </div>
    </div>
    </footer>
  )
}

export default Footer