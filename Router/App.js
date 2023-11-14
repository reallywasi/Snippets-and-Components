
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Header from './components/Header'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
const App = () => {
  return (
    <div>
    
     <Router>
     <div>
     <Header/>

     </div>

     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
     </Router>
    </div>
  )
}

export default App

