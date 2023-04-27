import "./App.css";
import { ContactPageData } from "./03_ProjectModules/03.1_ProjectModuleDataComponents/ProjectModuleDataPackage";
import ContactPage from "./04_ContactComponents/ContactPage";
import AboutMe from "./02_AboutMeComponents/AboutMe";
import ProjectModulesList from "./03_ProjectModules/ProjectModulesList";
import PresentationModule from "./01_PresentationComponents/PresentationPage";

function App() {
  return (
      <div className="flex flex-col justify-center items-center gap-5">
          <PresentationModule />
          <AboutMe />
          <ProjectModulesList />
          <ContactPage data={ContactPageData} />
      </div>
  );
}

export default App;
