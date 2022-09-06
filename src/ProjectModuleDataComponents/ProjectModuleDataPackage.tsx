import TravelOrgMobile from "./TravelOrgMobile.png"
import TravelOrgDesktop from "./TravelOrgDesktop.png"
import TicketmasterApiDesktop from "./ticketmasterApiDesktop.png"
import TicketmasterApiMobile from "./ticketmasterApiMobile.png"
import weatherAppDesktop from "./weatherAppDesktop.png"
import weatherAppMobile from "./weatherAppMobile.png"

export const TravelOrganizerData: iData = {
  name: "Travel Organizer",
  details:
    "CRUD application which use Firebase to authenticate and store a database of documents for each users. Created to have a 'Mobile App' feeling by incorporating swipe gestures to delete or highlight single entries",
  href: {
    githubLiveHref: "https://snt85c.github.io/TravelOrganizer/",
    showLive: true,
    githubCodeHref: "https://github.com/snt85c/TravelOrganizer",
    showCode: true,
  },
  img:{
    desktop:TravelOrgDesktop,
    mobile:TravelOrgMobile
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

export const WeatherAppData: iData = {
  name: "Weather App",
  details:
    "Typescript web app that collecet data from user geolocation or user input and gives back 7 hours or 7 days forecast. Fully responsive for mobile, with easy to handle swipe action to toggle between datasets",
  href: {
    githubLiveHref: "https://snt85c.github.io/Weather-App-React-TS/",
    showLive: true,
    githubCodeHref: "https://github.com/snt85c/Weather-App-React-TS",
    showCode: true,
  },
  img:{
    desktop:weatherAppDesktop,
    mobile:weatherAppMobile
  },
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
    dependencies:["openWeaterMap","react-swipeable","daisyui"]
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
  img:{
    desktop:TicketmasterApiDesktop,
    mobile:TicketmasterApiMobile
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
  img:{
    desktop:"",
    mobile:""
  },
  href: {
    githubLiveHref: "",
    showLive: false,
    githubCodeHref: "https://github.com/snt85c/Portfolio",
    showCode: true,
  },
};

export interface iData {
  name: string;
  details: string;
  devicons: iDevicons;
  href: iHref;
  img:iImage;
}

export interface iImage{
  desktop:string,
  mobile:string
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
