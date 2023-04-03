import React, { useState } from 'react'
import './mouseAnimation.css'


function MouseAnimation() {
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()
    

    window.addEventListener('mousemove',(e)=>{
        setCursorX(e.pageX)
        setCursorY(e.pageY)
    })


    const cursorAnimation = {
      animation: 'cursorAnimation 8s forwards'
    };


  return (

      <div id='cursor'
        style={{
            ...cursorAnimation,
            left: cursorX+'px',
            top:cursorY+'px'
        }}>

       </div>
    
  )
}

export default MouseAnimation