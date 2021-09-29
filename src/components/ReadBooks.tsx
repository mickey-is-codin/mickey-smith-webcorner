import React from 'react';
import { ReadBooksInfo, ReadBookInfo } from '../util/types';
import '../styles/global.css';

interface BookLinksProps {
  goodreads: string;
  amazon: string;
  review: string;
};
const BookLinks = (props: BookLinksProps) => {
  const { goodreads, amazon, review } = props;

  const goodreadsLink = <a className="text-theme-3 hover:text-green-500" href={goodreads}>Goodreads</a>;
  const amazonLink = <a className="text-theme-3 hover:text-green-500" href={amazon}>Amazon</a>;
  const reviewLink = review !== 'coming-soon'
    ? <a className="text-theme-3 hover:text-green-500" href={`/reviews/${review}`}>My Review</a>
    : <span className="text-gray-200">My Review</span>;

  return (
    <div>
      {goodreadsLink} | {amazonLink} | {reviewLink}
    </div>
  );
};

const BooksSection = (props: ReadBookInfo) => {
  const { title, description, books } = props;

  return (
    <div>
      <h2 className="text-xl mt-6 mb-4 font-semibold sm:text-2xl text-white">{title}</h2>
      <p className="mb-2">{description}</p>
      <div className="sm:grid sm:grid-cols-2">
        {books.map(({ title, author, link, review }) => {
          return (
            <div className="my-2 bg-green-800 p-2 sm:mx-2 rounded-lg" key={`site-link-${title}`}>
              <a className="hover:text-green-500 text-xl" href={`/reviews/${review}`} >{`${title}`}</a>
              <p>{`Author: ${author}`}</p>
              <BookLinks goodreads={link} amazon="" review={review} />
            </div>
          );
        })}
      </div>
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
          <BooksSection
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