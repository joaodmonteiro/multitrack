import React from 'react'
import classes from '../Styles/Heading.module.css'

export default function Heading({content, color}) {

  return (
    <div className={classes.heading} style={{backgroundColor: `${color}`}}>
        {content.map(string => {
            return <div><div>{string}</div></div>
        })}
    </div>
  )
}
