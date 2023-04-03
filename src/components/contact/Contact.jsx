import React ,{useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {FiLinkedin, FiInstagram} from 'react-icons/fi'

function Contact () {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9rzdhir', 'template_q3y8fdz', form.current, 'B6KjonwNs0XL5poEc')
      .then((result) => {
          console.log(result.text);
          setShowSuccessMessage(true)
          
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

 

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <article className='contact_option'>
            <HiOutlineMail className='social-icon'/>
            <h4>Email</h4>
            <a href="mailto:subham0422@gmail.com" target='_blank' rel="noreferrer">Send a mail</a>
          </article>

          <article className='contact_option'>
            <FiLinkedin className='social-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/subham0422/" target='_blank' rel="noreferrer">Let's Connect</a>
          </article>

          <article className='contact_option'>
            <FiInstagram className='social-icon'/>
            <h4>Instagram</h4>
            <a href="https://www.instagram.com/subham0422/" target='_blank' rel="noreferrer">Do Follow</a>
          </article>


          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Full Name' required/>
            <input type="email" name="email" placeholder='name@gmail.com' required/>
            <textarea name="message"  rows="7" placeholder='Your Thoughts' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
          {
          showSuccessMessage && 
          (<div className='success-message'>
              <p>Your message has been sent successfully!</p>
              <button className='close-btn' onClick={() => setShowSuccessMessage(false)}>Ok</button>
            </div>
          )}
      </div>
    </section>
  );
}

export default Contact;