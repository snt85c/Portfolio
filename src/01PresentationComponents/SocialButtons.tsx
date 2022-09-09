import { BsGithub } from "react-icons/bs";
import { SiGmail, SiLinkedin } from "react-icons/si";

export default function SocialButtons() {
  return (
    <>
      <div className="flex flex-col m-3 gap-1">
        <a
          href="https://www.linkedin.com/in/santi-cacciola-43bb3462/"
          target={"_blank"}
        >
          <SiLinkedin size={30} />
        </a>
        <a href="https://github.com/snt85c" target={"_blank"}>
          <BsGithub size={30} />
        </a>
        <a href="mailto:santi.cacciola@hotmail.it">
        <SiGmail size={30} />
        </a>
      </div>
    </>
  );
}
