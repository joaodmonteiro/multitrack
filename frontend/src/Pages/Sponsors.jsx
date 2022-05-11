import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../Styles/Sponsors.module.css'
import audioAlwaysIcon from '../Images/partners/audioalwaysicon.png'
import whistledownIcon from '../Images/partners/whistledownicon.png'
import reducedListeningIcon from '../Images/partners/RL.png'
import somethinelseIcon from '../Images/partners/somethinelseicon.png'
import littleDotStudiosIcon from '../Images/partners/LDS.png'
import Heading from '../Components/Heading.jsx'

export default function Sponsors() {
    const sponsors = [
        { name: 'Audio Always', image: `${audioAlwaysIcon}` },
        { name: 'Whistledown', image: `${whistledownIcon}` },
        { name: 'Reduced Listening', image: `${reducedListeningIcon}` },
        { name: 'Somethin Else', image: `${somethinelseIcon}` },
        { name: 'Little Dot Studios', image: `${littleDotStudiosIcon}` }
    ]

    const headingContent = ['SPONSORS'];
    const headingColor = '#FF9F12'

  return (
    <div className={classes.sponsors}>
        <Heading content={headingContent} color={headingColor}></Heading>

        <div className={classes.icons}>
                {sponsors.map(sponsor => 
                    <div className={classes.icon}>
                        <img src={sponsor.image} alt={`${sponsor.name} logo`}></img>
                    </div>
                )}
        </div>
        <div className={classes.body}>
            <div className={classes.leftColumn}>
                <p>
                    We partner with production companies to deliver internship and training opportunities
                </p>
            </div>
            <div className={classes.rightColumn}>
                <div>
                    <h1>Interested in hosting?</h1>
                    <p>The more production companies that get involved in Multitrack, the more opportunities we can offer to future fellows, so please don’t hesitate to <Link className={classes.link} to='/multitrack/contact'>contact us.</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}
