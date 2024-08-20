import React from 'react'
import styles from '../contact/Contact.module.css'
export const Contact = () => {
  return (
    <section className={styles.contact} id = "contact">
      <h1 className='sectionTitle'>Contact Us</h1>
      <div className={styles.contact_container}>
      <form action="">
        <div className="formGroup">
            <label htmlFor='name' hidden>Name</label>
            <input type="text" name='name' id='name' placeholder='Name' required></input>
        </div>
        <div className="formGroup">
            <label htmlFor='email' hidden>Email</label>
            <input type="email" name='email' id='email' placeholder='Email' required></input>
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
