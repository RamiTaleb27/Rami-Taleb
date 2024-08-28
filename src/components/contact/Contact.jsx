import React from 'react'
import styles from '../contact/Contact.module.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_270299', 'template_6res57h', form.current, {
        publicKey: 'yREdGFG3LhbwkvNIt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <section className={styles.contact} id = "contact">
      <h1 className='sectionTitle'>Contact Us</h1>
      <div className={styles.contact_container}>
      <form  ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
            <label htmlFor='name' hidden>Name</label>
            <input type="text" name='from_name' id='name' placeholder='Name' required></input>
        </div>
        <div className="formGroup">
            <label htmlFor='email' hidden>Email</label>
            <input type="email" name='from_email' id='email' placeholder='Email' required></input>
        </div>
        <div className="formGroup">
            <label htmlFor='message' hidden>Message</label>
            <textarea name='message' id='message' placeholder='Enter your Message' required></textarea>
        </div>
        <input className='hover btn' type="submit" value="Submit" />
      </form>
      </div>
      
    </section>
  )
}
