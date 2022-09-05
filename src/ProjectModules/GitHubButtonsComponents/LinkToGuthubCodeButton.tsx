import { BsGithub } from "react-icons/bs";

export default function LinkToGithubCodeButton(props: { href?: string }) {
  return (
    <a
      className="flex flex-row justify-center items-center gap-2 px-6 py-1 border rounded-full border-white text-[1rem]  font-semibold min-w-[200px]"
      href={props.href}
      target={"_blank"}
    >
      See the code <BsGithub />
    </a>
  );
}
