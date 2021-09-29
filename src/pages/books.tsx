import React from 'react';
import PageContainer from '../components/PageContainer';
import ReadBooks from '../components/ReadBooks';
import {
  READ_BOOKS,
  BOOKS_INTRO,
  BOOKS_METADATA,
  BOOKS_TITLE,
} from '../util/constants';
import '../styles/global.css';

export const Books: React.FC = () => {
  return (
    <PageContainer metadata={BOOKS_METADATA}>
      <div className="flex">
        <div className="flex-1 text-3xl font-bold mb-4 text-green-400">{BOOKS_TITLE}</div>
      </div>
      <p className="mb-4">{BOOKS_INTRO}</p>
      <ReadBooks data={READ_BOOKS} />
    </PageContainer>
  );
};

export default Books;