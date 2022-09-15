import { iHref } from "../../03_ProjectModules/03.1_ProjectModuleDataComponents/ProjectModuleDataPackage";
import LinkToGithubLiveButton from "./LinkToGithubLiveButton";
import LinkToGithubCodeButton from "./LinkToGuthubCodeButton";

export default function GitHubLinks(props: { href?: iHref }) {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly gap-2 m-3">
      {props.href?.showCode && (
        <LinkToGithubCodeButton href={props.href?.githubCodeHref} />
      )}
      {props.href?.showLive && (
        <LinkToGithubLiveButton href={props.href?.githubLiveHref} />
      )}
    </div>
  );
}
