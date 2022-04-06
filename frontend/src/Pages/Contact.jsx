import React from 'react'
import Heading from '../Components/Heading.jsx'
import classes from '../Styles/Contact.module.css'

export default function Contact() {
    const headingText = ['Contact'];
    const headingColor = '#CC52E0';

  return (
    <div className={classes.contact}>
        <Heading content={headingText} color={headingColor}></Heading>
        <div className={classes.body}>
            <form>
                <label className={classes.nameLabel} id='nameLabel' htmlFor='name'>NAME</label>
                <input className={classes.nameInput} type='text' id='name' />
                <label className={classes.emailLabel} id='emailLabel' htmlFor='email'>EMAIL</label>
                <input className={classes.emailInput} type='email' id='email'/>
                <label className={classes.messageLabel} id='messageLabel' htmlFor='message'>MESSAGE</label>
                <textarea className={classes.messageInput} rows='10' id='message'/>
                <button className={classes.submitButton}><div>SEND</div></button>
            </form>
        </div>
    </div>
  )
}
