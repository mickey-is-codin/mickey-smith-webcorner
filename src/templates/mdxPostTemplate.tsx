import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from 'gatsby';
import PageContainer from "../components/PageContainer";
import { MetadataProp } from "../util/types";

interface TemplateProps {
  data: any;
};
export const Template: React.FC<TemplateProps> = (props) => {
  const { data } = props;
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const metadata: MetadataProp = {
    title: frontmatter.pageTitle,
    meta: [
      {
        name: "description",
        content: frontmatter.description,
      },
      {
        name: "keywords",
        content: frontmatter.keywords
      }
    ]
  };
  return (
    <PageContainer isMarkdown={true} metadata={metadata} progressRing={true}>
      <div className="flex">
        <div className="flex-1 text-3xl font-bold my-auto text-green-400">{frontmatter.title}</div>
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
        pageTitle
        description
        keywords
      }
    }
  }
`;

export default Template;