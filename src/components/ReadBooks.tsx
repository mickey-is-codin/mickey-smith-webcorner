import React from 'react';
import { ReadBooksInfo, ReadBookInfo } from '../util/types';
import '../styles/global.css';

const SitesSection = (props: ReadBookInfo) => {
  const { title, description, books } = props;

  return (
    <div>
      <h2 className="text-xl mt-6 mb-4 font-semibold sm:text-2xl text-white">{title}</h2>
      <p className="mb-2">{description}</p>
      <ul className="mb-4 ml-8">
        {books.map(({ title, link }) => {
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

interface ReadBooksProps {
  data: ReadBooksInfo;
};
export const ReadBooks = (props: ReadBooksProps) => {
  const { data } = props;
  
  return (
    <div>
      {data.map(({ title, description, books }) => {
        return (
          <SitesSection
            title={title}
            description={description}
            books={books}
            key={`sites-section-${title}`}
          />
        );
      })}
    </div>
  );
};

export default ReadBooks;