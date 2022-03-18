import React from 'react'
import Heading from '../Components/Heading'
import NewsArticleCard from '../Components/NewsArticleCard';
import useFetch from '../Hooks/useFetch';
import classes from '../Styles/NewsFeed.module.css'

export default function NewsFeed() {
    const content = ["NEWS FEED"];
    const color = "#EEFD0B"

    const { loading, error, data } = useFetch('http://localhost:1337/api/news-articles');

    if(loading) return <p>Loading...</p>
    if(error) return <p>ERROR :/</p>

  return (
    <div>
        <Heading content={content} color={color}/>
        <div className={classes.content}>
          {data.data.map(article => (
            <NewsArticleCard key={article.id} id={article.id} title={article.attributes.title} />
          ))}
        </div>
    </div>
  )
}
