import React from 'react'
import dev from '../assets/diego.jpg'

const Profesora = () => {
  return (
    <>
    <div className='profesora'>
        <h>Frontend Developer</h>
        <div className='foto'>
            <img className='imagen' src={dev} alt='foto' />
        </div>
        <div className='nombre'>Diego</div>
    </div>


    </>
  )
}

export default Profesora