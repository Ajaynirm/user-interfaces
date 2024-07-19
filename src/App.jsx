import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import RandomColor from './components/Random_color/RandomColor'


function App() {
  

  return (
    <>
    <div className='main__container'>
      <Accordion />
      <RandomColor />
    </div>
      
    </>
  )
}

export default App
