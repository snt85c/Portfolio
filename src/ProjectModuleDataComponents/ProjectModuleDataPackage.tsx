import TravelOrgMobile from "./TravelOrgMobile.png";
import TravelOrgDesktop from "./TravelOrgDesktop.png";
import TicketmasterApiDesktop from "./ticketmasterApiDesktop.png";
import TicketmasterApiMobile from "./ticketmasterApiMobile.png";
import weatherAppDesktop from "./weatherAppDesktop.png";
import weatherAppMobile from "./weatherAppMobile.png";
import TaskMngrMobile from "./TaskMngrMobile.png";
import taskMngerDesktop from "./TaskMngrDesktop.png";

export const projectModuleDataArray: iData[] = [
  {
    name: "Travel Organizer",
    details: (
      <span>
        CRUD application which use Firebase to authenticate and store a database
        of documents for each users. Created to have a{" "}
        <span className="font-bold text-amber-400">'Mobile App' feeling</span>{" "}
        by incorporating swipe gestures to delete or highlight single entries
      </span>
    ),
    href: {
      githubLiveHref: "https://snt85c.github.io/TravelOrganizer/",
      showLive: true,
      githubCodeHref: "https://github.com/snt85c/TravelOrganizer",
      showCode: true,
    },
    img: {
      desktop: TravelOrgDesktop,
      mobile: TravelOrgMobile,
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
      FRAMER: true,
      CYPRESS: false,
    RTL:false,
      dependencies: ["framer-motion", "react-swipeable", "daisyui"],
    },
  },
  {
    name: "Weather App",
    details: (
      <span>
        Typescript web app that collect data from user geolocation or user input
        and gives back 7 hours or 7 days forecast. Fully{" "}
        <span className="font-bold text-amber-400">responsive for mobile</span>,
        with easy to handle swipe action to toggle between datasets
      </span>
    ),
    href: {
      githubLiveHref: "https://snt85c.github.io/Weather-App-React-TS/",
      showLive: true,
      githubCodeHref: "https://github.com/snt85c/Weather-App-React-TS",
      showCode: true,
    },
    img: {
      desktop: weatherAppDesktop,
      mobile: weatherAppMobile,
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
      FRAMER: false,
      CYPRESS: false,
    RTL:false,
      dependencies: ["openWeaterMap", "react-swipeable", "daisyui"],
    },
  },
  {
    name: "Ticketmaster",
    details: (
      <span>
        E-commerce frontend web application with a fully functioning shopping
        cart, product detail pages, and landing page.
        <span className="font-bold text-amber-400"> Tiketmaster API </span>
        Allows an user to search in a large online database of Artist and
        Concerts available live on the Ticketmaster platform
      </span>
    ),
    href: {
      githubLiveHref: "https://snt85c.github.io/Shopping-Cart/",
      showLive: true,
      githubCodeHref: "https://github.com/snt85c/shopping-cart/",
      showCode: true,
    },
    img: {
      desktop: TicketmasterApiDesktop,
      mobile: TicketmasterApiMobile,
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
      FRAMER: false,
      CYPRESS: false,
    RTL:false,
      dependencies: ["daisyui", "react-router-dom", "TicketmasterAPI"],
    },
  },
  {
    name: "Task Manager",
    details: (
      <span>
        TODO application styled with a win98 CSS. Created from the base up in{" "}
        <span className="text-amber-400 font-bold">
          Test Driven Development (TDD)
        </span>{" "}
        to demonstrate full testing capabilities with{" "}
        <span className="text-amber-400 font-bold">React Testing Library</span>{" "}
        and <span className="text-amber-400 font-bold">Cypress</span>
      </span>
    ),
    href: {
      githubLiveHref: "https://unittestingapp-2e18e.web.app/",
      showLive: true,
      githubCodeHref: "https://github.com/snt85c/ReactTesting",
      showCode: true,
    },
    img: {
      desktop: taskMngerDesktop,
      mobile: TaskMngrMobile,
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
      JEST: true,
      WEBPACK: false,
      FRAMER: false,
      CYPRESS: true,
      RTL: true,
      dependencies: [
        "framer-motion",
        "react-testing-library",
        "cypress",
        "98.css",
      ],
    },
  },
];

export const ContactPageData: iData = {
  name: "Contact Page",
  details: <></>,
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
    FRAMER: true,
    CYPRESS: false,
    RTL: false,
    dependencies: ["framer-motion", "react-intersection-observer", "vanta.js"],
  },
  img: {
    desktop: "",
    mobile: "",
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
  details: JSX.Element;
  devicons: iDevicons;
  href: iHref;
  img: iImage;
}

export interface iImage {
  desktop: string;
  mobile: string;
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
  FRAMER: boolean;
  CYPRESS: boolean;
  RTL: boolean;
  dependencies: string[];
}
