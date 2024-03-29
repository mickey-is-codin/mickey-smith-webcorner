import { IconType } from "react-icons/lib";

export interface Experience {
  title: string;
  company: string;
  start: string;
  end?: string;
  link: string;
  description: string;
};

export interface Project {
  title: string;
  description: string;
  link: string
};

export interface SubMetadata {
  name: string;
  content: string;
};
export interface MetadataProp {
  title: string;
  meta: SubMetadata[];
};

export interface SocialMediaInfo {
  name: string;
  icon: IconType;
  link: string;
};

export interface PageLinkInfo {
  title: string;
  name: string;
  link: string;
};

export interface NavbarPageInfo {
  title: string;
  link: string;
};

export interface SiteInfo {
  title: string,
  link: string;
};

export interface LikedSiteInfo {
  title: string;
  description: string;
  sites: SiteInfo[];
};

export type LikedSitesInfo = LikedSiteInfo[];

export interface BookInfo {
  title: string;
  author: string;
  year: number;
  link: string;
  review: string;
};

export interface ReadBookInfo {
  title: string;
  description: string;
  books: BookInfo[];
};

export type ReadBooksInfo = ReadBookInfo[];