import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/PageContainer';
import Posts from '../components/Posts';
import SiteTitle from '../components/SiteTitle';
import SocialMediaIcons from '../components/SocialMediaIcons';
import PageLinks from '../components/PageLinks';
import {
  HOME_METADATA,
  SOCIAL_MEDIA,
  SITE_TITLE,
  SITE_SUB_TITLE,
  PAGE_LINKS
} from '../util/constants';
import SiteSubTitle from '../components/SiteSubTitle';

const Index: React.FC = (props) => {
  return (
    <PageContainer metadata={HOME_METADATA} >
      <div>
        <SiteTitle data={SITE_TITLE} />
        <SocialMediaIcons data={SOCIAL_MEDIA} />
      </div>
      <div className="flex flex-col sm:flex-row rounded-lg my-8 p-8">
        <SiteSubTitle data={SITE_SUB_TITLE} />
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