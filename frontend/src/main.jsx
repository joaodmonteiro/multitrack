import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import ScrollToTop from './Hooks/scrollToTop'

console.log(import.meta.env.MODE);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
