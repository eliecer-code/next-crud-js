import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='h-[calc(100vh-5rem)] flex justify-center items-center flex-col'>
            <h4 className='text-slate-400 text-3xl'>
                <span className='pr-5'>404 -</span>
                Not Found
            </h4>
            <Link href="/" className='pt-5 underline text-slate-400 hover:text-yellow-400'>
                Volver al inicio
            </Link>
        </div>
    )
}

export default NotFound