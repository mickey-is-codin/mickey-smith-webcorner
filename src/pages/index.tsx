import React from 'react';
// import Particles from 'react-particles-js';
// import Navbar from '../components/Navbar';
import PageContainer from '../components/PageContainer';

// Clean up
// Standardized responsive page component
// Blacklist for posts
// URL setup

const Index: React.FC = () => {
  return (
    <PageContainer>
      <h1 className="text-3xl">Home</h1>
    </PageContainer>
    // <div className="h-screen w-screen">
    //   <Navbar />
    //   <Particles />
    // </div>
  );
};

export default Index;