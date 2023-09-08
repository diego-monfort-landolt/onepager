import React from 'react'
import spain from '../assets/es.jpg'
import schweiz from '../assets/ch.jpg'
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