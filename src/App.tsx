import "./App.css";
import { ContactPageData } from "./03_ProjectModules/03.1_ProjectModuleDataComponents/ProjectModuleDataPackage";
import ContactPage from "./04_ContactComponents/ContactPage";
import AboutMe from "./02_AboutMeComponents/AboutMe";
import ProjectModulesList from "./03_ProjectModules/ProjectModulesList";
import PresentationModule from "./01_PresentationComponents/PresentationPage";

function App() {
  return (
    <>
      <div className="flex flex-col snap-y snap-mandatory gap-5">
        <div className="sm:snap-center">
          <PresentationModule />
        </div>
        <div className="sm:snap-center">
          <AboutMe />
        </div>
        <ProjectModulesList />
        <div className="sm:snap-center">
          <ContactPage data={ContactPageData} />
        </div>
      </div>
    </>
  );
}

export default App;
