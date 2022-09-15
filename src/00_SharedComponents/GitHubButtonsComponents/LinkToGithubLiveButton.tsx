import { BsFillPlayCircleFill } from "react-icons/bs";

export default function LinkToGithubLiveButton(props: { href?: string }) {
  return (
    <a
      className="flex flex-row justify-center items-center gap-2 px-6 py-1 border rounded-full border-white text-[1rem]  font-semibold min-w-[200px] duration-300 hover:border-black hover:text-black"
      href={props.href}
      target={"_blank"}
      rel="noreferrer"
    >
      see the demo <BsFillPlayCircleFill />
    </a>
  );
}
