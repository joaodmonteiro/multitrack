import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import classes from '../Styles/Home.module.css'
import { Link } from 'react-router-dom'
import TextBlock from '../Components/TextBlock.jsx'
import groupPhoto2 from '../Images/whoweare2.png'
import singerPhoto from '../Images/singer.jpeg'
import getWindowSize from '../Hooks/getWindowSize'

export default function HomePage() {
  const ourStoryTitle = 'Our story';
  const ourStoryBody = `We’re creating career changing opportunities for emerging producers and helping the radio and podcast industry become more accessible and inclusive`
  const ourStoryStyle = { gridArea: 'ourStory', borderRight: '1px solid black',};

  const carouselStyle = { gridArea: 'carousel'}

  const [mobileLayout, setMobileLayout] = useState(false);

  const windowSize = getWindowSize();

  useEffect(() => {
    handleResize();

    function handleResize() {
      if(window.innerWidth < 600 || window.outerWidth < 600) {
        setMobileLayout(true);
      } else {
          setMobileLayout(false);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
}, [])

  return (
    <div className={classes.homePage}>
        <Carousel style={carouselStyle} mobileLayout={mobileLayout} />
        <div className={`${classes.banner} ${classes.banner1}`}>
          <h1>For a brighter audio industry</h1>
          <p>We’re creating career changing opportunities for emerging producers.</p>
        </div>
        <div className={classes.singerPhoto}>
          <img src={singerPhoto} alt='Singer in a recording studio with headphones on and singing into a microphone'></img>
        </div>
        <div className={`${classes.ourStory} ${classes.homeNav}`}><Link className={classes.link} to='/multitrack/about-us'><div>OUR STORY</div></Link></div>
        <div className={`${classes.meet} ${classes.homeNav}`}><Link className={classes.link} to='/multitrack/meet-the-fellows'><div>MEET THE FELLOWS</div></Link></div>
        <div className={`${classes.apply} ${classes.bigHomeNav}`}>
          <Link className={classes.link} to='/multitrack/apply'>
            <div>APPLY</div>
          </Link>
        </div>
        <div className={`${classes.sponsors} ${classes.bigHomeNav}`}>
          <Link className={classes.link} to='/multitrack/sponsors'>
            <div>SPONSORS</div>
          </Link>
        </div>
        <div className={`${classes.banner} ${classes.banner2}`}>
          <h1>Do you want to work in the audio industry?</h1>
          <p>Applications for the 2022 Fellowship are <Link className={classes.link} to='/multitrack/apply'>NOW OPEN!</Link></p>
        </div>
        <div className={classes.groupPhoto}>
          <img src={groupPhoto2} alt='Multitrack team group photo'></img>
        </div>
        <div className={`${classes.newsFeed} ${classes.homeNav}`}><Link className={classes.link} to='/multitrack/news-feed'><div>NEWS FEED</div></Link></div>
        <div className={`${classes.supportUs} ${classes.homeNav}`}><Link className={classes.link} to='/multitrack/support-us'><div>SUPPORT US</div></Link></div>
    </div>
  )
}
