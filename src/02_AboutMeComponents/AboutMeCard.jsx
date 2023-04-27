import CVButton from "./CVButton";
export default function AboutMeCard() {
  return (
    <div className="flex flex-col text-gray-800 justify-between items-center text-[1rem] sm:text-[1.5vw] m-5 p-5 px-10 bg-slate-400 md:w-1/2 gap-7 rounded-lg">
      <section>
        <h1 className="flex my-5 w-full text-start text-black text-[8vw] sm:text-[4vw] font-semibold leading-none">
          About Me
        </h1>
        <p>
          I'm a<span className="font-bold text-black"> self-taught</span>{" "}
          Frontend Developer who loves to work with JavaScript technologies.
          Right now my mind is focused on learning everything that is related to
          Web Development.
        </p>
        <p className="pt-2">
          Based in <span className="text-black font-bold">London(UK)</span>
        </p>
      </section>
      <CVButton />
    </div>
  );
}
