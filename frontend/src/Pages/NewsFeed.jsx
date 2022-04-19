import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'
import NewsArticleCard from '../Components/NewsArticleCard';
import useFetch from '../Hooks/useFetch';
import classes from '../Styles/NewsFeed.module.css'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, listAll, list } from 'firebase/storage'

export default function NewsFeed() {
    const headingContent = ["NEWS FEED"];
    const headingColor = "#EEFD0B"

    const [news, setNews] = useState([]);
    const newsCollectionRef = collection(db, "news");

    const [imagesDidMount, setImagesDidMount] = useState(false);

    const getNews = async () => {
      const data = await getDocs(newsCollectionRef);
      setNews(data.docs.map((doc) => ({...doc.data(), id:doc.id}))); 
    }

    const getImageUrl = async (imageName) => {
      const storage = getStorage();
      const reference = ref(storage, '/newsimages/' + imageName);
      try {
        return await getDownloadURL(reference);
      }
      catch(err) {
        return 'not found!';
      }
    }

    const getImages = () => {
      news.forEach( async (article, index) => {
        const url = await getImageUrl(article.image);

        if(url != 'not found') {
          let newArr = [...news];

          newArr[index].imageUrl = url;

          setNews(newArr);
          if(index === (news.length - 1)) {
            setImagesDidMount(true);
          }
        }
        else {
          console.log('error!');
        }
      });
    }

    useEffect(() => {
      getNews();
      getImages();
    }, []);

    useEffect(() => {
      if(!imagesDidMount) {
        getImages();
        console.log(news);
      }
    }, [news]);

    useEffect(()=> {
    });

    

  return (
    <div>
        <Heading content={headingContent} color={headingColor}/>
        <div className={classes.content}>
          {news.map(article =>  
            <NewsArticleCard key={article.id} id={article.id} title={article.title} imageSrc={article.imageUrl} />
          )}
        </div>
    </div>
  )
}
