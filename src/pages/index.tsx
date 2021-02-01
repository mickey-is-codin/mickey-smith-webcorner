import React from 'react';
import Navbar from '../components/Navbar';

// Clean up
// Blacklist for posts

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className=" h-screen flex text-theme-2 justify-center">
        <div className="w-4/6 p-8">
          <h1 className="text-3xl">Home</h1>
        </div>
      </div>
    </>
  );
};

export default Index;