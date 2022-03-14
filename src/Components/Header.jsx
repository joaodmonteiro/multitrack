import React from 'react'
import classes from '../Styles/Header.module.css'
import logo from '../Images/logo.svg'

export default function Header() {
  return (
    <ul className={classes.header}>
        <li className={classes.logo}><a href=""><img src={logo}/></a></li>
        <li className={classes.applicants}><a href="">APPLICANTS</a></li>
        <li><a href="">SPONSORS</a></li>
        <li><a href="">NEWS</a></li>
        <li className={classes.about}><a href="">ABOUT US</a></li>
    </ul>
  )
}
