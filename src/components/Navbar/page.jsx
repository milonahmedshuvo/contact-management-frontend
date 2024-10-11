'use client' 
import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const favourite = useSelector((state) => state.favourite.favouriteItems)



  console.log('favourite', favourite)



  return (
    <nav className="bg-white shadow-md py-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
               <img src="https://cdn1.designhill.com/cache/uploads/logo_maker/1601976501-6161682475f7c38b5311021-70292060-120x30.png?ver=2.12.78" alt="" />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <li className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</li>
                </Link>
                <Link href="/addContact">
                  <li className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Add Contacts</li>
                </Link>
               
                <Link href="/favouritesPage">
                  <li className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Favourite <span className='text-red-500 text-xl'> {favourite.length} </span>  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        
        <ul className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <li className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</li>
                </Link>
                <Link href="/addContact">
                  <li className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Add Contacts</li>
                </Link>
               
                <Link href="/favouritesPage">
                  <li className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Favourite <span className='text-blue-500 text-xl'> {favourite.length} </span>  </li>
                </Link>
              </ul>
       
      </div>
    </nav>
  );
};

export default Navbar;
