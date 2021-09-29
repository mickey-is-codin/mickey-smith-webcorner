import React from 'react';
import { LikedSitesInfo, LikedSiteInfo } from '../util/types';
import '../styles/global.css';

const SitesSection = (props: LikedSiteInfo) => {
  const { title, description, sites } = props;

  return (
    <div>
      <h2 className="text-xl mt-6 mb-4 font-semibold sm:text-2xl text-white">{title}</h2>
      <p className="mb-2">{description}</p>
      <ul className="mb-4 ml-8">
        {sites.map(({ title, link}) => {
          return (
            <li className="sm:my-2" key={`site-link-${title}`}>
              <a className="text-theme-3 hover:text-green-500" href={link}>{title}</a>
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
  );
};

interface LikedSitesProps {
  data: LikedSitesInfo;
};
export const LikedSites = (props: LikedSitesProps) => {
  const { data } = props;
  
  return (
    <div>
      {data.map(({ title, description, sites }) => {
        return (
          <SitesSection
            title={title}
            description={description}
            sites={sites}
            key={`sites-section-${title}`}
          />
        );
      })}
    </div>
  );
};

export default LikedSites;