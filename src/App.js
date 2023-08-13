import React from 'react'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import About from './screens/about/About'
import Home from './screens/homepage/Home'
import MyList from './screens/myList/MyList'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/home' element={<Home />} />
        <Route path='/myList' element={<MyList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App