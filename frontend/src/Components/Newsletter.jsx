import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../Styles/Newsletter.module.css'
import logo from '../Images/logo.svg'

export default function Newsletter() {
  return (
    <div className={classes.newsletter}>
        <div className={classes.logo}><img src={logo}></img></div>
        <ul className={classes.links}>
          <li><Link className={classes.link} to='/multitrack/about-us'>About us</Link></li>
          <li><Link className={classes.link} to='/multitrack/meet-the-fellows'>The Fellows</Link></li>
          <li><Link className={classes.link} to='/multitrack/sponsors'>Sponsors</Link></li>
        </ul>
        <p>
          Registered charity no. <a href='https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5162097/full-print' target='_blank'>1191498</a>
        </p>
    </div>
  )
}
