import { BsGithub } from "react-icons/bs";
import { SiGmail, SiLinkedin } from "react-icons/si";

export default function SocialButtons() {
  return (
    <>
      <div className="flex flex-col m-3 gap-1">
        <SiLinkedin size={30} />
        <BsGithub size={30} />
        <SiGmail size={30} />
      </div>
    </>
  );
}
