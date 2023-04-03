import React from 'react'
import CV from "../../assets/resume/resume.pdf"


function CTA() {
  return (
    <div className='cta'>
        <a href={CV} rel="noreferrer" target="_blank" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        
    </div>
  )
}

export default CTA