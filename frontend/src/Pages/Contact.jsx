import React from 'react'
import Heading from '../Components/Heading.jsx'
import classes from '../Styles/Contact.module.css'
import ContactForm from '../Components/ContactForm.jsx';

export default function Contact() {
    const headingText = ['Contact'];
    const headingColor = '#CC52E0';

  return (
    <div className={classes.contact}>
        <Heading content={headingText} color={headingColor}></Heading>
        <ContactForm/>
    </div>
  )
}
