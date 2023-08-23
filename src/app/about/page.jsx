"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import "@/css/index.css"

const AboutPage = () => {
    const [animate, setAnimte] = useState(false);

    useEffect(() => {
        setAnimte(true);
    }, [])
    return (
        <div className='flex justify-center h-screen' >
            <div className='container w-3/5 '>

                <h2 className='text-4xl text-yellow-400 font-bold pt-4 pb-4'>About</h2>
                <hr className={`mb-4 border-yellow-300 transition-all duration-700 ${animate ? 'animate-expand' : ''
                    }`} />
                <p className='text-slate-300'>
                    ¡Bienvenido a nuestra innovadora aplicación de gestión de
                    tareas, impulsada por la potencia de Next.js! Con un enfoque
                    en la eficiencia y la usabilidad, nuestra aplicación ofrece
                    una experiencia excepcional para administrar tareas de manera
                    efectiva.
                </p>
                <br />
                <p className='text-slate-300'>
                    Nuestra aplicación se basa en la tecnología de vanguardia, utilizando
                    herramientas como Tailwind CSS para una interfaz elegante y receptiva
                    que se adapta perfectamente a cualquier dispositivo. El diseño intuitivo
                    se combina con la flexibilidad de los componentes de React, lo
                    que garantiza una interacción suave y una navegación fluida.
                </p>
                <br />
                <p className='text-slate-300'>
                    En el corazón de nuestra aplicación se encuentra Prisma, una
                    tecnología robusta que respalda nuestra base de datos en el backend.
                    Gracias a Prisma, puedes gestionar tus tareas con confianza,
                    sabiendo que tus datos están seguros y bien organizados.
                </p>
                <br />
                <p className='text-slate-300'>
                    ¿Qué puedes esperar de nuestra aplicación? Un completo conjunto de
                    funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) te permite
                    agregar, modificar y eliminar tareas según tus necesidades. Ya sea
                    que estés organizando tu lista de tareas personales o gestionando
                    proyectos en equipo, nuestra aplicación te brinda el control total
                    sobre tus tareas.
                </p>
                <br />
                <p className='text-slate-300'>
                    Estamos comprometidos con brindarte una experiencia inigualable en la gestión de tareas. Nuestra aplicación combina lo mejor de la tecnología moderna con un diseño amigable y una funcionalidad potente. Únete a nosotros en esta emocionante aventura de productividad y descubre una nueva forma de manejar tus tareas de manera efectiva.
                </p>
            </div>
        </div>
    )
}

export default AboutPage