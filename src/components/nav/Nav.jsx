import React,{useState} from 'react';
import './nav.css';
import {BiHomeAlt, BiUser, BiMessageSquareDetail} from 'react-icons/bi'
import {BsJournalBookmark} from 'react-icons/bs'
import {RiServiceLine}from 'react-icons/ri'

function Nav() {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>

      <a href="#" title='Home' onClick={()=> setActiveNav('#')} className={activeNav === '#' ?'active':''}>
        <BiHomeAlt/>
      </a>

      <a href="#about" title='About'  onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ?'active':''}>
        <BiUser/>
      </a>

      <a href="#experience" title='Experiences'  onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ?'active':''}>
        <BsJournalBookmark/>
      </a>

      <a href="#services" title='Services'  onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ?'active':''}>
        <RiServiceLine/>
      </a>

      <a href="#contact" title='Contact'  onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ?'active':''}>
        <BiMessageSquareDetail/>
      </a>

    </nav>
  );
}

export default Nav;