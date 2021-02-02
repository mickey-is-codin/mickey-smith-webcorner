import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/PageContainer';
import Posts from '../components/Posts';

export const PostsPage: React.FC = (props) => {
  return (
    <PageContainer>
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

export default PostsPage;