import React from "react"
import { graphql } from 'gatsby';

interface TemplateProps {
  data: any;
};
export const Template: React.FC<TemplateProps> = (props) => {
  const { data } = props;
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="bg-red-400 flex justify-center">
      <div className="markdown bg-green-400 w-4/6 p-8">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export default Template;