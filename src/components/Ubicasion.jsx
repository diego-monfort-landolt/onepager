import React, {useContext} from 'react'
import Contexto from '../contexto/Contexto'



const Ubicasion = () => {
  const {alumno} =useContext(Contexto)
  const idioma =alumno[2].idioma

  return (
    <>
    <div className='ubicasion'>
        <h1>{alumno[idioma].boton2}</h1>
        <div className='texto'>
            <p>{alumno[idioma].direcsion}</p>
        </div>
    </div>


    </>
  )
}

export default Ubicasion