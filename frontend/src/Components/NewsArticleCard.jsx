import React from 'react'
import classes from '../Styles/NewsArticleCard.module.css'
import { Link } from 'react-router-dom'

export default function NewsArticleCard({id, title}) {
  return (
    <div className={classes.card}>
        <div>
            <h2>{title}</h2>
            <Link className={classes.link} to={`/news-articles/${id}`}>READ MORE</Link>
        </div>
    </div>
  )
}
