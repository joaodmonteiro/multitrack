import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import classes from '../Styles/NewsArticle.module.css'
import { db } from '../firebase'
import { doc, getDoc, documentId, collection } from 'firebase/firestore';

export default function NewsArticle() {
    const { id } = useParams();
    const [article, setArticle] = useState({});

    const documentPath = documentId(id);

    const newsCollectionRef = collection(db, "news");
    const articleRef = doc(db, "news", id);

    useEffect(() => {
      const getArticle = async () => {
        const data = await getDoc(articleRef);
        setArticle(data.data());
      }

      getArticle();
    }, []);

  return (
    <div className={classes.body}>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
    </div>
  )
}
