import React from 'react';
import Navbar from '../components/Navbar';

export const Posts: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-themeBlack-1 h-screen flex text-theme-2 justify-center">
        <div className="w-4/6 p-8">
          <h1 className="text-3xl">Posts</h1>
        </div>
      </div>
    </div>
  );
};

export default Posts;