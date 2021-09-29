import React from 'react';
import PageContainer from '../components/PageContainer';
import LikedSites from '../components/LikedSites';
import {
  LIKED_SITES,
  SITES_INTRO,
  SITES_METADATA,
  SITES_TITLE,
  SITES_SUB_TITLE,
} from '../util/constants';
import '../styles/global.css';

export const Sites: React.FC = () => {
  return (
    <PageContainer metadata={SITES_METADATA}>
      <div className="flex">
        <div className="flex-1 text-3xl font-bold mb-4 text-green-400">{SITES_TITLE}</div>
      </div>
      <p className="mb-4">{SITES_INTRO}</p>
      <LikedSites data={LIKED_SITES} />
    </PageContainer>
  );
};

export default Sites;