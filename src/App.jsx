import React, { useState } from 'react'
import Idiomas from './components/Idiomas'
import Pagina from './components/Pagina'
import './App.css'
import Provider from './contexto/Provider'

function App() {
 
  

  return (
    <Provider>

    <div className="App">
      <Idiomas />
    </div>

    <div className='contenido'>
    <Pagina />

    </div>
    
       
    </Provider>
  )
}

export default App
