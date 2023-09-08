import React, { useState } from'react';
import Contexto from './Contexto';

const valores = []

const Provider = function({ children}) {
    const [alumno, setAlumno] = useState(valores);
    return (
        <AlumnoContext.Provider value={{alumno, setAlumno}}>
            {children}
        </AlumnoContext.Provider>
    );
}
export default Provider;