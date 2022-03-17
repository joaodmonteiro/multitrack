import React from 'react'
import classes from '../Styles/Footer.module.css'
import twitterIcon from '../Images/twitter.svg'
import facebookIcon from '../Images/facebook.svg'
import instagramIcon from '../Images/instagram.svg'

export default function Footer() {
  return (
    <div className={classes.footer}>
        <div>
            <div>CONTACT</div>
        </div>
        <div>
            <div>FAQS</div>
        </div>
        <div>
            <div><img className={classes.icon} src={twitterIcon}/></div>
        </div>
        <div>
            <div><img className={classes.icon} src={facebookIcon}/></div>
        </div>
        <div>
            <div><img className={classes.icon} src={instagramIcon}/></div>
        </div>
    </div>
  )
}
