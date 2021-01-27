import React from 'react';
import Navbar from '../components/Navbar';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-red-400">Hello</div>
      <div>
        Banner
        <ul className="list-disc list-inside m-2">
          <li>Name</li>
          <li>Title</li>
          <li>One sentence blurb</li>
        </ul>
      </div>
    </>
  );
};

export default Index;