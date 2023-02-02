import { BsGithub } from "react-icons/bs";
import { iData } from "../../03_ProjectModules/03.1_ProjectModuleDataComponents/ProjectModuleDataPackage";

export default function LinkToGithubCodeButton(props: {
  data: iData;
  alert: (name: string, type: "code" | "live") => void;
}) {
  return (
    <a
      className="flex flex-row justify-center items-center gap-2 px-6 py-1 border rounded-full border-white text-[1rem]  font-semibold min-w-[200px] hover:border-black hover:text-black duration-300"
      href={props.data?.href?.githubCodeHref}
      target={"_blank"}
      rel="noreferrer"
      onClick={()=>props.alert(props.data.name,"code")}

    >
      See the code <BsGithub />
    </a>
  );
}
