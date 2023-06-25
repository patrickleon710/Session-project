import { useState } from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import './App.css'
import Footer from "../components/Footer"
import About from './About'

function App() {
  const [count, setCount] = useState(0)

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
