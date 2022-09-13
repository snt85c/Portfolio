import "./App.css";
import {
  ContactPageData,
  projectModuleDataArray,
} from "./03_ProjectModules/03.1_ProjectModuleDataComponents/ProjectModuleDataPackage";
import ContactPage from "./04_ContactComponents/ContactPage";
import PresentationModule from "./01_PresentationComponents/PresentationPage";
import ProjectModule from "./03_ProjectModules/ProjectModule";
import AboutMe from "./02_AboutMeComponents/AboutMe";

function App() {
  const ProjectModulesList: JSX.Element[] = projectModuleDataArray.map(
    (projectData, i) => {
      return (
        <div className="snap-center" key={i}>
          <ProjectModule data={projectData} number={i} />
        </div>
      );
    }
  );

  return (
    <>
      <div className="flex flex-col snap-y snap-mandatory gap-5">
        <div className="snap-center">
          <PresentationModule />
        </div>
        <div className="snap-center">
          <AboutMe />
        </div>
        <>{ProjectModulesList}</>
        <div className="snap-center">
          <ContactPage data={ContactPageData} />
        </div>
      </div>
    </>
  );
}

export default App;
