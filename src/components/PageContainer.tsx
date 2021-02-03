import React from 'react';
import Particles from 'react-particles-js';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';

interface PageContainerProps {
  isMarkdown?: boolean;
  children: any;
};
export const PageContainer: React.FC<PageContainerProps> = ({ isMarkdown = false, children }) => {
  const innerClassName = `w-screen md:w-4/6 p-8 ${isMarkdown ? 'markdown' : ''}`;
  return (
    <div>
      <Helmet
        title="Mickey Smith"
        meta={[
          {
            name: 'description',
            content: 'Personal website for Mickey Smith'
          },
          {
            name: 'keywords',
            content: 'frontend,dev,developer,react,js,javascript'
          }
        ]}
      />
      <Navbar />
      <div className="relative h-full flex text-theme-2 justify-center z-20">
        <div className={innerClassName}>
          {children}
        </div>
      </div>
      <div className="z-0">
        <Particles
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default PageContainer;