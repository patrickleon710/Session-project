import { useState } from 'react'
import Navbar from '../components/Navbar'
import './App.css'
import Footer from "./Footer"
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  )
}

export default App
