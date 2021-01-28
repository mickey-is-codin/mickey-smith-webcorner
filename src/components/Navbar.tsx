import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

// Split navbars into 2 components
// Additional component for navbar item

const SiteTitle: React.FC = () => {
  return (
    <div className="flex-0 flex flex-col my-2 mx-4 py-auto text-center align-middle rounded-md bg-theme-3">
      <div className="text-xl my-auto mx-2">Mickey Smith</div>
    </div>
  );
};

const LargeViewItems: React.FC = () => {
  return (
    <div className="flex-0 flex flex-row mx-4 text-theme-2">
      <div className="flex-0 flex flex-col hidden lg:inline-flex mx-4 rounded-md my-2">
        <div className="text-lg my-auto mx-2">
          Home
        </div>
      </div>
      <div className="flex-0 flex flex-col hidden lg:inline-flex mx-4 rounded-md my-2">
        <div className="text-lg my-auto mx-2">
          <a href="/posts">Posts</a>
        </div>
      </div>
      <div className="flex-0 flex flex-col hidden lg:inline-flex mx-4 rounded-md my-2">
        <div className="text-lg my-auto mx-2">
          About Me
        </div>
      </div>
      <div className="flex-0 flex flex-col hidden lg:inline-flex mx-4 rounded-md my-2">
        <div className="text-lg my-auto mx-2">
          Resume
        </div>
      </div>
    </div>
  );
};

const SmallViewItems: React.FC = () => {
  const [ navbarOpen, setNavbarOpen ] = useState(false);
  return (
    <div 
      className="flex-0 ml-auto visible lg:invisible mx-4 my-2 p-2 rounded-md text-center bg-theme-3"
    >
      <GiHamburgerMenu 
        size={36}
        className=""
        onClick={() => setNavbarOpen(true)}
      />
      {navbarOpen ? (
        <div
          className="fixed top-0 left-0 h-screen w-screen z-50 text-theme-2 bg-themeBlack-2 bg-opacity-75"
          style={{
            backdropFilter: 'blur(2px)'
          }}
        >
          <div className="flex flex-row-reverse justify-right">
            <div className="flex-0 mx-4 my-2 p-2 rounded-md bg-black bg-opacity-50">
              <AiFillCloseCircle
                onClick={() => setNavbarOpen(false)}
                size={36}
              />
            </div>
          </div>
          <div className="">Home</div>
          <div className="">Posts</div>
          <div className="">About Me</div>
          <div className="">Resume</div>
        </div>
      ) : null}
    </div>
  );
};

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 flex flex-row justify-left bg-theme-5">
      <SiteTitle />
      <LargeViewItems />
      <SmallViewItems />
    </nav>
  );
};

export default Navbar;