import React from 'react';
import {BsCheck2} from 'react-icons/bs';
import './service.css';


function Services() {
  return (
    <section id='services'>
      <h5>Offering</h5>
      <h2>Services</h2>

      <div className="container services__container">



      <article className="service card-content">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>

          <ul className="service__list">
            <li>
                <BsCheck2 className='service__list-icon' />
                <p>Branding and Identity</p>
            </li>
            
            <li>
                <BsCheck2 className='service__list-icon' />
                <p>User Interface Design</p>
            </li>

            <li>
                <BsCheck2 className='service__list-icon' />
                <p>Responsive Design</p>
            </li>

            <li>
                <BsCheck2 className='service__list-icon' />
                <p>Web Typography</p>
            </li>
            
            
          </ul>


        </article>


        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
                <BsCheck2 className='service__list-icon' />
                <p>Micro interaction</p>
            </li>
            
            <li>
                <BsCheck2 className='service__list-icon' />
                <p>Motion design</p>
            </li>
            
            <li>
                <BsCheck2 className='service__list-icon' />
                <p>Wireframing</p>
            </li>
            <li>
                <BsCheck2 className='service__list-icon' />
                <p>3D design</p>
            </li>
          </ul>


        </article>


        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
                <BsCheck2 className='service__list-icon' />
                <p>Frontend Development</p>
            </li>
            <li>
                <BsCheck2 className='service__list-icon' />
                <p>Backend Development</p>
            </li>
            <li>
                <BsCheck2 className='service__list-icon' />
                <p>Database Design</p>
            </li>
            <li>
                <BsCheck2 className='service__list-icon' />
                <p>Maintenance & Support</p>
            </li>
          </ul>


        </article>

        





      </div>
    </section>
  )
}

export default Services