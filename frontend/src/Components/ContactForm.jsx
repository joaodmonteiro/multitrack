import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import classes from '../Styles/ContactForm.module.css'
import tick from '../Images/tick.svg'

export default function ContactForm() {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ls48m0o', 'template_476cbf8', form.current, 'BAzVGBGfkBgfrMepx')
        .then((result) => {
            document.getElementById('contact-form').reset();
            setEmailSent(true);
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className={classes.body}>
        {emailSent && <div className={classes.sentNotificationContainer}>
            <img src={tick}></img>
            <div className={classes.sentNotification}>Message Sent!</div>
        </div> 
        }
        <form id='contact-form' ref={form} onSubmit={sendEmail}>
            <label className={classes.nameLabel} id='nameLabel' htmlFor='name'>NAME</label>
            <input className={classes.nameInput} type='text' id='name' name='name' required/>
            <label className={classes.emailLabel} id='emailLabel' htmlFor='email'>EMAIL</label>
            <input className={classes.emailInput} type='email' id='email' name='email' required/>
            <label className={classes.messageLabel} id='messageLabel' htmlFor='message'>MESSAGE</label>
            <textarea className={classes.messageInput} rows='10' id='message' name='message' required/>
            <button className={classes.submitButton} type='submit' value='Send'><div>SEND</div></button>
        </form>
        </div>
  )
}
