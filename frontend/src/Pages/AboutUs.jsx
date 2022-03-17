import React from 'react'
import classes from '../Styles/AboutUs.module.css'
import Heading from '../Components/Heading'

export default function AboutUs() {
  const content = ["HOW CAN WE MAKE", "OUR AUDIO COMMUNITY BETTER?"];
  const color = "#7F5BFF"

  return (
    <div>
      <Heading content={content} color={color}/>
    </div>
  )
}
