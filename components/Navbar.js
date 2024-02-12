import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* <img className="block lg:hidden h-8 w-auto" src="/logo.svg" alt="Logo" />
              <img className="hidden lg:block h-8 w-auto" src="/logo.svg" alt="Logo" /> */}
              <h1 className='text-white font-bold'>Erfan's Blog App</h1>
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:-my-px sm:ml-6 sm:flex">
              <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:text-gray-100 hover:border-gray-300">
                Home
              </a>
              <a href="#" className="ml-4 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:text-gray-100 hover:border-gray-300">
                About
              </a>
              <a href="#" className="ml-4 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:text-gray-100 hover:border-gray-300">
                Services
              </a>
              <a href="#" className="ml-4 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:text-gray-100 hover:border-gray-300">
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-600 focus:outline-none focus:bg-purple-600 focus:text-white transition duration-150 ease-in-out">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-100 hover:bg-purple-600 focus:outline-none focus:text-white focus:bg-purple-600 transition duration-150 ease-in-out">Home</a>
          <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-100 hover:bg-purple-600 focus:outline-none focus:text-white focus:bg-purple-600 transition duration-150 ease-in-out">About</a>
          <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-100 hover:bg-purple-600 focus:outline-none focus:text-white focus:bg-purple-600 transition duration-150 ease-in-out">Services</a>
          <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-100 hover:bg-purple-600 focus:outline-none focus:text-white focus:bg-purple-600 transition duration-150 ease-in-out">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
