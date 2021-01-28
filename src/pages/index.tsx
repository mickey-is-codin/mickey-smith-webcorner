import React from 'react';
import Navbar from '../components/Navbar';

// warmGray, trueGray, gray, coolGray

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen text-theme-2 bg-themeBlack-1">
        <div className="">Hello</div>
        <div>
          Banner
          <ul className="list-disc list-inside m-2">
            <li>Name</li>
            <li>Title</li>
            <li>One sentence blurb</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;