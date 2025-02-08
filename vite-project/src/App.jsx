import { useState } from 'react';
import React from 'react';
import ScrollLinked from './ui/ScrollLinked';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <div>
        <ScrollLinked />
        <Navbar />
        <Home />
        <About />
        <Work />
        <Footer />
      </div>
    </>
  )
}

export default App
