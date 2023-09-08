import React from 'react'
import '../stylesheet/pagina.css'
import Profesora from './Profesora'
import Ubicasion from './Ubicasion'

const Pagina = () => {
    return (
        <>
        <div className='main-container'>
        <h1>OnLearning React</h1>
        <h2>Frontend Developer</h2>
        </div>
        <div className='botones'>
            <button>Btn1</button>
            <button>btn2</button>
        </div>
        <Profesora />
        <Ubicasion />


        </>
    )
}

export default Pagina