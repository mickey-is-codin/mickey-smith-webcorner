import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

// Need huge cleanup here

const PAGES = [
  { title: 'Home', link: '/' },
  { title: 'Blog', link: '/blog' },
  { title: 'Sites', link: '/sites' },
  { title: 'Projects', link: '/projects' },
  { title: 'Resume', link: '/resume' },
];

interface ProgressRingProps {
  radius: number;
  stroke: number;
  progress: number;
};
export const ProgressRing: React.FC<ProgressRingProps> = (props) => {
  const { radius, stroke } = props;

  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const [ scrollPosition, setProgress ] = useState(0);

  const handleScroll = () => setProgress(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progressRatio = scrollPosition / height;
  const progress = isNaN(progressRatio) ? 0 : progressRatio;

  const normRadius = radius - stroke * 2;
  const circumference = 2 * Math.PI * normRadius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
    >
      <circle
        stroke="white"
        fill="transparent"
        strokeWidth={ stroke }
        strokeDasharray={ circumference + ' ' + circumference }
        style={ { strokeDashoffset } }
        r={ normRadius }
        cx={ radius }
        cy={ radius }
      />
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
    <div className="flex-0 flex flex-col hidden lg:inline-flex mx-4 rounded-md my-2">
      <div className="text-xl my-auto mx-2 hover:text-green-500">
        <a href={link}>{title}</a>
      </div>
    </div>
  );
};

const LargeViewItems: React.FC = () => {
  return (
    <div className="flex-0 flex flex-row mx-4 text-theme-2">
      <div
        className="fixed top-24 left-4 z-40 hidden lg:inline-flex"
      >
        <ProgressRing
          radius={34}
          stroke={4}
        />
      </div>
      {PAGES.map((page) => {
        return (
          <LargeViewItem title={page.title} link={page.link} key={page.title}/>
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

const SmallViewItems: React.FC = () => {
  const [ navbarOpen, setNavbarOpen ] = useState(false);
  return (
    <div 
      className="flex-0 ml-auto visible lg:invisible mx-4 my-2 p-2 rounded-md text-center bg-theme-3"
    >
      <div
        className="fixed top-0 right-24 z-40"
      >
        <ProgressRing
          radius={34}
          stroke={4}
          progress={90}
        />
      </div>
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
            {PAGES.map((page) => {
              return (
                <SmallViewItem title={page.title} link={page.link} key={page.title} />
              );
            })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 flex flex-row justify-left bg-theme-5 z-30">
      <NavbarTitle title="Mickey Smith" />
      <LargeViewItems />
      <SmallViewItems />
    </nav>
  );
};

export default Navbar;