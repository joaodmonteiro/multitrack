import React from 'react'
import classes from '../Styles/Sponsors.module.css'
import audioAlwaysIcon from '../Images/partners/audioalwaysicon.png'
import whistledownIcon from '../Images/partners/whistledownicon.png'
import reducedListeningIcon from '../Images/partners/RL.png'
import somethinelseIcon from '../Images/partners/somethinelseicon.png'
import littleDotStudiosIcon from '../Images/partners/LDS.png'

export default function Sponsors() {
    const sponsors = [
        { name: 'Audio Always', image: `${audioAlwaysIcon}` },
        { name: 'Whistledown', image: `${whistledownIcon}` },
        { name: 'Reduced Listening', image: `${reducedListeningIcon}` },
        { name: 'Somethin Else', image: `${somethinelseIcon}` },
        { name: 'Little Dot Studios', image: `${littleDotStudiosIcon}` }
    ]

  return (
    <div className={classes.sponsors}>
        <div className={classes.leftColumn}>
            <p>
                We partner with production companies to deliver internship and training opportunities
            </p>
        </div>
        <div className={classes.rightColumn}>
            <div>
                <h1>Interested in hosting?</h1>
                <p>The more production companies that get involved in Multitrack, the more opportunities we can offer to future fellows, so please don’t hesitate to contact us.</p>
            </div>
            <div className={classes.icons}>
                {sponsors.map(sponsor => 
                    <div className={classes.icon}>
                        <img src={sponsor.image}></img>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
