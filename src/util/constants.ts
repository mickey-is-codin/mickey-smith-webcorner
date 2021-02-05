import { IParticlesParams } from 'react-particles-js';
import { Experience, Project, MetadataProp } from './types';

export const RESUME: Experience[] = [
  {
    title: "Software Developer",
    company: "Digital Primates",
    start: "February 2020",
    end: "Present",
    link: "https://www.digitalprimates.net/",
    description: `I work on enterprise-scale React and JS applications. Now I\'m obsessed with functional programming.`
  },
  {
    title: "Research Assistant",
    company: "Shirley Ryan Abilitylab",
    start: "June 2019",
    end: "January 2020",
    link: 'https://www.sralab.org/research/labs/bionic-medicine/projects',
    description: `I designed ways for bionic devices to talk to each other and send diagnostics. I also wrote a web app for nurses to label training data.`
  },
  {
    title: "Student",
    company: "Purdue University",
    start: "August 2014",
    end: "May 2019",
    link: 'https://engineering.purdue.edu/BME',
    description: `I graduated with a major in Biomedical Engineering and a minor in Electical/Computer Engineering.`
  },
  {
    title: "Design Innovation Challenge - Second Place",
    company: "Purdue University",
    start: "March 2019",
    link: 'https://polytechnic.purdue.edu/newsroom/student-teams-recognized-for-high-tech-ideas-mitigate-human-trafficking',
    description: `I wrote some facial recognition code and made a big plan of action to mitigate human trafficking`
  },
  {
    title: "Semester Abroad & Senior Design",
    company: "DTU - Copenhagen",
    start: "August 2018",
    end: "December 2018",
    link: 'https://www.elektro.dtu.dk/english',
    description: `I completed some machine learning coursework and finished my senior design from Denmark. Skål!`
  },
  {
    title: "Engineering Summer Internship",
    company: "Kaleidoscope Innovation",
    start: "May 2018",
    end: "August 2018",
    link: 'https://kascope.com/',
    description: `A really smart person left me a robotic arm there so I made a web app to control it from within the office.`
  },
  {
    title: "Research Assistant",
    company: "Purdue Linnes Lab",
    start: "May 2017",
    end: "August 2017",
    link: 'https://pubmed.ncbi.nlm.nih.gov/30441212/',
    description: `I helped design and build a device to collect deep lung breath that got patented.`
  },
  {
    title: "Aortic Intervention Product Design Co-Op",
    company: "Cook Research, Inc",
    start: "August 2014",
    end: "May 2019",
    link: 'https://www.cookmedical.com/aortic-intervention/',
    description: `I designed methods to more effectively test pediatric medical devices.`
  },
];

export const PROJECTS: Project[] = [
  {
    title: "The Dinogram",
    description: "A newsletter turned website about what came before us",
    link: "https://www.dinogram.org/timeline",
  },
  {
    title: "Foam-MRI",
    description: "A Zettelkasten notes search tool",
    link: "https://github.com/mickey-is-codin/foam-mri",
  }
];

export const HOME_METADATA: MetadataProp = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Test description",
    },
    {
      name: "keywords",
      content: "mickey,smith,code,software,react,js,javascript",
    },
  ],
};

export const POSTS_METADATA: MetadataProp = {
  title: "Posts",
  meta: [
    {
      name: "description",
      content: "Test description",
    },
    {
      name: "keywords",
      content: "mickey,smith,code,software,react,js,javascript",
    },
  ],
};

export const PROJECTS_METADATA: MetadataProp = {
  title: "Projects",
  meta: [
    {
      name: "description",
      content: "Test description",
    },
    {
      name: "keywords",
      content: "mickey,smith,code,software,react,js,javascript",
    },
  ],
};

export const RESUME_METADATA: MetadataProp = {
  title: "Resume",
  meta: [
    {
      name: "description",
      content: "Test description",
    },
    {
      name: "keywords",
      content: "mickey,smith,code,software,react,js,javascript",
    },
  ],
};

export const PARTICLE_PARAMS_LIGHT: IParticlesParams = {
  particles: {
    color: {
      value: '#0000ff'
    },
    line_linked: {
      color: {
        value: '#0000ff'
      }
    },
    size: {
      value: 2
    }
  }
};

export const PAGES = [
  { title: 'Home', link: '/' },
  { title: 'Blog', link: '/blog' },
  { title: 'Sites', link: '/sites' },
  { title: 'Projects', link: '/projects' },
  { title: 'Resume', link: '/resume' },
];