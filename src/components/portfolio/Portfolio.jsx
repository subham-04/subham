import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './portfolio.css';
import {BiInfoCircle} from 'react-icons/bi';
import Data from './projects'




function Portfolio() {
    

  return (
    <section id='portfolio'>
      <h5>Selected Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">


     
          { Data.map(({id,image,title,github,live,desc})=>{

            return(
               <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <Popup 
                trigger={<button className='project-description-btn' ><BiInfoCircle  className='project-description-icon' /></button>} 
                position="bottom right"   
                on={['hover', 'focus']}
                
                
              >
                  <div>{desc}</div>
              </Popup>
              
              <img src={image} alt="project-image" />
          </div>

          <h3>{title}</h3>
          

          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' rel="noreferrer">Code</a>
            <a href={live} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>

          

          
          
        </article> 
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio;