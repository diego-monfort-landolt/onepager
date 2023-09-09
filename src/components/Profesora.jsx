import React, { useContext } from 'react'
import imagenes from '../imagenes/diego.jpg'
import Contexto from '../contexto/Contexto'
import '../stylesheet/profesora.css'

const Profesora = () => {
  
const {alumno} = useContext(Contexto);
const idioma = alumno[2].idioma


  return (
    <>
    <div className='profesora'>
        <h1>{alumno[idioma].boton1}</h1>
        <div className='foto'>
            <img className='imagen' src={imagenes} alt='foto' />
        </div>
        <div className='nombre'>{alumno[2].nombre}</div>
    </div>


    </>
  )
}

export default Profesora