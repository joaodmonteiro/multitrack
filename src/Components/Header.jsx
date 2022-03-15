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
        <div className={classes.logo}><Link className={classes.link} to='/'><img src={logo}/></Link></div>
        <div className={classes.navbar}><Navbar toggleMenu={toggleMenu}/></div>
    </div>
        {isMenuOpen && 
          <ul className={classes.navbar__container__mobile}>
            <li className={classes.applicants}><Link className={classes.link} to='/'><div>APPLICANTS</div></Link></li>
            <li><Link className={classes.link} to='/'><div>SPONSORS</div></Link></li>
            <li><Link className={classes.link} to='/'><div>NEWS</div></Link></li>
            <li className={classes.about}><Link className={classes.link} to='/about-us'><div>ABOUT US</div></Link></li>
          </ul>
        }
    </>
  )
}
