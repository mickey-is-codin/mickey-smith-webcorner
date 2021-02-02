import React from 'react';
import PageContainer from '../components/PageContainer';
import { GrDocumentDownload } from 'react-icons/gr';
import { RESUME } from '../util/constants';
import { Experience } from '../util/types';

export const ExperienceCard: React.FC<Experience> = (props) => {
  const {
    title,
    company,
    start,
    end,
    link,
    description,
  } = props;
  const term = end ? `${start} - ${end}` : `${start}`;
  const jobTitle = `${title} at ${company}`;
  return (
    <div className="my-4 py-4 transition duration-500 ease-in-out bg-theme-5 rounded-md hover:bg-green-700 hover:shadow-lg cursor-pointer transform hover:-translate-y-1 hover:-translate-x-1">
      <a href={link}>
        <div className="flex">
          <div className="flex-0 text-xl mx-4"><h1>{term}</h1></div>
          <div className="flex-1 text-lg"><h1>{jobTitle}</h1></div>
        </div>
        <p className="m-4">{description}</p>
      </a>
    </div>
  );
};

export const Resume: React.FC = () => {
  return (
    <PageContainer>
      <div className="flex my-8">
        <h1 className="flex-0 text-3xl my-auto">Resume</h1>
        <a 
          className="flex-0 ml-auto p-4 transition duration-500 ease-in-out bg-theme-5 rounded-md hover:bg-green-700 hover:shadow-lg cursor-pointer transform hover:-translate-y-1 hover:-translate-x-1"
          href={`mickey_smith_resume.pdf`}
          download
        >
          <GrDocumentDownload
            size={36}
          />
        </a>
      </div>
      {RESUME.map((experience, ix) => <ExperienceCard key={`exp-${ix}`} {...experience} />)}
    </PageContainer>
  )
};

export default Resume;