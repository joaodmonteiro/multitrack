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
        <Route path='/' element={<HomePage/>}/>
        <Route path='/news-feed' element={<NewsFeed/>}/>
        <Route path='/news-articles/:id' element={<NewsArticle/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/meet-the-fellows' element={<MeetTheFellows/>}/>
      </Routes>

      <Newsletter/>
      
      
      <Footer/>
    </div>
  )
}

export default App
