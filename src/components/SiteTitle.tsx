import React from 'react';

interface SiteTitleProps {
  data: string;
};
export const SiteTitle = (props: SiteTitleProps) => {
  const { data } = props;

  return (
    <div className="my-4"><h1 className="text-xl sm:text-3xl">{data}</h1></div>
  );
};

export default SiteTitle;