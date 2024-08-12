import { useState } from 'react'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import StoryList from './components/story-list/StoryList'
import Footer from './components/footer/Footer'
import StoryDetails from './components/story-details/StoryDetails'


function App() {
  

  return (
    <>
    <div id='box'>
      <Header/>
      <main id='main-content'>
  <Routes>
 <Route path='/' element={<Home/>}  />
 <Route path='/stories' element={<StoryList/>} />
 <Route path='/stories/:storyId/details' element={<StoryDetails/>} />
  </Routes>
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default App
