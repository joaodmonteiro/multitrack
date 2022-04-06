import React from 'react'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import classes from '../Styles/Home.module.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
        <Carousel />
        <div className={classes.enroll_support}>
            <div className={classes.enroll}>
            <Link className={classes.link} to='/multitrack/apply'>
                <div>ENROLL</div>
              </Link>
            </div>
            <div className={classes.support}>
              <Link className={classes.link} to='/multitrack/support-us'>
                <div>SUPPORT US</div>
              </Link>
            </div>
        </div>
        <div className={classes.homeNav}><Link className={classes.link} to='/multitrack/about-us'><div>OUR STORY</div></Link></div>
        <div className={classes.homeNav}><Link className={classes.link} to='/multitrack/meet-the-fellows'><div>MEET THE FELLOWS</div></Link></div>
        <div className={classes.homeNav}><Link className={classes.link} to='/multitrack/meet-the-fellows'><div>NEWS FEED</div></Link></div>
    </>
  )
}
