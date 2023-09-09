import React from 'react'
import spain from '../imagenes/es.jpg'
import schweiz from '../imagenes/ch.jpg'
import '../stylesheet/idiomas.css'

const Idiomas = () => {
  return (
    <>
    <div className='headerApp'>
      <div className='imgcontainer'>
        <img src={spain} alt='logo-es' />
        <img src={schweiz} alt='logo-ch' />
      </div>
      
    </div>


    </>
  )
}

export default Idiomas