import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import About from '../components/About'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  )
}

export default App
