import React from 'react'
import classes from '../Styles/Newsletter.module.css'

export default function Newsletter() {
  return (
    <div className={classes.newsletter}>
        <input className={classes.input} type='email' placeholder='Sign up for updates'></input>
    </div>
  )
}
