import ScrollDown from "../00_SharedComponents/ScrollDown"
export default function FlairText(){

    return(<>
    <div className=" flex  flex-col items-center justify-center bottom-0 leading-none text-[3vw] sm:text-[1rem] text-center p-3    text-white h-1/3 w-full">
          <div className="flex justify-center items-center m-3 text-[4vw] sm:text-[2rem]">
            I like making{" "}
            <span className="text-amber-500 font-bold text-[5vw] sm:text-[3rem] ml-1 font-[GTAlpina]">
              {" "}
              things!
            </span>
          </div>
          <div className="ml-1">
            What{" "}
            <span className="text-amber-500 font-bold text-[3vw] sm:text-[1.5rem] ml-1 font-[GTAlpina]">
              motivates{" "}
            </span>
            me is the joy I get from creating a piece of software and seeing
            people use it and benefit from it.
          </div>
          <div className="ml-2">
            And i know that what I learn is a moving target.
          </div>
          <div className="ml-3">What I understand changes every week.</div>
          <div className="ml-4 m-2 flex justify-center items-center ">
            My best project{" "}
            <span className="text-amber-500 font-bold text-[3vw] sm:text-[1.5rem] ml-1 font-[GTAlpina]">
              is yet to come.
            </span>
          </div>
          <ScrollDown />
        </div>
    </>)
}