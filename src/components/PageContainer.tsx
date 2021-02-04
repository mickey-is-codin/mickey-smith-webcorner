import React from 'react';
import Particles from 'react-particles-js';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
import { MetadataProp } from '../util/types';

interface PageContainerProps {
  metadata: MetadataProp,
  isMarkdown?: boolean;
  children: any;
};
export const PageContainer: React.FC<PageContainerProps> = (props) => {
  const {
    metadata: { title, meta },
    isMarkdown = false,
    children
  } = props;
  const innerClassName = `md:w-5/6 p-8 ${isMarkdown ? 'markdown' : ''}`;
  return (
    <div>
      <Helmet
        title={`Mickey Smith - ${title}`}
        meta={meta}
      />
      <Navbar />
      <div
        className="relative h-full flex text-theme-2 justify-center z-20 md:w-4/6 mx-2 md:mx-auto my-12 rounded-lg bg-gray-700 bg-opacity-50"
        style={{
          backdropFilter: 'blur(2px)'
        }}
      >
        <div className={innerClassName}>
          {children}
        </div>
      </div>
      <div className="z-0">
        <Particles
          className="absolute top-0 left-0 w-full h-full"
          // params={{
          //   particles: {
          //     color: {
          //       value: '#0000ff'
          //     },
          //     line_linked: {
          //       color: {
          //         value: '#0000ff'
          //       }
          //     },
          //     size: {
          //       value: 2
          //     }
          //   }
          // }}
        />
      </div>
    </div>
  );
};

export default PageContainer;