import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar: React.FC = () => {
  const [ navbarOpen, setNavbarOpen ] = useState(false);
  return (
    <nav className="sticky top-0 flex flex-row justify-left bg-red-400">
      <div className="flex-0 mx-4 bg-green-400">
        <div className="">Mickey Smith Site</div>
      </div>
      <div className="flex-0 flex flex-row mx-4 bg-blue-400">
        <div className="flex-0 hidden lg:inline-flex mx-4 bg-red-900">Home</div>
        <div className="flex-0 hidden lg:inline-flex mx-4 bg-red-900">Posts</div>
        <div className="flex-0 hidden lg:inline-flex mx-4 bg-red-900">About Me</div>
        <div className="flex-0 hidden lg:inline-flex mx-4 bg-red-900">Resume</div>
      </div>
      <div className="flex-0 ml-auto visible lg:invisible mx-4 bg-white">
        <GiHamburgerMenu/>
      </div>
    </nav>
  );
};

export default Navbar;