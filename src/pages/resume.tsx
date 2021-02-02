import React from 'react';
import PageContainer from '../components/PageContainer';
import { IconContext } from 'react-icons';
import { GrDocumentDownload } from 'react-icons/gr';

interface ExperienceProps {
  title: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
};
export const ExperienceCard: React.FC<ExperienceProps> = (props) => {
  const {
    title,
    company,
    start,
    end,
    bullets,
  } = props;
  const jobTitle = `${title} at ${company}`;
  const term = `${start} - ${end}`;
  return (
    <div className="bg-theme-5 rounded-md">
      <h1>{jobTitle}</h1>
      <h3>{term}</h3>
      {bullets.map((bullet) => {
        return <p>{bullet}</p>
      })}
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
      <ExperienceCard
        title="Tester"
        company="Test Company"
        start="February 2020"
        end="December 2021"
        bullets={['bullet 1', 'bullet 2', 'bullet 3']}
      />
    </PageContainer>
  )
};

export default Resume;