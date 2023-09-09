import React, { useContext, useState } from 'react'
import '../stylesheet/pagina.css'
import Profesora from './Profesora'
import Ubicasion from './Ubicasion'
import Contexto from '../contexto/Contexto'

const Pagina = () => {
const {alumno} = useContext(Contexto);
console.log(alumno)
const idioma = alumno[2].idioma
const [ocultar1, setOcultar1] = useState(false)
const [ocultar2, setOcultar2] = useState(true)

const mostrar1 = () => {
    setOcultar1(!ocultar1)
    setOcultar2(false)
}

const mostrar2 = () => {
    setOcultar2(!ocultar2)
    setOcultar1(false)
}

    return (
        <>
        <div className='main-container'>
        <h1>{alumno[idioma].titulo}</h1>
        <h2>{alumno[idioma].texto}</h2>
        </div>
        <div className='botones'>
            <button onClick={mostrar1} >{alumno[idioma].boton1}</button>
            <button onClick={mostrar2} >{alumno[idioma].boton2}</button>
        </div>
        {ocultar1
        ? <Profesora />
        : null
        
        }
         {ocultar2
        ? <Ubicasion />
        : null
        
        }
       
        


        </>
    )
}

export default Pagina