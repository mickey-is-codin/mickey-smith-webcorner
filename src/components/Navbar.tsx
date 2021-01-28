import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

interface NavbarTitleProps {
  title: string;
};
const NavbarTitle: React.FC<NavbarTitleProps> = (props) => {
  const { title } = props;
  return (
    <div className="flex-0 flex flex-col my-2 mx-4 py-auto text-center align-middle rounded-md bg-theme-3">
      <div className="text-xl my-auto mx-2">{title}</div>
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
      <div className="text-lg my-auto mx-2">
        <a href={link}>{title}</a>
      </div>
    </div>
  );
};

const LargeViewItems: React.FC = () => {
  return (
    <div className="flex-0 flex flex-row mx-4 text-theme-2">
      <LargeViewItem title="Home" link="/" />
      <LargeViewItem title="Posts" link="/posts" />
      <LargeViewItem title="About Me" link="/" />
      <LargeViewItem title="Resume" link="/" />
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
    <div className="">
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
      <GiHamburgerMenu 
        size={36}
        className=""
        onClick={() => setNavbarOpen(true)}
      />
      {navbarOpen ? (
        <div
          className="fixed top-0 left-0 h-screen w-screen z-50 text-theme-2 bg-themeBlack-2 bg-opacity-75"
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <CloseNavbarButton onClose={() => setNavbarOpen(false)} />
          <SmallViewItem title="Home" link="/" />
          <SmallViewItem title="Posts" link="/posts" />
          <SmallViewItem title="About Me" link="/" />
          <SmallViewItem title="Resume" link="/" />
        </div>
      ) : null}
    </div>
  );
};

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 flex flex-row justify-left bg-theme-5">
      <NavbarTitle title="Mickey Smith" />
      <LargeViewItems />
      <SmallViewItems />
    </nav>
  );
};

export default Navbar;