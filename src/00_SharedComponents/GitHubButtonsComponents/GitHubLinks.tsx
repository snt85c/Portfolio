import { iData } from "../../03_ProjectModules/03.1_ProjectModuleDataComponents/ProjectModuleDataPackage";
import LinkToGithubLiveButton from "./LinkToGithubLiveButton";
import LinkToGithubCodeButton from "./LinkToGuthubCodeButton";

export default function GitHubLinks(props: { data?: iData }) {
  const alert = function telegramAlert(name: string, type: "code" | "live") {
    if (process.env.NODE_ENV !== "development")
      fetch(
        `https://api.telegram.org/bot5531898247:AAG8rxOFIKmlwS6PYBVTuXdTGMqIaSpl5eE/sendMessage?chat_id=231233238&text=Click to ${type} button of ${name} on: ${new Date()} `
      );
  };
  return (
    <div className="flex flex-col lg:flex-row justify-evenly gap-2 m-3">
      {props.data?.href?.showCode && (
        <LinkToGithubCodeButton data={props.data} alert={alert} />
      )}
      {props.data?.href?.showLive && (
        <LinkToGithubLiveButton data={props.data} alert={alert} />
      )}
    </div>
  );
}
