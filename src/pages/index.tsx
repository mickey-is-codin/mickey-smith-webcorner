import React from 'react';

const Index: React.FC = () => {
  return (
    <>
      <div className="bg-red-400">Hello</div>
      <div>
        Navbar
        <ul className="list-disc list-inside m-2">
          <li>Me</li>
          <li>Posts</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      </div>
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