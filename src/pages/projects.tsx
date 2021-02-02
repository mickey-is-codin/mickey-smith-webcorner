import React from 'react';
import PageContainer from '../components/PageContainer';
import { PROJECTS } from '../util/constants';
import { Project } from '../util/types';

export const ProjectCard: React.FC<Project> = (props) => {
  const { title, description, link } = props;
  return (
    <div className="m-4 py-4 transition duration-500 ease-in-out bg-theme-5 rounded-md hover:bg-green-700 hover:shadow-lg cursor-pointer transform hover:-translate-y-1 hover:-translate-x-1">
      <a href={link}>
        <div className="">
          <div className="text-xl mx-4 bg-themeBlack-1 rounded-md p-2"><h1>{title}</h1></div>
          <p className="my-4 text-center">{description}</p>
        </div>
      </a>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <PageContainer>
      <h1 className="text-3xl">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
       {PROJECTS.map((project, ix) => <ProjectCard key={`project-${ix}`} {...project} />)}
      </div>
    </PageContainer>
  );
};

export default Projects;