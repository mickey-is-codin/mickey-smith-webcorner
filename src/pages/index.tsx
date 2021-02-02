import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/PageContainer';
import Posts from '../components/Posts';

// General overview of my experience and contact info
// Web philosophy
// Hire me page that leads to resume page or download
// Move posts to home page
// Custom hooks and general cleanup for posts
// Just import posts component

const Index: React.FC = (props) => {
  return (
    <PageContainer>
      <div className="bg-themeBlack-2 rounded-lg m-12 p-12">
        <h1 className="text-3xl">What This Site Is</h1>
        <p>I wanted to create a website that feels more to me like the old web.</p>
        <p>This site is a collection of content I've created, sites I like, and a bit about me.</p>
      </div>
      <Posts {...props} />
    </PageContainer>
  );
};

export const query = graphql`
  query IndexQuery {
    allMdx(
      filter: { 
        frontmatter: { 
          date: { 
            ne: null
          }
          isBlogPost: { 
            eq: true
          }
        }
      }
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MM-DD-yyyy")
          title
          slug
          description
          isBlogPost
        }
      }
    }
  }
`;

export default Index;