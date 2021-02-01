import React from 'react';
import Navbar from './Navbar';

interface PageContainerProps {
  isMarkdown?: boolean;
  children: any;
};
export const PageContainer: React.FC<PageContainerProps> = ({ isMarkdown = false, children }) => {
  const innerClassName = `w-screen md:w-4/6 p-8 ${isMarkdown ? 'markdown' : ''}`;
  return (
    <>
      <Navbar />
      <div className="h-full flex text-theme-2 justify-center">
        <div className={innerClassName}>
          {children}
        </div>
      </div>
    </>
  );
};

export default PageContainer;