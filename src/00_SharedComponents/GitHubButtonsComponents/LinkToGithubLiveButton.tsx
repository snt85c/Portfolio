import { BsFillPlayCircleFill } from "react-icons/bs";
import { iData } from "../../03_ProjectModules/03.1_ProjectModuleDataComponents/ProjectModuleDataPackage";

export default function LinkToGithubLiveButton(props: {
  data: iData;
  alert: (name: string, type: "code" | "live") => void;
}) {
  return (
    <a
      className="flex flex-row justify-center items-center gap-2 px-6 py-1 border rounded-full border-white text-[1rem]  font-semibold min-w-[200px] duration-300 hover:border-black hover:text-black"
      href={props.data?.href?.githubLiveHref}
      target={"_blank"}
      rel="noreferrer"
      onClick={() => props.alert(props.data.name, "live")}
    >
      see the demo <BsFillPlayCircleFill />
    </a>
  );
}
