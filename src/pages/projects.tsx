import React from 'react';
import PageContainer from '../components/PageContainer';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string
};
export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, description, link } = props;
  return (
    <div className="my-4 py-4 transition duration-500 ease-in-out bg-theme-5 rounded-md hover:bg-green-700 hover:shadow-lg cursor-pointer transform hover:-translate-y-1 hover:-translate-x-1">
      <a href={link}>
        <div className="flex">
          <div className="flex-0 text-xl mx-4 bg-themeBlack-1 rounded-md p-2"><h1>{title}</h1></div>
          <p className="flex-1 my-auto">{description}</p>
        </div>
      </a>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <PageContainer>
      <h1 className="text-3xl">Projects</h1>
      <ProjectCard 
        title="The Dinogram"
        description="A newsletter turned website about what came before us"
        link="https://www.dinogram.org/timeline"
      />
      <ProjectCard 
        title="Foam-MRI"
        description="A Zettelkasten notes search tool"
        link="https://github.com/mickey-is-codin/foam-mri"
      />
    </PageContainer>
  );
};

export default Projects;