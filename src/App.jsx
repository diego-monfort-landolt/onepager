import React, { useState } from 'react'
import Idiomas from './components/Idiomas'
import Pagina from './components/Pagina'
import './App.css'

function App() {
 
  

  return (
    <>
    <div className="App">
      <Idiomas />
    </div>

    <div className='contenido'>
    <Pagina />

    </div>
    
       
    </>
  )
}

export default App
