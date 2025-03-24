import React from 'react'
import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/About/About'
import Projects from './sections/projects/Projects'
import Contact from './sections/contacts/Contact'
import Footer from './sections/footer/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Toaster position='top-right'/>
    </main>
  )
}

export default App
