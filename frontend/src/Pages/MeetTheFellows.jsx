import React from 'react'
import Heading from '../Components/Heading'
import adebukolaPhoto from '../Images/fellows/adebukola.png'
import nadinePhoto from '../Images/fellows/nadine.png'
import charliePhoto from '../Images/fellows/charlie.png'
import meeraPhoto from '../Images/fellows/meera.png'
import noorPhoto from '../Images/fellows/noor.png'
import jillPhoto from '../Images/fellows/jill.png'
import classes from '../Styles/MeetTheFellows.module.css'

export default function MeetTheFellows() {
    const content = ["MEET THE 2021 FELLOWS"];
    const color = "#FF9F12";

    const fellows = [
      {
        name: 'Adebukola (Bukky) Fadipe',
        description: 'Bukky is a mother and freelance writer. She’s studying journalism, film and television and graduates in February 2021. She’s dabbled with comedy and the stage but she realised producing audio was her passion and has been producing content for 4 yrs, for student and community radio. @BukkyOnTheRadio',
        photo: `${adebukolaPhoto}`
      },
      {
        name: 'Nadine Peters',
        description: 'Nadine is the producer of @ThursleyRadio. She has worked for Soho Radio and Morley Radio, and worked with We Are Stabl as a researcher. She is one of the creators and producers of ‘Departures’, an audio project that explores personal recollections of romantic relationships. @_NadinePeters',
        photo: `${nadinePhoto}`
      },
      {
        name: 'Charlie Towler',
        description: 'Charlie is a radio host, DJ and audio producer. He’s had shows on @worldwidefm, @sohoradio and @NetilRadio. His experimental music show on @threadsradio is called Celestial Grub. He uses audio to explore the intersection between music, culture, social and political issues.',
        photo: `${charliePhoto}`
      },
      {
        name: 'Meera Kumar',
        description: 'Meera is a freelance audio producer and consultant; passionate about furthering South Asian representation through sound. Her podcast @emkayonthemic was included in Great British Podcasts’ Favourite Podcasts of 2019 list. She wants to create thought-provoking audio across genres. @meeerakumar',
        photo: `${meeraPhoto}`
      },
      {
        name: 'Noor Alabdulbaqi',
        description: 'Noor is a DJ, producer and filmmaker- known for playing upbeat popular records infused with Middle Eastern and North African sounds as a resident DJ at @FoundationFM and @plus1_radio. In her work, she explores the themes of home, culture and gender. @Nooriyah_',
        photo: `${noorPhoto}`
      },
      {
        name: 'Jill Achineku',
        description: 'Jill’s love for unheard and untold stories started when she was in Lagos, Nigeria, a vibrant place with exciting lived experiences. Bringing these stories to life through sound is something she actively pursues. Her most recent work was being part of @BLSoundHeritage‘s #saveoursounds project. @mnena',
        photo: `${jillPhoto}`
      }
    ];


  return (
    <div>
        <Heading content={content} color={color}/>
        <div className={classes.body}>
          <div className={classes.profiles}>
            {fellows.map( fellow => 
            <div className={classes.profile}>
              <div className={classes.photo}>
                <img src={fellow.photo} />
              </div>
              <div className={classes.description}>
                  <h2>{fellow.name}</h2>
                  <p>{fellow.description}</p>
              </div>
            </div>)}
          </div>
        </div>
    </div>
  )
}
