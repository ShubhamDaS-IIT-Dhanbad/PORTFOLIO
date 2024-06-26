import React, { useState } from 'react';
import '../styles/contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail, MdAddLocationAlt } from "react-icons/md";

function Contact() {
  const [notification, setNotification] = useState(null);

  const notifySuccess = () => {
    setNotification('Message sent successfully!');
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      notifySuccess();
      e.target.reset();
    }, 1000);
  };

  return (
    <div className='contact'>
      <div className='contact-div'>
        <div className='contact-div-left'>
          <h2>LET'S WORK TOGETHER</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora expedita deleniti porro quos illum aliquid voluptatum saepe, temporibus vitae eaque quod neque minus distinctio enim iusto unde dolore.</p>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='contact-grid'>
              <input type='text' name='firstName' placeholder='First Name' required />
              <input type='text' name='lastName' placeholder='Last Name' required />
              <input type='email' name='email' placeholder='Email Address' required />
              <input type='tel' name='phoneNumber' placeholder='Phone Number' required />
            </div>
            <input type='text' name='selectedService' placeholder='Select a Service' className='full-width-input' list='services' required />
            <datalist id='services'>
              <option value='Website Building'/>
              <option value='Freelancing Work' />
              <option value='Editing' />
              <option value='Software Development Engineer (SDE) Job Profile' />
            </datalist>
            <textarea name='message' placeholder='Type your message here' className='full-width-input'></textarea>
            <button type='submit'>Send Message</button>
          </form>
          {notification && <div className="notification">{notification}</div>}
        </div>
        <div className='contact-div-right'>
          <div className='contact-icons'>
            <div className='contact-icon'>
              <FaPhoneAlt className='contact-icon-FaPhoneAlt' />
              <div>
                <p>Phone</p>
                <h3>(+91) 8250846979</h3>
              </div>
            </div>
            <div className='contact-icon'>
              <MdOutlineAttachEmail className='contact-icon-MdOutlineAttachEmail' />
              <div>
                <p>Email</p>
                <h3>shubhamdasiitcs@gmail.com</h3>
              </div>
            </div>
            <div className='contact-icon'>
              <MdAddLocationAlt className='contact-icon-MdAddLocationAlt' />
              <div>
                <p>Address</p>
                <h3>Jharkhand</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
