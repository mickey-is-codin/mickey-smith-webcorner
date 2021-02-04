import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/PageContainer';
import Posts from '../components/Posts';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { HOME_METADATA } from '../util/constants';
import { IconType } from 'react-icons/lib';

// Markdown styling better
// Class unification
// Contact info and social media links
// Links as constants to iterate

interface PageLinkProps {
  href: string;
  linkText: string;
};
const PageLink: React.FC<PageLinkProps> = (props) => {
  const { href, linkText } = props;
  return (
    <p className="my-2">
      <a href={href} className="text-white hover:text-green-500">
        {linkText}
      </a>
    </p>
  );
};

interface SocialMediaIconProps {
  href: string;
  IconComponent: IconType;
};
const SocialMediaIcon: React.FC<SocialMediaIconProps> = (props) => {
  const { href, IconComponent } = props;
  const className = "flex-0 hover:bg-green-500 cursor-pointer mx-2 rounded-md";
  return (
    <a href={href}>
      <IconComponent className={className} size={36} />
    </a>
  );
};

const Index: React.FC = (props) => {
  return (
    <PageContainer metadata={HOME_METADATA} >
      <div className="flex flex-col lg:flex-row">
        <h1 className="flex-1 text-3xl">Mickey Smith - Software Developer</h1>
        <div className="flex-0 flex ml-auto">
          <SocialMediaIcon 
            href="https://github.com/mickey-is-codin"
            IconComponent={AiFillGithub}
          />
          <SocialMediaIcon 
            href="https://twitter.com/mickey_is_codin"
            IconComponent={AiFillTwitterCircle}
          />
          <SocialMediaIcon 
            href="https://www.instagram.com/mickey_is_codin/"
            IconComponent={AiFillInstagram}
          />
          <SocialMediaIcon 
            href="https://www.linkedin.com/in/mickeysmith2300/"
            IconComponent={AiFillLinkedin}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row bg-themeBlack-2 rounded-lg my-8 p-8">
        <h2 className="flex-1 text-2xl my-auto text-center">A personal site for ...</h2>
        <div className="flex-1 my-auto text-center">
          <PageLink href="/blog" linkText="a blog"/>
          <PageLink href="/sites" linkText="links to other sites I like"/>
          <PageLink href="/projects" linkText="projects I've made"/>
          <PageLink href="/resume" linkText="things I've done"/>
        </div>
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