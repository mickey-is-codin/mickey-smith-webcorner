import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Experience, Project, MetadataProp, SocialMediaInfo, PageLinkInfo, NavbarPageInfo, LikedSitesInfo, ReadBooksInfo } from './types';

// Navigation
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
export const BOOKS_INTRO: string = `Here's a list of books that I've read and some reviews`;

export const READ_BOOKS: ReadBooksInfo = [
  {
    title: "2021",
    description: `Books that I read in 2021:`,
    books: [
      {
        title: "Peace",
        author: "Gene Wolfe",
        year: 1975,
        link: "https://www.goodreads.com/book/show/60213.Peace",
        review: "coming-soon",
      },
      {
        title: "The Land Across",
        author: "Gene Wolfe",
        year: 2013,
        link: "https://www.goodreads.com/book/show/17332287-the-land-across",
        review: "coming-soon",
      },
      {
        title: "House of Leaves",
        author: "Mark Danielewski",
        year: 2000,
        link: "https://www.goodreads.com/book/show/24800.House_of_Leaves",
        review: "coming-soon",
      },
      {
        title: "The Wizard Knight",
        author: "Gene Wolfe",
        year: 2004,
        link: "https://www.goodreads.com/book/show/101949.The_Wizard_Knight",
        review: "coming-soon",
      },
      {
        title: "The Devil in a Forest",
        author: "Gene Wolfe",
        year: 1976,
        link: "https://www.goodreads.com/book/show/463361.The_Devil_in_a_Forest",
        review: "coming-soon",
      },
      {
        title: "Ficciones",
        author: "Jorge Luis Borges",
        year: 1944,
        link: "https://www.goodreads.com/book/show/426504.Ficciones",
        review: "coming-soon",
      },
      {
        title: "Labyrinths",
        author: "Jorge Luis Borges",
        year: 1962,
        link: "https://www.goodreads.com/book/show/17717.Labyrinths",
        review: "coming-soon",
      },
      {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        year: 1866,
        link: "https://www.goodreads.com/book/show/7144.Crime_and_Punishment",
        review: "coming-soon",
      },
      {
        title: "Infinite Jest",
        author: "David Foster Wallace",
        year: 1996,
        link: "https://www.goodreads.com/book/show/6759.Infinite_Jest",
        review: "infinite-jest",
      },
      {
        title: "The Pale King",
        author: "David Foster Wallace",
        year: 2011,
        link: "https://www.goodreads.com/book/show/9443405-the-pale-king",
        review: "coming-soon",
      },
      {
        title: "Gravity's Rainbow",
        author: "Thomas Pynchon",
        year: 1973,
        link: "https://www.goodreads.com/en/book/show/415.Gravity_s_Rainbow",
        review: "coming-soon",
      },
      {
        title: "Hamlet's Mill",
        author: "Giorgio de Santillana",
        year: 1969,
        link: "https://www.goodreads.com/book/show/1439.Hamlet_s_Mill",
        review: "coming-soon",
      },
      {
        title: "Geography of Nowhere",
        author: "James Howard Kunstler",
        year: 1993,
        link: "https://www.goodreads.com/book/show/125313.The_Geography_of_Nowhere",
        review: "coming-soon",
      },
      {
        title: "Hamlet",
        author: "William Shakespeare",
        year: 1611,
        link: "https://www.goodreads.com/book/show/1420.Hamlet",
        review: "coming-soon",
      },
      {
        title: "A Midsummer Night's Dream",
        author: "William Shakespeare",
        year: 1600,
        link: "https://www.goodreads.com/book/show/1622.A_Midsummer_Night_s_Dream",
        review: "coming-soon",
      },
      {
        title: "Book of the Long Sun (again)",
        author: "Gene Wolfe",
        year: 1996,
        link: "https://www.goodreads.com/series/43253-the-book-of-the-long-sun",
        review: "coming-soon",
      },
      {
        title: "Dominion",
        author: "Matthew Scully",
        year: 2002,
        link: "https://www.goodreads.com/en/book/show/7260.Dominion",
        review: "coming-soon",
      },
      {
        title: "The Coming Insurrection",
        author: "The Invisible Committee",
        year: 2007,
        link: "https://www.goodreads.com/book/show/6447374-the-coming-insurrection",
        review: "coming-soon",
      },
      {
        title: "Candide",
        author: "Voltaire",
        year: 1759,
        link: "https://www.goodreads.com/book/show/19380.Candide",
        review: "coming-soon",
      },
      {
        title: "Too Like the Lightning",
        author: "Ada Palmer",
        year: 2016,
        link: "https://www.goodreads.com/en/book/show/26114545-too-like-the-lightning",
        review: "coming-soon",
      },
      {
        title: "Seven Surrenders",
        author: "Ada Palmer",
        year: 2017,
        link: "https://www.goodreads.com/book/show/28220647-seven-surrenders",
        review: "coming-soon",
      },
      {
        title: "Great Tales and Works of Edgar Allan Poe",
        author: "Edgar Allan Poe",
        year: 1940,
        link: "https://www.goodreads.com/book/show/73449.Great_Tales_and_Poems",
        review: "coming-soon",
      },
    ],
  },
  {
    title: "2020",
    description: `Books that I read in 2020:`,
    books: [
      {
        title: "Other Minds",
        author: "Peter Godfrey-Smith",
        year: 2016,
        link: "https://www.goodreads.com/book/show/28116739-other-minds",
        review: "coming-soon",
      },
      {
        title: "Where Good Ideas Come From",
        author: "Steven Johnson",
        year: 2010,
        link: "https://www.goodreads.com/book/show/8034188-where-good-ideas-come-from",
        review: "coming-soon",
      },
      {
        title: "Foucault's Pendulum",
        author: "Umberto Eco",
        year: 1988,
        link: "https://www.goodreads.com/book/show/17841.Foucault_s_Pendulum",
        review: "coming-soon",
      },
      {
        title: "Fanged Noumena",
        author: "Nick Land",
        year: 2011,
        link: "https://www.goodreads.com/en/book/show/10838202-fanged-noumena",
        review: "coming-soon",
      },
      {
        title: "Blondie24",
        author: "David Fogel",
        year: 2001,
        link: "https://www.goodreads.com/book/show/387996.Blondie24",
        review: "coming-soon",
      },
      {
        title: "I Am Legend",
        author: "Richared Mathieson",
        year: 1954,
        link: "https://www.goodreads.com/book/show/40940649-i-am-legend",
        review: "coming-soon",
      },
      {
        title: "Name of the Rose",
        author: "Umberto Eco",
        year: 1980,
        link: "https://www.goodreads.com/book/show/119073.The_Name_of_the_Rose",
        review: "coming-soon",
      },
      {
        title: "100 Years of Solitude",
        author: "Gabriel Garcia Marquez",
        year: 1967,
        link: "https://www.goodreads.com/book/show/320.One_Hundred_Years_of_Solitude",
        review: "coming-soon",
      },
      {
        title: "Kafka on the Shore",
        author: "Haruki Murakami",
        year: 2002,
        link: "https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore",
        review: "coming-soon",
      },
      {
        title: "Gardens of the Moon",
        author: "Steven Erikson",
        year: 1999,
        link: "https://www.goodreads.com/book/show/55399.Gardens_of_the_Moon",
        review: "coming-soon",
      },
      {
        title: "Hyperion",
        author: "Dan Simmons",
        year: 1989,
        link: "https://www.goodreads.com/book/show/77566.Hyperion",
        review: "coming-soon",
      },
      {
        title: "The Dying Earth #1",
        author: "Jack Vance",
        year: 1950,
        link: "https://www.goodreads.com/book/show/951749.The_Dying_Earth",
        review: "coming-soon",
      },
      {
        title: "Mythologies",
        author: "Roland Barthes",
        year: 1957,
        link: "https://www.goodreads.com/book/show/51715.Mythologies",
        review: "coming-soon",
      },
      {
        title: "I, Claudius",
        author: "Robert Graves",
        year: 1934,
        link: "https://www.goodreads.com/book/show/18765.I_Claudius",
        review: "coming-soon",
      },
      {
        title: "The Lean Startup",
        author: "Eric Ries",
        year: 2011,
        link: "https://www.goodreads.com/book/show/10127019-the-lean-startup",
        review: "coming-soon",
      },
    ],
  },
  {
    title: "Pre-2020",
    description: `Books that I read before 2020:`,
    books: [
      {
        title: "The Book of the New Sun",
        author: "Gene Wolfe",
        year: 1983,
        link: "https://www.goodreads.com/series/41474-the-book-of-the-new-sun",
        review: "coming-soon",
      },
      {
        title: "Urth of the New Sun",
        author: "Gene Wolfe",
        year: 1987,
        link: "https://www.goodreads.com/book/show/60215.The_Urth_of_the_New_Sun",
        review: "coming-soon",
      },
      {
        title: "The Book of the Long Sun",
        author: "Gene Wolfe",
        year: 1996,
        link: "https://www.goodreads.com/series/43253-the-book-of-the-long-sun",
        review: "coming-soon",
      },
      {
        title: "The Book of the Short Sun",
        author: "Gene Wolfe",
        year: 2001,
        link: "https://www.goodreads.com/series/40848-the-book-of-the-short-sun",
        review: "coming-soon",
      },
      {
        title: "Dracula",
        author: "Bram Stoker",
        year: 1897,
        link: "https://www.goodreads.com/book/show/17245.Dracula",
        review: "coming-soon",
      },
      {
        title: "The Southern Reach Trilogy",
        author: "Jeff Vandermeer",
        year: 2014,
        link: "https://www.goodreads.com/series/112239-southern-reach",
        review: "coming-soon",
      },
      {
        title: "2666",
        author: "Roberto Bolaño",
        year: 2004,
        link: "https://www.goodreads.com/book/show/63032.2666",
        review: "coming-soon",
      },
      {
        title: "Player Piano",
        author: "Kurt Vonnegut",
        year: 1952,
        link: "https://www.goodreads.com/book/show/9597.Player_Piano",
        review: "coming-soon",
      },
      {
        title: "Cat's Cradle",
        author: "Kurt Vonnegut",
        year: 1963,
        link: "https://www.goodreads.com/book/show/135479.Cat_s_Cradle",
        review: "coming-soon",
      },
      {
        title: "Galapagos",
        author: "Kurt Vonnegut",
        year: 1985,
        link: "https://www.goodreads.com/en/book/show/9593.Gal_pagos",
        review: "coming-soon",
      },
      {
        title: "Slaughterhouse-Five",
        author: "Kurt Vonnegut",
        year: 1969,
        link: "https://www.goodreads.com/book/show/4981.Slaughterhouse_Five",
        review: "coming-soon",
      },
      {
        title: "Breakfast of Champions",
        author: "Kurt Vonnegut",
        year: 1973,
        link: "https://www.goodreads.com/book/show/4980.Breakfast_of_Champions",
        review: "coming-soon",
      },
      {
        title: "Do Androids Dream of Electric Sheep",
        author: "Phillip K. Dick",
        year: 1968,
        link: "https://www.goodreads.com/book/show/36402034-do-androids-dream-of-electric-sheep",
        review: "coming-soon",
      },
      {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        year: 1951,
        link: "https://www.goodreads.com/book/show/13079982-fahrenheit-451",
        review: "coming-soon",
      },
      {
        title: "Food of the Gods",
        author: "Terrence McKenna",
        year: 1992,
        link: "https://www.goodreads.com/book/show/51660.Food_of_the_Gods",
        review: "coming-soon",
      },
      {
        title: "True Hallucinations",
        author: "Terrence McKenna",
        year: 1989,
        link: "https://www.goodreads.com/book/show/114867.True_Hallucinations",
        review: "coming-soon",
      },
      {
        title: "A Confederacy of Dunces",
        author: "John Kennedy Toole",
        year: 1980,
        link: "https://www.goodreads.com/book/show/310612.A_Confederacy_of_Dunces",
        review: "coming-soon",
      },
      {
        title: "The Hero with 1,000 Faces",
        author: "Joseph Campbell",
        year: 1949,
        link: "https://www.goodreads.com/book/show/588138.The_Hero_With_a_Thousand_Faces",
        review: "coming-soon",
      },
      {
        title: "The Sound and the Fury",
        author: "William Faulkner",
        year: 1929,
        link: "https://www.goodreads.com/book/show/10975.The_Sound_and_the_Fury",
        review: "coming-soon",
      },
      {
        title: "Notes from Underground",
        author: "Fyodor Dostoevsky",
        year: 1864,
        link: "https://www.goodreads.com/book/show/49455.Notes_from_Underground",
        review: "coming-soon",
      },
      {
        title: "The Plague",
        author: "Albert Camus",
        year: 1947,
        link: "https://www.goodreads.com/book/show/11989.The_Plague",
        review: "coming-soon",
      },
      {
        title: "The Stranger",
        author: "Albert Camus",
        year: 1942,
        link: "https://www.goodreads.com/book/show/49552.The_Stranger",
        review: "coming-soon",
      },
      {
        title: "Metamorphosis",
        author: "Franz Kafka",
        year: 1915,
        link: "https://www.goodreads.com/book/show/485894.The_Metamorphosis",
        review: "coming-soon",
      },
      {
        title: "The Trial",
        author: "Franz Kafka",
        year: 1925,
        link: "https://www.goodreads.com/book/show/17690.The_Trial",
        review: "coming-soon",
      },
      {
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932,
        link: "https://www.goodreads.com/book/show/5129.Brave_New_World",
        review: "coming-soon",
      },
      {
        title: "The Doors of Perception",
        author: "Aldous Huxley",
        year: 1954,
        link: "https://www.goodreads.com/book/show/3188964-the-doors-of-perception",
        review: "coming-soon",
      },
      {
        title: "The Origin of Consciousness in the Breakdown of the Bicameral Mind",
        author: "Julian Jaynes",
        year: 1976,
        link: "https://www.goodreads.com/book/show/22478.The_Origin_of_Consciousness_in_the_Breakdown_of_the_Bicameral_Mind",
        review: "coming-soon",
      },
      {
        title: "Electric Kool-Aid Acid Test",
        author: "Tom Wolfe",
        year: 1999,
        link: "https://www.goodreads.com/book/show/7442.The_Electric_Kool_Aid_Acid_Test",
        review: "coming-soon",
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