import "./App.css";
import {
  TravelOrganizerData,
  TicketmasterApi,
  ContactPageData,
  WeatherAppData,
  TaskManagerData,
} from "./ProjectModuleDataComponents/ProjectModuleDataPackage";
import ContactPage from "./03ProjectModules/ContactPage";
import PresentationModule from "./01PresentationComponents/PresentationPage";
import ProjectModule from "./03ProjectModules/ProjectModule";
import AboutMe from "./02AboutMeComponents/AboutMe";

function App() {
  return (
    <>
      <div className="snap-y snap-proximity">
        <div className="snap-center">
          <PresentationModule />
        </div>
        <div className="snap-center">
          <AboutMe />
        </div>
        <div className="snap-center ">
          <ProjectModule data={TravelOrganizerData} />
        </div>
        <div className="snap-center ">
          <ProjectModule data={TicketmasterApi} />
        </div>
        <div className="snap-center">
          <ProjectModule data={WeatherAppData} />
        </div>
        <div className="snap-center">
          <ProjectModule data={TaskManagerData} />
        </div>
        <div className="snap-end">
          <ContactPage data={ContactPageData} />
        </div>
      </div>
    </>
  );
}

export default App;
