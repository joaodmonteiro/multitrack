import React, { useState } from 'react'
import classes from '../Styles/Header.module.css'
import logo from '../Images/logo.svg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    if(!isMenuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
      
  }

  return (
    <>
    <div className={classes.header}>
        <div className={classes.logo}><Link className={classes.link} to='/multitrack'><img src={logo} alt='Multitrack logo'/></Link></div>
        <div className={classes.navbar}><Navbar toggleMenu={toggleMenu}/></div>
    </div>
        {isMenuOpen && 
          <ul className={classes.navbar__container__mobile}>
            <li className={classes.applicants}><Link className={classes.link} to='/multitrack/apply' onClick={toggleMenu}><div>APPLY</div></Link></li>
            <li><Link className={classes.link} to='/multitrack/sponsors' onClick={toggleMenu}><div>SPONSORS</div></Link></li>
            <li><Link className={classes.link} to='/multitrack/news-feed' onClick={toggleMenu}><div>NEWS</div></Link></li>
            <li className={classes.about}><Link className={classes.link} to='/multitrack/about-us' onClick={toggleMenu}><div>ABOUT US</div></Link></li>
            <li className={classes.contact}><Link className={classes.link} to='/multitrack/contact' onClick={toggleMenu}><div>CONTACT</div></Link></li>
          </ul>
        }
    </>
  )
}
