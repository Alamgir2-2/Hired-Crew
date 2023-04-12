import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'
const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='flex items-center justify-between p-6 bg-slate-300'>
            <div className='text-3xl font-bold'>
                <h3>Hired Crew</h3>
            </div>
            <div className=''>
                <ul className='lg:flex items-center hidden space-x-8'>
                    <li>
                        <NavLink to="/" className={(isActive) => isActive ? 'text-blue-800' : 'default'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="statistics" className={(isActive) => isActive ? 'text-blue-800' : ''}>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to="AppliedJob" className={(isActive) => isActive ? 'text-blue-800' : 'default'}>Applied Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to="blog" className={(isActive) => isActive ? 'text-blue-800' : 'default'}>Blog</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Start Applying</button>
            </div>
            <div className='lg:hidden'>
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}><Bars3BottomRightIcon className='w-5 text-gray-600' /></button>
                    {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-gray-200 border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <span className=' text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Hired Crew
                      </span>
                    </Link>
                  </div>

                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>

                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/statistics'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/AppliedJob'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
            </div>
        </div>
    );
};

export default Header;