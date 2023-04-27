import { projectModuleDataArray } from "./03.1_ProjectModuleDataComponents/ProjectModuleDataPackage";
import ProjectModule from "./ProjectModule";

export default function ProjectModulesList() {
    
  const ProjectModulesList: JSX.Element[] = projectModuleDataArray.map(
    (projectData, i) => {
      return (
        <div key={i}>
          <ProjectModule data={projectData} number={i} />
        </div>
      );
    }
  );

  return <>{ProjectModulesList}</>;
}
