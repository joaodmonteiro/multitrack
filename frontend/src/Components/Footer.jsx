import React from 'react'
import classes from '../Styles/Footer.module.css'
import twitterIcon from '../Images/twitter.svg'
import facebookIcon from '../Images/facebook.svg'
import instagramIcon from '../Images/instagram.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className={classes.footer}>
        <div>
            <Link className={classes.link} to='/multitrack/contact'><div>CONTACT</div></Link>
        </div>
        <div>
            <a href='https://twitter.com/_multitrack' target='_blank'><img className={classes.icon} src={twitterIcon}/></a>
        </div>
        <div>
            <a href='https://www.instagram.com/multitrackfellowship' target='_blank'><img className={classes.icon} src={instagramIcon}/></a>
        </div>
    </div>
  )
}
