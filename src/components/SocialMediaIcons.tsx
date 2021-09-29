import React from 'react';
import { IconType } from 'react-icons/lib';
import { SocialMediaInfo } from '../util/types';

interface SocialMediaIconProps {
  href: string;
  title: string;
  IconComponent: IconType;
};
const SocialMediaIcon: React.FC<SocialMediaIconProps> = (props) => {
  const { href, title, IconComponent } = props;
  const className = "flex-0 hover:bg-green-500 cursor-pointer mx-2 rounded-md";
  return (
    <a href={href} title={title}>
      <IconComponent className={className} size={36} />
    </a>
  );
};

interface SocialMediaIconsProps {
  data: SocialMediaInfo[];
}
export const SocialMediaIcons = (props: SocialMediaIconsProps) => {
  const { data } = props;

  return (
    <div className="flex ml-auto">
      {data.map(({ name, link, icon }) => {
        return (
          <SocialMediaIcon
            title={name}
            href={link}
            IconComponent={icon}
            key={`social-media-${name}`}
          />
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;