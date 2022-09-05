import { BsChevronDoubleDown } from "react-icons/bs";

export default function ScrollDown(props:{removeScrollIcon?:boolean}) {
  return (
    <>
   {!props.removeScrollIcon && <div className="flex flex-col justify-center items-center mt-5">
      <div className="animate-bounce">
        <BsChevronDoubleDown size={25} />
      </div>
      <span className="text-[0.7rem]">scroll down</span>
    </div>}
    </>
  );
}
