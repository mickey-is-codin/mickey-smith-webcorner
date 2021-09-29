import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Experience, Project, MetadataProp, SocialMediaInfo, PageLinkInfo, NavbarPageInfo, LikedSitesInfo, ReadBooksInfo } from './types';

// Home Page
export const HOME_LINK = '/';

export const SITE_TITLE: string = "Mickey Smith - Software Developer";
export const SITE_SUB_TITLE: string = "A personal site for ..."

export const SOCIAL_MEDIA: SocialMediaInfo[] = [
  {
    name: "My Github",
    icon: AiFillGithub,
    link: "https://github.com/mickey-is-codin"
  },
  {
    name: "My Twitter",
    icon: AiFillTwitterCircle,
    link: "https://twitter.com/mickey_is_codin"
  },
  {
    name: "My Instagram",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/mickey_is_codin/"
  },
  {
    name: "My LinkedIn",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/mickeysmith2300/"
  },
];

export const PAGE_LINKS: PageLinkInfo[] = [
  {
    title: "Blog",
    name: "my blog",
    link: "/blog",
  },
  {
    title: "Sites",
    name: "links to other sites I like",
    link: "/sites",
  },
  {
    title: "Books",
    name: "books that I've read",
    link: "/books",
  },
  {
    title: "Projects",
    name: "projects I've made",
    link: "/projects",
  },
  {
    title: "Resume",
    name: "things I've done",
    link: "/resume",
  },
];

export const HOME_METADATA: MetadataProp = {
  title: "Home",
  meta: [
    {
      name: "Home Page",
      content: "Home page for Mickey Smith Webcorner",
    },
    {
      name: "keywords",
      content: "mickey,smith,code,software,react,js,javascript",
    },
  ],
};

// Blog
export const POSTS_METADATA: MetadataProp = {
  title: "Posts",
  meta: [
    {
      name: "Blog Posts",
      content: "List of blog posts on this site",
    },
    {
      name: "keywords",
      content: "mickey,smith,code,software,react,js,javascript",
    },
  ],
};

// Sites
export const SITES_METADATA: MetadataProp = {
  title: "Sites",
  meta: [
    {
      name: "Sites I Like",
      content: "A list of sites I frequent",
    },
    {
      name: "keywords",
      content: "mickey,smith,code,software,react,js,javascript",
    },
  ],
};

export const SITES_TITLE: string = "Some Sites I Like";
export const SITES_SUB_TITLE : string= "A list of websites that I enjoy";
export const SITES_INTRO: string = `The internet, at its best, is a series of rabbitholes. Here are some of sites that have led me down the most fun rabbitholes.`;

