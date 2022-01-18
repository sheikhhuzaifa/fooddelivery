import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css'
import N_B from '../../NavBar/N_B';
const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_02grbev', 'template_8rfczoo', form.current, 'user_VPkanpfKQ5K9GXNe35G9l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='kl'>
      <N_B/>
    <h1>Contact Us</h1>
    <form className='form_1' ref={form} onSubmit={sendEmail}>
      <label>Name:    </label>
      <input type="text" name="to_name" />
      <br></br>
      <br></br>
      <label>Email: </label>
      <input type="email" name="user_email" value="ht340582@gmail.com" />
      <br></br>
      <br></br>
      <label>Message: </label>
      <textarea name="message" />
      <br></br>
      <br></br>
      <input className="ko"type="submit" value="Send" />
    </form></div>
  );
};
export default Email;