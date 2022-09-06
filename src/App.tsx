
import './App.css';
import { TravelOrganizerData, TicketmasterApi, ContactPageData, WeatherAppData, TaskManagerData } from './ProjectModuleDataComponents/ProjectModuleDataPackage';
import ContactPage from './ProjectModules/ContactPage';
import PresentationModule from './ProjectModules/PresentationModules/PresentationPage';
import ProjectModule from './ProjectModules/ProjectModule';

function App() {
 return(
    <>
    <div className="snap-y snap-proximity">
      <div className="snap-center">
        <PresentationModule />
      </div>
      <div className="snap-center ">
        <ProjectModule data={TravelOrganizerData} />
      </div>
      <div className="snap-center ">
        <ProjectModule data={TicketmasterApi} />
      </div>
      <div className="snap-center">
        <ProjectModule data={WeatherAppData}/>
      </div>
      <div className="snap-center">
        <ProjectModule data={TaskManagerData}/>
      </div>
      <div className="snap-end">
        <ContactPage data={ContactPageData} />
      </div>
    </div>
  </>
 )
}

export default App;
