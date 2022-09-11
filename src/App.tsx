import "./App.css";
import {
  ContactPageData,
  projectArray,
} from "./ProjectModuleDataComponents/ProjectModuleDataPackage";
import ContactPage from "./03ProjectModules/ContactPage";
import PresentationModule from "./01PresentationComponents/PresentationPage";
import ProjectModule from "./03ProjectModules/ProjectModule";
import AboutMe from "./02AboutMeComponents/AboutMe";

function App() {
  
  const ProjectModulesList = projectArray.map((projectData) => {
    return (
      <div className="snap-center ">
        <ProjectModule data={projectData} />
      </div>
    );
  });

  return (
    <>
      <div className="snap-y snap-proximity">
        <div className="snap-center">
          <PresentationModule />
        </div>
        <div className="snap-center">
          <AboutMe />
        </div>
        <>{ProjectModulesList}</>
        <div className="snap-end">
          <ContactPage data={ContactPageData} />
        </div>
      </div>
    </>
  );
}

export default App;
