import React from 'react'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import classes from '../Styles/Home.module.css'

export default function HomePage() {
  return (
    <>
        <Carousel />
        <div className={classes.enroll_support}>
            <div className={classes.enroll}>
                <div>ENROLL</div>
            </div>
            <div className={classes.support}>
                <div>SUPPORT US</div>
            </div>
        </div>
        <div className={classes.homeNav}><div>OUR STORY</div></div>
        <div className={classes.homeNav}><div>MEET THE FELLOWS</div></div>
        <div className={classes.homeNav}><div>NEWS FEED</div></div>
    </>
  )
}
