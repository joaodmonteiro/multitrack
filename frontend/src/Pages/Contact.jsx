import React, { useRef } from 'react'
import Heading from '../Components/Heading.jsx'
import classes from '../Styles/Contact.module.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const headingText = ['Contact'];
    const headingColor = '#CC52E0';

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ls48m0o', 'template_476cbf8', form.current, 'BAzVGBGfkBgfrMepx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className={classes.contact}>
        <Heading content={headingText} color={headingColor}></Heading>
        <div className={classes.body}>
            <form ref={form} onSubmit={sendEmail}>
                <label className={classes.nameLabel} id='nameLabel' htmlFor='name'>NAME</label>
                <input className={classes.nameInput} type='text' id='name' name='name' required/>
                <label className={classes.emailLabel} id='emailLabel' htmlFor='email'>EMAIL</label>
                <input className={classes.emailInput} type='email' id='email' name='email' required/>
                <label className={classes.messageLabel} id='messageLabel' htmlFor='message'>MESSAGE</label>
                <textarea className={classes.messageInput} rows='10' id='message' name='message' required/>
                <button className={classes.submitButton} type='submit' value='Send'><div>SEND</div></button>
            </form>
        </div>
    </div>
  )
}
