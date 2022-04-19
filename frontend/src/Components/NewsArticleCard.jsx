import React from 'react'
import classes from '../Styles/NewsArticleCard.module.css'
import { Link } from 'react-router-dom'

export default function NewsArticleCard({id, title, imageSrc}) {

  
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={imageSrc}/>
      </div>
      <div className={classes.text}>
        <h2>{title}</h2>
        <Link className={classes.link} to={`/multitrack/news-articles/${id}`}>READ MORE</Link>
      </div>
    </div>
  )
}
