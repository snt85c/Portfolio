import { BsGithub } from "react-icons/bs";
import { SiGmail, SiLinkedin } from "react-icons/si";
import { useWindowSize } from "./Services";

export default function SocialButtons() {

  const [width, height] = useWindowSize();

  const size = width < 500? width /20: width /30

  return (
    <>
      <div className="flex flex-col m-3 gap-3">
        <a
          href="https://www.linkedin.com/in/santi-cacciola-43bb3462/"
          target={"_blank"}
          rel="noreferrer"
        >
          <SiLinkedin size={size} className="hover:text-amber-400 duration-300"/>
        </a>
        <a href="https://github.com/snt85c" target={"_blank"} rel="noreferrer" >
          <BsGithub size={size} 
          className="hover:text-amber-400 duration-300"
          />
        </a>
        <a href="mailto:santi.cacciola@hotmail.it">
          <SiGmail size={size} 
          className="hover:text-amber-400 duration-300"
          />
        </a>
      </div>
    </>
  );
}
