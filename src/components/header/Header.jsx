import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/subham bw.png'
import HeaderSocials from './HeaderSocials'
import TextLoop from "react-text-loop";



function Header() {
  return (
    
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1  className='sam'>Subham Bhadra</h1>
        <h5 className='text-accent'> 
        
          <TextLoop className='text-loop' fade={true} noWrap={true} mask={true} interval={2500} children={["UI/UX Designer","Java Programmer","Frontend Developer"  ]}  />
            
          
        </h5>
        <CTA />
         <HeaderSocials/>
        <div className="me">
          <img src={ME} className="img-me" alt="Subham Bhadra" />
        </div>
       
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header