import TravelOrgMobile from "./TravelOrgMobile.png";
import TravelOrgDesktop from "./TravelOrgDesktop.png";
import TicketmasterApiDesktop from "./ticketmasterApiDesktop.png";
import TicketmasterApiMobile from "./ticketmasterApiMobile.png";
import weatherAppDesktop from "./weatherAppDesktop.png";
import weatherAppMobile from "./weatherAppMobile.png";
import TaskMngrMobile from "./TaskMngrMobile.png";
import taskMngerDesktop from "./TaskMngrDesktop.png";
import tcgStockDesktop from "./TCGStockDesktop.png"
import tcgStockMobile from "./TCGStockMobile.png"


export const projectModuleDataArray: iData[] = [
  {
    name: "TCG-Stock",
    details: (
      <p>
         Commissioned Minimum Viable Product
         <span className="font-bold text-amber-400"> (MVP)</span> Mobile App to keep accounting on Pokemon cards values from an API. Stores multiple collections and shows trending of values
        
      </p>
    ),
    href: {
      githubLiveHref: "https://www.tcgstock.me",
      showLive: true,
      githubCodeHref: "",
      showCode: false,
    },
    img: {
      desktop: tcgStockDesktop,
      mobile: tcgStockMobile,
    },
    devicons: {
      icons: ["TailwindCSS","Typescript","Javascript","React","Firebase", "Framer-Motion"] ,
      dependencies: ["pokemontcg.io","zustand"],
    },
  },
  {
    name: "Travel Organizer",
    details: (
      <p>
        CRUD application which use Firebase to authenticate and store a database
        of documents for each users. Created to have a{" "}
        <span className="font-bold text-amber-400">'Mobile App' feeling</span>{" "}
        by incorporating swipe gestures to delete or highlight single entries
      </p>
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
      icons: ["HTML","CSS","TailwindCSS","Typescript","Javascript","React","Firebase","NPM","GIT","Webpack","Framer-Motion"] ,
      dependencies: ["react-swipeable", "daisyui"],
    },
  },
  {
    name: "Weather App",
    details: (
      <p>
        Typescript web app that collect data from user geolocation or user input
        and gives back 7 hours or 7 days forecast. Fully{" "}
        <span className="font-bold text-amber-400">responsive for mobile</span>,
        with easy to handle swipe action to toggle between datasets
      </p>
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
      icons: ["HTML","CSS","TailwindCSS","Typescript","Javascript","React","NPM","GIT"] ,
      dependencies: ["openWeaterMap", "react-swipeable", "daisyui"],
    },
  },
  {
    name: "Ticketmaster",
    details: (
      <p>
        E-commerce frontend web application with a fully functioning shopping
        cart, product detail pages, and landing page.
        <span className="font-bold text-amber-400"> Tiketmaster API </span>
        Allows an user to search in a large online database of Artist and
        Concerts available live on the Ticketmaster platform
      </p>
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
      icons: ["HTML","CSS","TailwindCSS","Javascript","React","Firebase","NPM","GIT","Webpack"] ,
      dependencies: ["daisyui", "react-router-dom", "TicketmasterAPI"],
    },
  },
  {
    name: "Task Manager",
    details: (
      <p>
        TODO application styled with win98 CSS rules. Created from the base up in{" "}
        <span className="text-amber-400 font-bold">
          Test Driven Development (TDD)
        </span>{" "}
        to demonstrate full testing capabilities with{" "}
        <span className="text-amber-400 font-bold">React Testing Library</span>{" "}
        and <span className="text-amber-400 font-bold">Cypress</span>
      </p>
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
      icons: ["HTML","CSS","TailwindCSS","Typescript","Javascript","React","Firebase","GIT","Framer-Motion","Jest","React testing-library","Cypress"] ,
      dependencies: ["98.css"],
    },
  },
];

export const ContactPageData: iData = {
  name: "Contact Page",
  details: <></>,
  devicons: {
    icons: ["HTML","CSS","TailwindCSS","Typescript","Javascript","React","GIT","Webpack","Framer-Motion"] ,
    dependencies: ["vanta.js"],
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
  devicons: {
    icons:string[],
    dependencies: string[];
  };
  href: {
    githubLiveHref: string;
    showLive: boolean;
    githubCodeHref: string;
    showCode: boolean;
  };
  img: {
    desktop: string;
    mobile: string;
  };
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
  icons:string[]
  dependencies: string[];
}
