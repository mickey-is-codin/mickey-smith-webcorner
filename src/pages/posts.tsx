import React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';

export const Posts: React.FC = (props) => {
  
  console.log('props: ', props);
  const { data: { allMarkdownRemark: { nodes } } } = props;
  return (
    <div>
      <Navbar />
      <div className=" h-screen flex text-theme-2 justify-center">
        <div className="w-4/6 p-8">
          <h1 className="text-3xl">Posts</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 bg-blue-400">
            {nodes.map((node: any) => {
              const { frontmatter: { title, slug, date } } = node;
              return (
                <div 
                  className="bg-theme-5 rounded-md h-24 m-4"
                  key={`blog-post-${title}`}
                >
                  <div className="text-xl"><a href={slug}>{title}</a></div>
                  <div className="text-md">{`Published ${date}`}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark {
    nodes {
      frontmatter {
        date(formatString: "MM/DD/yyyy")
        title
        slug
      }
    }
  }
  }
`;

export default Posts;