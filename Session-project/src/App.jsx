import { useState } from 'react'
import Navbar from '../components/Navbar'
import './App.css'
import Footer from "./Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App
