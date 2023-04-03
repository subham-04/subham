import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/images/subham bw.png';
function about(){
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">

          <div className="about__me-image">
            <img src={ME} alt="Sam" />
          </div>

        </div>
        <div className="about__content">

          <div className="about__cards">

            <article className="about__card">
                <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
          

          
            <article className="about__card">
                <FiUsers className='about__icon'/>
              <h5>Users</h5>
              <small>1000+ </small>
            </article>
          

          
            <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>
          

          <p className='creator-description'>
          Hello, humans of the internet! I'm <span className='creator'>Subham</span>  deeply passionate about Web-Development, UX design, and Cybersecurity. I'm a triple threat as a Designer, Programmer & Developer love using my skills to solve real-world problems.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
        </div>
     
    </section>
  );
}

export default about;