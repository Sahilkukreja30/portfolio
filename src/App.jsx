import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navbar/Navigation'
import Home from './components/Home/Home'
import Intro from './components/Intro/Intro'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import CustomCursor from './components/CustomCursor/CustomCursor'
function App() {
  

  return (
    <>
      <Navigation></Navigation>
      <Home></Home>
      <Intro></Intro>
      <Project></Project>
      <Contact></Contact>
      <CustomCursor></CustomCursor>
    </>
  )
}

export default App
