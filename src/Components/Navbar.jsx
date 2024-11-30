import Link from 'next/link'
import React from 'react'

const Navbar = () => {

    const navclass = "btn btn-ghost normal-case text-xl";

    const Navlinks = (
        <>
            <Link href="/" className={navclass}><li>Home</li></Link>
            <Link href="/rooms" className={navclass}><li>Rooms</li></Link>
            <Link href="/tours" className={navclass}><li>Tours</li></Link>
            <Link href="/bookings" className={navclass}><li>Bookings</li></Link>
            <Link href="/dashboard" className={navclass}><li>Dashboard</li></Link>
        </>
    );

    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">

                        {Navlinks}

                    </ul>
                </div>

                <a className="btn btn-ghost normal-case text-xl">
                    <h1 className='font-bold font-serif'>
                        <span className='text-blue-700'>B</span>hramo<span className='text-blue-700'>N</span>.StaY<span className='text-blue-700'>-</span>
                    </h1>
                </a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/login" className="btn">Log In</Link>
            </div>
        </div>
    )
}

export default Navbar 
