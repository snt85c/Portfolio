import ResumeButton from "./ResumeButton";
export default function AboutMeCard() {
  return (
    <div className="flex flex-col justify-between items-center text-[1rem] m-5 mt-10 p-5 px-10 bg-slate-400/[0.90] md:w-1/2 h-full gap-7">
      <div className="text-black text-[3rem] font-semibold leading-none">
        About Me
      </div>
      <div>
        I'm a<span className="font-bold text-amber-400"> self-taught</span>{" "}
        Frontend Developer who loves to work with JavaScript technologies. Right
        now my mind is focused on learning everything that is related to Web
        Development.
      </div>
      <ResumeButton />
      <div>
        based in <span className="text-amber-400 font-bold">London(UK)</span>
      </div>
    </div>
  );
}
