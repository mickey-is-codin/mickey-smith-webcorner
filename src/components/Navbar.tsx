import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PAGE_LINKS } from '../util/constants';

// Need huge cleanup here

interface ProgressRingProps {
  radius: number;
  stroke: number;
};
export const ProgressRing: React.FC<ProgressRingProps> = (props) => {
  const { radius, stroke } = props;

  const [ height, setHeight ] = useState(1);
  const [ scrollPosition, setScrollPosition ] = useState(0);

  const handleScroll = () => {
    setTimeout(() => setScrollPosition(window.pageYOffset), 5);
  };

  useEffect(() => {
    setHeight(document.documentElement.scrollHeight - document.documentElement.clientHeight);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progressRatio = scrollPosition / height;
  const progress = isNaN(progressRatio) ? 0 : Math.min(Math.max(progressRatio, 0), 1);

  const normRadius = radius - stroke * 2;
  const circumference = 2 * Math.PI * normRadius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
    >
      <circle
        stroke="#f5c396"
        fill="transparent"
        strokeWidth={ stroke }
        strokeDasharray={ circumference + ' ' + circumference }
        style={{ strokeDashoffset }}
        r={ normRadius }
        cx={ radius }
        cy={ radius }
      />
      <g
        className="chart-text"
        style={{ transform: 'translateY(0.25em)' }}
      >
        <text
          x="52%"
          y="56%"
          className="chart-number"
          style={{
            fill: '#f5c396',
            fontSize: '0.8em',
            lineHeight: '1',
            textAnchor: 'middle',
            transform: 'translateY(-0.25em)'
          }}
        >
          {Math.round(progress * 100)}%
        </text>
      </g>
    </svg>
  );
};

interface NavbarTitleProps {
  title: string;
};
const NavbarTitle: React.FC<NavbarTitleProps> = (props) => {
  const { title } = props;
  return (
    <div className="flex-0 flex flex-col my-2 mx-4 py-auto text-center align-middle rounded-md">
      <div className="text-2xl text-theme-2 my-auto mx-2"><a href="/">{title}</a></div>
    </div>
  );
};

interface LargeViewItemProps {
  title: string;
  link: string;
};
const LargeViewItem: React.FC<LargeViewItemProps> = (props) => {
  const { title, link } = props;
  return (
    <div className="flex-0 flex-col hidden lg:inline-flex mx-4 rounded-md my-2">
      <div className="text-xl my-auto mx-2 hover:text-green-500">
        <a href={link}>{title}</a>
      </div>
    </div>
  );
};

interface LargeViewItemsProps {
  progressRing: boolean;
};
const LargeViewItems: React.FC<LargeViewItemsProps> = (props) => {
  const { progressRing } = props;
  return (
    <div className="flex-0 flex flex-row mx-4 text-theme-2">
      {progressRing ? (<div
        className="fixed top-24 left-4 z-40 hidden lg:inline-flex"
      >
        <ProgressRing
          radius={34}
          stroke={4}
        />
      </div>) : null}
      {PAGE_LINKS.map(({ title, link }) => {
        return (
          <LargeViewItem title={title} link={link} key={title}/>
        );
      })}
    </div>
  );
};

interface SmallViewItemProps {
  title: string;
  link: string;
};
const SmallViewItem: React.FC<SmallViewItemProps> = (props) => {
  const { title, link } = props;
  return (
    <div className="my-8 hover:text-green-500">
      <a href={link}>{title}</a>
    </div>
  );
};

interface CloseNavbarProps {
  onClose: () => void;
};
const CloseNavbarButton: React.FC<CloseNavbarProps> = (props) => {
  const { onClose } = props;
  return (
    <div className="flex flex-row-reverse justify-right">
      <div className="flex-0 mx-4 my-2 p-2 rounded-md bg-black bg-opacity-50">
        <AiFillCloseCircle
          onClick={onClose}
          size={36}
        />
      </div>
    </div>
  );
};

interface SmallViewItemsProps {
  progressRing: boolean;
};
const SmallViewItems: React.FC<SmallViewItemsProps> = (props) => {
  const { progressRing } = props;
  const [ navbarOpen, setNavbarOpen ] = useState(false);
  return (
    <div 
      className="flex-0 ml-auto visible lg:invisible mx-4 my-2 p-2 rounded-md text-center bg-theme-3"
    >
      {progressRing ? (<div
        className="fixed top-0 right-24 z-40"
      >
        <ProgressRing
          radius={34}
          stroke={4}
        />
      </div>) : null}
      <GiHamburgerMenu 
        size={36}
        className=""
        onClick={() => setNavbarOpen(true)}
      />
      {navbarOpen ? (
        <div
          className="fixed top-0 left-0 h-screen w-screen z-50 text-theme-2 text-3xl bg-themeBlack-2 bg-opacity-75"
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <CloseNavbarButton onClose={() => setNavbarOpen(false)} />
          <div className="flex flex-col h-full">
            <div className="flex-0 mt-24">
            {PAGE_LINKS.map(({ title, link }) => {
              return (
                <SmallViewItem title={title} link={link} key={title} />
              );
            })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

interface NavbarProps {
  progressRing: boolean;
};
export const Navbar: React.FC<NavbarProps> = (props) => {
  const { progressRing } = props;
  return (
    <nav className="sticky top-0 flex flex-row justify-left bg-theme-5 z-30">
      <NavbarTitle title="Mickey Smith" />
      <LargeViewItems progressRing={progressRing} />
      <SmallViewItems progressRing={progressRing} />
    </nav>
  );
};

export default Navbar;