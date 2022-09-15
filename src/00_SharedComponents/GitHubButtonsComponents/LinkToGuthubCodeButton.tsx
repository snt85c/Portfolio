import { BsGithub } from "react-icons/bs";

export default function LinkToGithubCodeButton(props: { href?: string }) {
  return (
    <a
      className="flex flex-row justify-center items-center gap-2 px-6 py-1 border rounded-full border-white text-[1rem]  font-semibold min-w-[200px] hover:border-black hover:text-black duration-300"
      href={props.href}
      target={"_blank"}
      rel="noreferrer"
    >
      See the code <BsGithub />
    </a>
  );
}
