import React, { useState } from'react';
import Contexto from './Contexto';


const valores = [
    {
        titulo: 'Estoy aprendiendo React',
        texto: 'Estoy aprendiendo React vite, y permanente JavaScript que es un aprendizaje infinito de ',
        boton1: 'Diego ES',
        foto: 'diego.jpg',
        nombre: 'Diego',
        boton2: 'Lugar',
        direcsion: 'Calle 123, España',

    },
    {
        titulo: 'React Lernene',
        texto: 'Ich bringe mir selbst das Programieren bei, mit React -Vite ',
        boton2: 'Diego CH',
        foto: 'diego1.jpg',
        nombre: 'Diego Diego',
        boton1: 'CH',
        direcsion: 'strasse 123, Zürich',

    },
    {
        idioma:0
    }
]

const Provider = function({ children }) {
    const [alumno, setAlumno] = useState(valores);
    return (
        <Contexto.Provider value={{alumno, setAlumno}}>
            {children}
        </Contexto.Provider>
    );
}

export default Provider;