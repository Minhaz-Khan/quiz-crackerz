import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 justify-between items-center lg:px-20 py-5 relative bg-slate-50 z-10'>
            <div className='flex lg:px-0 px-4 justify-between '>
                <NavLink to='/'><h1 className='text-5xl font-bold NavTitle'>TEAMSCODE</h1></NavLink>
                <button className='lg:hidden text-3xl' onClick={() => setOpen(!open)}>{open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</button>
            </div>
            <div className={`text-2xl  font-medium absolute lg:static duration-1000 ease-in-out ${open ? 'top-[88px]' : 'top-[-300px]'} w-full  bg-slate-100 lg:bg-transparent lg:py-0 py-3 z-[-1]`}>
                <ul className='lg:flex lg:justify-end text-center lg:space-x-10'>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-green-600' : 'text-black hover:text-green-600'}>Home</NavLink></li>
                    <li><NavLink to='/Topics' className={({ isActive }) => isActive ? 'text-green-600' : 'text-black hover:text-green-600'}>Topics</NavLink></li>
                    <li><NavLink to='/Statistics' className={({ isActive }) => isActive ? 'text-green-600' : 'text-black hover:text-green-600'}>Statistics</NavLink></li>
                    <li><NavLink to='/Blog' className={({ isActive }) => isActive ? 'text-green-600' : 'text-black hover:text-green-600'}>Blog</NavLink></li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;