export const LIKED_SITES: LikedSitesInfo = [
  {
    title: "News and Aggregators",
    description: `Some sites that I check to see how the world is doing:`,
    sites: [
      {
        title: "Chicago Tribune (Enewspaper)",
        link: "https://www.chicagotribune.com/",
      },
      {
        title: "Hacker News",
        link: "https://news.ycombinator.com",
      },
      {
        title: "The Intercept",
        link: "https://theintercept.com/",
      },
      {
        title: "OCCRP",
        link: "https://www.occrp.org/en",
      },
      {
        title: "Quanta Magazine",
        link: "https://quantamagazine.org",
      },
      {
        title: "The Gradient",
        link: "https://thegradient.pub",
      },
      {
        title: "Quantum Country",
        link: "https://quantum.country/qcvc",
      },
    ],
  },
  {
    title: "Text-Forward Sites",
    description: `I a sucker for a great text-based site. Here are some of my favorites:`,
    sites: [
      {
        title: "Sijmen Mulder's Text-Only Sites",
        link: "https://sjmulder.nl/en/textonly.html",
      },
      {
        title: "Readspike",
        link: "https://readspike.com/",
      },
      {
        title: "Phrack",
        link: "http://phrack.org",
      },
      {
        title: "Text Files",
        link: "http://www.textfiles.com/",
      },
      {
        title: "tildeverse",
        link: "https://tildeverse.org/",
      },
      {
        title: "tilde.club",
        link: "http://tilde.club/",
      },
      {
        title: "tilde.town",
        link: "http://tilde.town/",
      },
    ],
  },
  {
    title: "Books/Literature/Philosophy",
    description: `It's important to read articles that aren't just caffeine-fuelled wrappers around code snippets:`,
    sites: [
      {
        title: "Urth List",
        link: "http://urth.net/",
      },
      {
        title: "LitHub",
        link: "https://lithub.com/",
      },
      {
        title: "Daily Nous",
        link: "http://dailynous.com/",
      },
      {
        title: "Nautil.us",
        link: "http://nautil.us/",
      },
      {
        title: "History Today",
        link: "https://www.historytoday.com/homepage",
      },
      {
        title: "CheapskatesGuide",
        link: "https://cheapskatesguide.org/",
      },
    ],
  },
  {
    title: "Frontend Development",
    description: `Some sites for news and tutorials around UI design and development:`,
    sites: [
      {
        title: "Smashing Magazine",
        link: "https://www.smashingmagazine.com/",
      },
      {
        title: "Front End Front",
        link: "frontendfront.com",
      },
      {
        title: "LogRocket",
        link: "blog.logrocket.com",
      },
      {
        title: "Alligator.io",
        link: "alligator.io",
      },
      {
        title: "dev.to",
        link: "dev.to",
      },
      {
        title: "Best of JS",
        link: "https://bestofjs.org/",
      },
      {
        title: "ui.dev",
        link: "https://ui.dev/blog/",
      },
      {
        title: "Josh Comeau Personal Site",
        link: "https://joshwcomeau.com/",
      },
    ],
  },
  {
    title: "Music",
    description: `Music blogs and record company sites are always the best way to stay up to date on sonic goings on:`,
    sites: [
      {
        title: "Gorilla vs. Bear",
        link: "https://www.gorillavsbear.net/",
      },
      {
        title: "Metacritic",
        link: "https://www.metacritic.com/browse/albums/release-date/new-releases/date?view=condensed",
      },
      {
        title: "Aquarium Drunkard",
        link: "https://aquariumdrunkard.com/",
      },
      {
        title: "The Quietus",
        link: "https://thequietus.com/",
      },
      {
        title: "Brooklyn Vegan",
        link: "https://www.brooklynvegan.com/",
      },
      {
        title: "Fat Possum",
        link: "https://www.fatpossum.com/",
      },
      {
        title: "Merge",
        link: "https://www.mergerecords.com/",
      },
    ],
  },
  {
    title: "Longform Articles",
    description: `Sites that emphasize longform written content:`,
    sites: [
      {
        title: "Antilibraries",
        link: "https://www.antilibrari.es/",
      },
      {
        title: "Gwern",
        link: "gwern.net",
      },
      {
        title: "RibbonFarm",
        link: "https://www.ribbonfarm.com/",
      },
      {
        title: "The Browser",
        link: "https://thebrowser.com/",
      },
      {
        title: "Uncommon in Common",
        link: "https://uncommon.cc/",
      },
      {
        title: "Open Masters",
        link: "https://www.openmasters.org/",
      },
      {
        title: "SnarkMarket",
        link: "http://snarkmarket.com/",
      },
      {
        title: "Five Books",
        link: "https://fivebooks.com/",
      },
      {
        title: "Hyperlink",
        link: "https://hyperlink.academy/",
      },
      {
        title: "The Long Now",
        link: "https://longnow.org/",
      },
      {
        title: "The Stoa",
        link: "https://www.thestoa.ca/",
      },
      {
        title: "FoAM",
        link: "https://fo.am/",
      },
      {
        title: "BLDGBLOG",
        link: "https://www.bldgblog.com/",
      },
      {
        title: "Flowing Data",
        link: "https://flowingdata.com/",
      },
      {
        title: "The Pudding",
        link: "https://pudding.cool/",
      },
      {
        title: "Subpixel Space",
        link: "https://subpixel.space/",
      },
      {
        title: "Palladium Magazine",
        link: "https://palladiummag.com/",
      },
      {
        title: "Like Stories of Old",
        link: "https://www.youtube.com/channel/UCs7nPQIEba0T3tGOWWsZpJQ",
      },
      {
        title: "The School of Life",
        link: "https://www.theschooloflife.com/",
      },
      {
        title: "Everything2",
        link: "https://everything2.com/",
      },
      {
        title: "Dynamicland",
        link: "https://dynamicland.org/",
      },
      {
        title: "Edge",
        link: "https://www.edge.org/",
      },
      {
        title: "Stanford",
        link: "https://plato.stanford.edu/index.html",
      },
      {
        title: "Interintillect",
        link: "https://interintellect.com/",
      },
    ],
  },
  {
    title: "Webcomics",
    description: `For the in-between times:`,
    sites: [
      {
        title: "XKCD",
        link: "xkcd.com",
      },
      {
        title: "Three Word Phrase",
        link: "threewordphrase.com",
      },
      {
        title: "Saturday Morning Breakfast Cereal",
        link: "https://www.smbc-comics.com/",
      },
      {
        title: "Space Avalanche",
        link: "http://www.spaceavalanche.com/",
      },
      {
        title: "Perry Bible Fellowship",
        link: "https://pbfcomics.com/",
      },
    ],
  },
];

// Books
export const BOOKS_METADATA: MetadataProp = {
  title: "Books",
  meta: [
    {
      name: "Books I've Read",
      content: "Test description",
    },
    {
      name: "keywords",
      content: "mickey,smith,code,software,react,js,javascript",
    },
  ],
};

export const BOOKS_TITLE: string = "Books That I've Read";
export const BOOKS_SUB_TITLE: string = "A list of books I've read";
export const BOOKS_INTRO: string = `Here are the books`;

export const READ_BOOKS: ReadBooksInfo = [
  {
    title: "2021",
    description: ``,
    books: [
      {
        title: "",
        link: "",
      },
    ],
  },
  {
    title: "2020",
    description: ``,
    books: [
      {
        title: "",
        link: "",
      },
    ],
  },
  {
    title: "Pre-2020",
    description: `It's important to read articles that aren't just caffeine-fuelled wrappers around code snippets:`,
    books: [
      {
        title: "Urth List",
        link: "http://urth.net/",
      },
    ],
  },
];

// Projects
export const PROJECTS: Project[] = [
  {
    title: "The Dinogram",
    description: "A newsletter turned website about what came before us",
    link: "https://www.dinogram.org",
  },
  {
    title: "Foam-MRI",
    description: "A Zettelkasten notes search tool",
    link: "https://github.com/mickey-is-codin/foam-mri",
  }
];

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

// Resume
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