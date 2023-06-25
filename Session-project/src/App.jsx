import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Projects from '../components/Projects'
import About from '../components/About'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Projects />
      <About />
      <Footer />
    </>
  )
}

export default App
