import FlairText from "./flairText";
import CVButton from "./CVButton";
export default function AboutMeCard() {
  return (
    <div className="flex flex-col justify-between items-center text-[1rem] m-5 p-5 px-10 bg-slate-400/[0.80] md:w-1/2 gap-7 ">
      <div>
      <div className="flex my-5 w-full text-start text-black text-[3rem] font-semibold leading-none">
        About Me
      </div>
        I'm a<span className="font-bold text-amber-400"> self-taught</span>{" "}
        Frontend Developer who loves to work with JavaScript technologies. Right
        now my mind is focused on learning everything that is related to Web
        Development.
        <div className="pt-2">
          Based in <span className="text-amber-400 font-bold">London(UK)</span>
        </div>
      </div>
      <CVButton />
      <FlairText />
    </div>
  );
}
