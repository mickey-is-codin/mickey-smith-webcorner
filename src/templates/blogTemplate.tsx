import React from "react"
import { graphql } from 'gatsby';
import PageContainer from "../components/PageContainer";

interface TemplateProps {
  data: any;
};
export const Template: React.FC<TemplateProps> = (props) => {
  const { data } = props;
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    // <div>
    //   <Navbar />
    //   <div className="h-full flex text-theme-2 justify-center">
    //     <div className="markdown w-screen md:w-4/6 p-8">
          
    //     </div>
    //   </div>
    // </div>
    <PageContainer isMarkdown={true} >
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </PageContainer>
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