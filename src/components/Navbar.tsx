import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

// Split navbars into 2 components

export const Navbar: React.FC = () => {
  const [ navbarOpen, setNavbarOpen ] = useState(false);
  return (
    <nav className="sticky top-0 flex flex-row justify-left bg-red-400">
      <div className="flex-0 flex flex-col my-2 mx-4 bg-green-400 py-auto text-center align-middle rounded-md">
        <div className="text-xl my-auto mx-2">Mickey Smith</div>
      </div>
      <div className="flex-0 flex flex-row mx-4 bg-blue-400">
        <div className="flex-0 flex flex-col hidden lg:inline-flex mx-4 bg-red-900 rounded-md my-2">
          <div className="text-lg my-auto mx-2">
            Home
          </div>
        </div>
        <div className="flex-0 flex flex-col hidden lg:inline-flex mx-4 bg-red-900 rounded-md my-2">
          <div className="text-lg my-auto mx-2">
            <a href="/posts">Posts</a>
          </div>
        </div>
        <div className="flex-0 flex flex-col hidden lg:inline-flex mx-4 bg-red-900 rounded-md my-2">
          <div className="text-lg my-auto mx-2">
            About Me
          </div>
        </div>
        <div className="flex-0 flex flex-col hidden lg:inline-flex mx-4 bg-red-900 rounded-md my-2">
          <div className="text-lg my-auto mx-2">
            Resume
          </div>
        </div>
      </div>
      <div 
        className="flex-0 ml-auto visible lg:invisible mx-4 my-2 p-2 rounded-md bg-gray-400 text-center"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <GiHamburgerMenu size={36} className="" />
        {navbarOpen ? (
          <div
            className="fixed top-0 left-0 h-screen w-screen z-50 bg-gray-500 bg-opacity-75"
            style={{
              backdropFilter: 'blur(2px)'
            }}
          >
            <div className="">Home</div>
            <div className="">Posts</div>
            <div className="">About Me</div>
            <div className="">Resume</div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;