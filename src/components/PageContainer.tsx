import React from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
import { MetadataProp } from '../util/types';
import 'typeface-raleway';

interface PageContainerProps {
  metadata: MetadataProp,
  isMarkdown?: boolean;
  progressRing?: boolean;
  children: any;
};
export const PageContainer: React.FC<PageContainerProps> = (props) => {
  const {
    metadata: { title, meta },
    isMarkdown = false,
    progressRing = false,
    children
  } = props;
  const innerClassName = `md:w-5/6 p-8 ${isMarkdown ? 'markdown' : ''}`;
  return (
    <div>
      <Helmet
        title={`Mickey Smith - ${title}`}
        meta={meta}
      />
      <Navbar progressRing={progressRing} />
      <div
        className="relative h-full flex text-theme-2 justify-center z-20 md:w-4/6 mx-2 md:mx-auto my-12 rounded-lg bg-themeBlack-2 bg-opacity-50"
        style={{
          backdropFilter: 'blur(2px)'
        }}
      >
        <div className={innerClassName}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;