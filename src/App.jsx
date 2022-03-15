import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import classes from './Styles/App.module.css'
import AboutUs from './Pages/AboutUs'
import Newsletter from './Components/Newsletter'

function App() {
  return (
    <div className={classes.app}>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>

      <Newsletter />
      
      <Footer className={classes.footer}/>
    </div>
  )
}

export default App
