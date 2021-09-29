import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/PageContainer';
import Posts from '../components/Posts';
import SiteTitle from '../components/SiteTitle';
import SocialMediaIcons from '../components/SocialMediaIcons';
import PageLinks from '../components/PageLinks';
import { HOME_METADATA, SOCIAL_MEDIA, SITE_TITLE, PAGE_LINKS } from '../util/constants';

const Index: React.FC = (props) => {
  return (
    <PageContainer metadata={HOME_METADATA} >
      <div>
        <SiteTitle data={SITE_TITLE} />
        <SocialMediaIcons data={SOCIAL_MEDIA} />
      </div>
      <div className="flex flex-col sm:flex-row rounded-lg my-8 p-8">
        <h2 className="flex-1 text-2xl my-auto text-center">A personal site for ...</h2>
        <PageLinks data={PAGE_LINKS} />
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