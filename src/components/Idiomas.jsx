import React, { useContext } from 'react'
import spain from '../imagenes/es.jpg'
import schweiz from '../imagenes/ch.jpg'
import '../stylesheet/idiomas.css'
import Contexto from '../contexto/Contexto'
import Provider from '../contexto/Provider'

const Idiomas = () => {
  const {setAlumno}=useContext(Contexto)
  const {alumno}=useContext(Contexto)

  const cambio1 = () => {
    setAlumno(
      alumno.map((dato,indice) => indice==2
      ?{...dato,idioma:0}
      :{...dato}
      )
    )
  }
  const cambio2 = () => {
    setAlumno(
      alumno.map((dato,indice) => indice==2
      ?{...dato,idioma:1}
      :{...dato}
      )
    )
  }
  return (
    <>
    <div className='headerApp'>
      <div className='imgcontainer'>
        <img src={spain} onClick={cambio1} alt='logo-es' />
        <img src={schweiz} onClick={cambio2} alt='logo-ch' />
      </div>
      
    </div>


    </>
  )
}

export default Idiomas