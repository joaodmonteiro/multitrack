import React from 'react'
import classes from '../Styles/Navbar.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import burger from '../Images/burger.svg'

export default function Navbar({toggleMenu}) {
    const [mobileLayout, setMobileLayout] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        handleResize();

        function handleResize() {
          if(window.innerWidth < 600 || window.outerWidth < 600) {
            setMobileLayout(true);
          } else {
              setMobileLayout(false);
              if(menuOpen == true) {
                setMenuOpen(false);
                toggleMenu();
              }
          }
        }
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        }
    }, [])

    function handleMenuClick() {
      toggleMenu();
      if(!menuOpen) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
      
    }

  return (
    <>
      <div className={classes.navbar}>
          {mobileLayout && <div onClick={handleMenuClick} className={classes.menu} to='/multitrack'><div className={classes.burger}><img src={burger}/></div></div>}
          {!mobileLayout && 
              <ul className={classes.navbar__container}>
                  <li className={classes.applicants}><Link className={classes.link} to='/multitrack'><div>APPLICANTS</div></Link></li>
                  <li><Link className={classes.link} to='/multitrack'><div>SPONSORS</div></Link></li>
                  <li><Link className={classes.link} to='/multitrack/news-feed'><div>NEWS</div></Link></li>
                  <li className={classes.about}><Link className={classes.link} to='/multitrack/about-us'><div>ABOUT US</div></Link></li>
              </ul>
          }
      </div>
    </>
  )
}
