import React from 'react';
import { isNotHomeLink } from '../util/util';
import { PageLinkInfo } from '../util/types';

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

interface PageLinksProps {
  data: PageLinkInfo[];
};
export const PageLinks = (props: PageLinksProps) => {
  const { data } = props;

  return (
    <div className="flex-1 my-auto text-center">
      {data
        .filter(isNotHomeLink)
        .map(({ name, link }) => {
          return (
            <PageLink
              href={link}
              linkText={name}
              key={`page-link-${name}`}
            />
          );
        })
      }
    </div>
  );
};

export default PageLinks;