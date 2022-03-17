import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import classes from '../Styles/NewsArticle.module.css'

export default function NewsArticle() {
    const { id } = useParams();

    const { loading, error, data } = useFetch('http://localhost:1337/api/news-articles/' + id);

    if(loading) return <p>Loading...</p>
    if(error) return <p>ERROR :/</p>

  return (
    <div className={classes.body}>
        <h1>{data.data.attributes.title}</h1>
        <p>{data.data.attributes.body}</p>
    </div>
  )
}
