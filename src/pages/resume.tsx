import React from 'react';
import PageContainer from '../components/PageContainer';

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
      <h1 className="text-3xl">Resume</h1>
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