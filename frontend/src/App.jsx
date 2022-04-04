import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomePage from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import classes from './Styles/App.module.css'
import AboutUs from './Pages/AboutUs'
import Newsletter from './Components/Newsletter'
import NewsFeed from './Pages/NewsFeed'
import MeetTheFellows from './Pages/MeetTheFellows'
import NewsArticle from './Pages/NewsArticle'
import Sponsors from './Pages/Sponsors'

function App() {
  const [mobileLayout, setMobileLayout] = useState(false);

  useEffect(() => {
    handleResize();

    function handleResize() {
      if(window.innerWidth < 600 || window.outerWidth < 600) {
        setMobileLayout(true);
      } else {
          setMobileLayout(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <div className={classes.app}>
      <Header/>
      <Routes>
        <Route path='/multitrack' element={<HomePage/>}/>
        <Route path='/multitrack/news-feed' element={<NewsFeed/>}/>
        <Route path='/multitrack/news-articles/:id' element={<NewsArticle/>}/>
        <Route path='/multitrack/about-us' element={<AboutUs/>}/>
        <Route path='/multitrack/meet-the-fellows' element={<MeetTheFellows/>}/>
        <Route path='/multitrack/sponsors' element={<Sponsors/>}/>
      </Routes>

      {/* <Newsletter/> */}
      
      
      {!mobileLayout && <Footer/>}
    </div>
  )
}

export default App
