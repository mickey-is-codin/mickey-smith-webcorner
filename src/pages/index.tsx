import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/PageContainer';
import Posts from '../components/Posts';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

// Markdown styling better
// Class unification
// Contact info and social media links
// Links as constants to iterate

const Index: React.FC = (props) => {
  const postsLink = <a href="/posts" className="text-white hover:text-green-500">posts I've written</a>
  const sitesLink = <a href="/sites" className="text-white hover:text-green-500">sites I like</a>;
  const projectsLink = <a href="/projects" className="text-white hover:text-green-500">projects I've made</a>;
  const resumeLink = <a href="/resume" className="text-white hover:text-green-500">things I've done</a>;

  return (
    <PageContainer>
      <div className="flex flex-col lg:flex-row">
        <h1 className="flex-1 text-3xl">Mickey Smith - Software Developer</h1>
        <div className="flex-0 flex ml-auto">
          <a href="https://github.com/mickey-is-codin"><AiFillGithub className="flex-0 hover:bg-green-500 cursor-pointer mx-2 rounded-md" size={36} /></a>
          <a href="https://twitter.com/mickey_is_codin"><AiFillTwitterCircle href="" className="flex-0 hover:bg-green-500 cursor-pointer mx-2 rounded-md" size={36} /></a>
          <a href="https://www.instagram.com/mickey_is_codin/"><AiFillInstagram href="" className="flex-0 hover:bg-green-500 cursor-pointer mx-2 rounded-md" size={36} /></a>
          <a href="https://www.linkedin.com/in/mickeysmith2300/"><AiFillLinkedin href="" className="flex-0 hover:bg-green-500 cursor-pointer mx-2 rounded-md" size={36} /></a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row bg-themeBlack-2 rounded-lg my-8 p-8">
        <h2 className="flex-1 text-2xl my-auto text-center">A personal site for ...</h2>
        <div className="flex-1 my-auto text-center">
          <p className="my-2">{postsLink}</p>
          <p className="my-2">{sitesLink}</p>
          <p className="my-2">{projectsLink}</p>
          <p className="my-2">{resumeLink}</p>
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