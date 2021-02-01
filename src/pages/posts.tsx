import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/PageContainer';

export const Posts: React.FC = (props) => {
  
  const { data: { allMarkdownRemark: { nodes } } } = props;

  return (
    <PageContainer>
      <h1 className="text-3xl">Posts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {nodes.map((node: any) => {
          const { frontmatter: { title, slug, date } } = node;
          return (
            <div 
              className="bg-theme-5 rounded-md h-24 m-4 hover:bg-green-600 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.location.href=slug;
              }}
              key={`blog-post-${title}`}
            >
              <div className="text-xl">{title}</div>
              <div className="text-md">{date ? `Published ${date}` : ''}</div>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
};

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(
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
          isBlogPost
        }
      }
    }
  }
`;

export default Posts;