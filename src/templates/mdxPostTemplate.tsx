import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from 'gatsby';
import PageContainer from "../components/PageContainer";

interface TemplateProps {
  data: any;
};
export const Template: React.FC<TemplateProps> = (props) => {
  const { data } = props;
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  return (
    <PageContainer isMarkdown={true} >
      <div className="flex">
        <div className="flex-1 text-3xl font-bold my-auto">{frontmatter.title}</div>
        <div className="flex-0 text-sm my-auto">{frontmatter.date}</div>
      </div>
      <MDXRenderer>{body}</MDXRenderer>
    </PageContainer>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export default Template;