import img1 from "./3.png"

export const TravelOrganizerData: iData = {
  name: "Travel Organizer",
  details:
    "CRUD application which use Firebase to authenticate and store a database of documents for each users. Created to have a 'Mobile App' feeling by incorporating swipe gestures",
  href: {
    githubLiveHref: "https://snt85c.github.io/TravelOrganizer/",
    showLive: true,
    githubCodeHref: "https://github.com/snt85c/TravelOrganizer",
    showCode: true,
  },
  video:{
    href:img1
  },
  devicons: {
    HTML: true,
    CSS: true,
    TLWNDCSS: true,
    TS: true,
    JS: true,
    REACT: true,
    FRBS: true,
    ND: false,
    NPM: true,
    GIT: true,
    JEST: false,
    WEBPACK: true,
    dependencies:["framer-motion","react-swipeable","daisyui"]
  },
};

export const TicketmasterApi: iData = {
  name: "Ticketmaster",
  details:
    "Clone with custom graphic using data collected from Tiketmaster API. Allows an user to search in a large online database of Artist and Concerts available live on the Ticketmaster platform",
  href: {
    githubLiveHref: "https://snt85c.github.io/Shopping-Cart/",
    showLive: true,
    githubCodeHref: "https://github.com/snt85c/shopping-cart/",
    showCode: true,
  },
  video:{
    href:""
  },
  devicons: {
    HTML: true,
    CSS: true,
    TLWNDCSS: true,
    TS: false,
    JS: true,
    REACT: true,
    FRBS: false,
    ND: false,
    NPM: true,
    GIT: true,
    JEST: false,
    WEBPACK: true,
    dependencies:["daisyui", "react-router-dom", "TicketmasterAPI"]
  },
};

export const ContactPageData: iData = {
  name: "Contact Page",
  details: "",
  devicons: {
    HTML: true,
    CSS: true,
    TLWNDCSS: true,
    TS: true,
    JS: true,
    REACT: true,
    FRBS: false,
    ND: false,
    NPM: false,
    GIT: true,
    JEST: false,
    WEBPACK: false,
    dependencies:["framer-motion", "react-intersection-observer"]
  },
  video:{
    href:""
  },
  href: {
    githubLiveHref: "",
    showLive: false,
    githubCodeHref: "",
    showCode: true,
  },
};

export interface iData {
  name: string;
  details: string;
  devicons: iDevicons;
  href: iHref;
  video:iVideo;
}

export interface iVideo{
  href:string
}
export interface iHref {
  githubLiveHref: string;
  showLive: boolean;
  githubCodeHref: string;
  showCode: boolean;
}

export interface iDevicons {
  HTML: boolean;
  CSS: boolean;
  TLWNDCSS: true;
  TS: boolean;
  JS: boolean;
  REACT: boolean;
  FRBS: boolean;
  ND: boolean;
  NPM: boolean;
  GIT: boolean;
  JEST: boolean;
  WEBPACK: boolean;
  dependencies:string[]
}
