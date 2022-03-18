import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import classes from './Styles/App.module.css'
import AboutUs from './Pages/AboutUs'
import Newsletter from './Components/Newsletter'
import NewsFeed from './Pages/NewsFeed'
import MeetTheFellows from './Pages/MeetTheFellows'
import NewsArticle from './Pages/NewsArticle'

function App() {
  return (
    <div className={classes.app}>
      <Header/>
      <Routes>
        <Route path='/multitrack' element={<HomePage/>}/>
        <Route path='/multitrack/news-feed' element={<NewsFeed/>}/>
        <Route path='/multitrack/news-articles/:id' element={<NewsArticle/>}/>
        <Route path='/multitrack/about-us' element={<AboutUs/>}/>
        <Route path='/multitrack/meet-the-fellows' element={<MeetTheFellows/>}/>
      </Routes>

      <Newsletter/>
      
      
      <Footer/>
    </div>
  )
}

export default App
