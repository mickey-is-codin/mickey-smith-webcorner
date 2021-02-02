import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/PageContainer';

// General overview of my experience and contact info
// Hire me page that leads to resume page or download
// Move posts to home page
// Custom hooks and general cleanup for posts

export const Posts: React.FC = (props) => {

  const { data: { allMdx: { nodes } } } = props;
  
  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((node: any) => {
          const { frontmatter: { title, slug, date, description } } = node;
          return (
            <div 
              className="transition duration-500 ease-in-out bg-theme-5 rounded-md h-24 m-4 hover:bg-green-700 hover:shadow-lg cursor-pointer transform hover:-translate-y-1 hover:-translate-x-1"
              onClick={(e) => {
                e.preventDefault();
                window.location.href=slug;
              }}
              key={`blog-post-${title}`}
            >
              <div className="text-xl">{title}</div>
              <div className="text-md">{description}</div>
              <div className="text-md text-gray-400">{date ? `Published ${date}` : ''}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Index: React.FC = (props) => {
  return (
    <PageContainer>
      <h1 className="text-3xl">Home</h1>
      <Posts {...props} />
    </PageContainer>
  );
};

export const query = graphql`
  query PostsQuery {
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