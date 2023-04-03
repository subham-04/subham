import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css';

function Experience (){
  return (
    <section id='experience'>

      <h5>Acquired Skills</h5>
      <h2>Experience</h2>

      <div className="container experience__container">



        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">



            <article className='experience__details'>
                
                <div className="">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <h4>HTML</h4>
                </div>
                
                <small className="text-light">Experienced</small>
            </article>

            <article className='experience__details'>

              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>CSS</h4>
              </div>
                
                <small className="text-light">Experienced</small>
            </article>

            <article className='experience__details'>

              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>JavaScript</h4>
              </div>
                
                <small className="text-light">Intermediate</small>
            </article>

            <article className='experience__details'>

              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>BootStrap</h4>
              </div>
                
                <small className="text-light">Intermediate</small>
            </article>

            <article className='experience__details'>

              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>SCSS</h4>
              </div>
                
                <small className="text-light">Experienced</small>
            </article>

            <article className='experience__details'>
              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>React JS</h4>
              </div>
                
                <small className="text-light">Intermediate</small>
            </article>

            


          </div>

        </div>



        <div className="experience__backend" >
          <h3>Backend Development</h3>
          <div className="experience__content">



            <article className='experience__details'>
              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Node JS</h4>
              </div>
                
                <small className="text-light">Basic</small>
            </article>

            <article className='experience__details'>
              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Express JS</h4>
              </div>
                
                <small className="text-light">Basic</small>
            </article>

            <article className='experience__details'>
              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>MySQL</h4>
              </div>
                
                <small className="text-light">Basic</small>
            </article>

            <article className='experience__details'>
              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>MongoDB</h4>
              </div>
                
                <small className="text-light">Basic</small>
            </article>

            


          </div>

        </div>

        
        <div className="experience__languages">
          <h3>Programming Languages</h3>
          <div className="experience__content">



            <article className='experience__details'>
              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>C</h4>
              </div>
                
                <small className="text-light">Experienced</small>
            </article>

            <article className='experience__details'>
              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Java</h4>
              </div>
                
                <small className="text-light">Experienced</small>
            </article>

            <article className='experience__details'>
              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Python</h4>
              </div>
                
                <small className="text-light">Basic</small>
            </article>

            <article className='experience__details'>
              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Shell Script</h4>
              </div>
                
                <small className="text-light">Basic</small>
            </article>

            


          </div>

        </div>



        <div className="experience__uiux">
          <h3>UI/UX Design</h3>
          <div className="experience__content">



            <article className='experience__details'>
              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Figma</h4>
              </div>
                
                <small className="text-light">Intermediate</small>
            </article>

            <article className='experience__details'>
              <div className="">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Adobe XD</h4>
              </div>
                
                <small className="text-light">Intermediate</small>
            </article>

                      


          </div>

        </div>




      </div>
    </section>
  );
}

export default Experience;

