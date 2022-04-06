import React from 'react'
import Heading from '../Components/Heading'
import classes from '../Styles/SupportUs.module.css'

export default function SupportUs() {
  const headingText = ['SUPPORT US'];
  const headingColor = '#00FF03';
  return (
    <div className={classes.support}>
        <Heading content={headingText} color={headingColor}/>
        <div className={classes.body}>
          <h2>HOW CAN YOU HELP?</h2>
          <p>SPARE EQUIPMENT</p>
          <p>FINANCIAL DONATION</p>
          <p>OPPORTUNITY</p>
          <p>contact form</p>
        </div>
    </div>
  )
}
