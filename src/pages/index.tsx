import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/PageContainer';
import Posts from '../components/Posts';

// General overview of me and contact info
// Web philosophy
// Hire me page that leads to resume page or download
// Markdown styling better

const Index: React.FC = (props) => {
  const postsLink = <a href="/posts" className="text-white">some things I've written</a>
  const sitesLink = <a href="/sites" className="text-white">some sites I like</a>;
  const projectsLink = <a href="/projects" className="text-white">bit</a>;
  const resumeLink = <a href="/resume" className="text-white">me</a>;
  return (
    <PageContainer>
      <h1 className="text-3xl">Mickey Smith - Software Developer</h1>
      <div className="bg-themeBlack-2 rounded-lg my-8">
        <h1 className="text-2xl py-4 px-2">What This Site Is</h1>
        <div className="py-4 px-2">
          <p>I wanted to create a personal site that embodies what the internet means to me.</p>
          <p>It has {postsLink}, {sitesLink}, and a {projectsLink} about {resumeLink}.</p>
        </div>
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