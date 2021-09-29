import React from 'react';

interface SiteSubTitleProps {
  data: string;
};
export const SiteSubTitle = (props: SiteSubTitleProps) => {
  const { data } = props;

  return (
    <h2 className="flex-1 text-2xl my-auto text-center">{data}</h2>
  );
};

export default SiteSubTitle;