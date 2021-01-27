import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 flex flex-row justify-left w-full bg-blue-400">
      <div className="flex-initial mx-4 bg-green-400">Me</div>
      <div className="flex-initial mx-4 bg-green-400">Posts</div>
      <div className="flex-initial mx-4 bg-green-400">Projects</div>
      <div className="flex-initial mx-4 bg-green-400">Resume</div>
      <div className="flex-initial mx-4 bg-green-400"><a href="/blog/first-post">First Post</a></div>
      <div className="flex-initial mx-4 bg-green-400">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;