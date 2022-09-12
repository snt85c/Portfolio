import { BsChevronDoubleDown } from "react-icons/bs";

export default function ScrollDown() {
  return (
    <>
      <div className="flex flex-col justify-center items-center"
      >
        <div className=" sm:hidden animate-bounce">
          <BsChevronDoubleDown size={15} />
        </div>
        <div className="hidden sm:flex animate-bounce">
          <BsChevronDoubleDown size={25} />
        </div>
        <span className="text-[0.7rem]">scroll down</span>
      </div>
    </>
  );
}