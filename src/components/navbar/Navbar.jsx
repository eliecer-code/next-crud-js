import React from 'react'
import Link from 'next/link'
import { AiFillCode } from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav className='w-full h-20 flex justify-between items-center p-10'>
            <div >
                <Link href="/">
                    <AiFillCode className='text-5xl' />
                </Link>
            </div>
            <div>
                <ul className='flex gap-10 cursor-pointer'>
                    <li className='hover:text-yellow-400'>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className='hover:text-yellow-400'>
                        <Link href="/new">
                            New task
                        </Link>
                    </li>
                    <li className='hover:text-yellow-400'>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar