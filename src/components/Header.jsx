import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from "react-router-dom"
import Logo from "../assets/images/biologo.jpg"
export default function Header() {
  return (
    <header className='bg-blue-200 text-black font-semibold shadow-lg'>
      <div className='flex justify-between items-center p-2 lg:gap-4 sm:mx-10'>
        <Link to='/'>
          <div className='flex items-center gap-2 sm:gap-6'>
            <div className='w-8 sm:w-14'>
              <img src={Logo} alt="Logo" className='shadow-lg rounded-full' />
            </div>
            <div className='text-lg sm:text-3xl text-center font-bold text-black whitespace-nowrap' style={{ letterSpacing: '3px' }}>
              Biovektor
            </div>
          </div>
        </Link>
        <ul className='flex gap-0 sm:gap-8 text-lg lg:text-xl sm:whitespace-nowrap'>
          <Link to='/'>
            <li className='hidden lg:inline hover:underline cursor-pointer'>Биоторове</li>
          </Link>
          <Link to='/benefits'>
            <li className='hover:underline'>Ползи</li>
          </Link>
          <Link to='/effects'>
            <li className='hidden xl:inline hover:underline'>Ефект</li>
          </Link>
          <Link to='/method'>
            <li className='hidden sm:inline hover:underline'> Метод</li>
          </Link>
          <Link to='/contacts'>
            <li className='hidden lg:inline hover:underline'> Контакти </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}