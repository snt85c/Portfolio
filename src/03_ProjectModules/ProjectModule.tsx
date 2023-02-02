import { motion, useInView } from "framer-motion";
import {useRef } from "react";
import { iData } from "./03.1_ProjectModuleDataComponents/ProjectModuleDataPackage";
import Devicons from "../00_SharedComponents/Devicons";
import GitHubLinks from "../00_SharedComponents/GitHubButtonsComponents/GitHubLinks";
import ScrollDown from "../00_SharedComponents/ScrollDown";
import { useWindowSize } from "../00_SharedComponents/Services";

export default function ProjectModule(props: { data: iData; number: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin:"300px 0px 0px 0px"});

  const [width, height] = useWindowSize();

  return (
    <>
      {props.data && (
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: "0", opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 60, duration: 500 }}
          className="flex flex-col justify-between items-center rounded-2xl bg-white text-black inset-0 px-5 select-none py-5"
          style={{ minHeight: height }}
        >
          <div></div>
          <div className="flex flex-col sm:mx-5 relative sm:p-10 gap-20 sm:bg-gray-500/50 rounded-md">
            <div className="flex sm:flex-row flex-col justify-center items-center">
              {props.data.img.desktop && (
                <>
                  <img
                    src={props.data.img.desktop}
                    width={width / 1.6}
                    height={height / 1.6}
                    className="rounded-lg top-40 hidden sm:flex z-10 duration-300"
                    alt="project screenshot"
                  />
                  <img
                    src={props.data.img.mobile}
                    width={width / 1.8}
                    height={height / 2}
                    className="rounded-lg top-40 sm:hidden z-10 duration-300"
                    alt="project screenshot"
                  />
                </>
              )}
              <div className="flex flex-col items-center justify-center gap-5 -mt-[5rem] sm:mt-0 sm:-ml-[20rem] z-20 text-[3vw] sm:text-[1rem] w-[100%] sm:w-[50%] p-5 bg-slate-500 duration-300 text-white shadow-lg">
                <div className="font-extrabold text text-[6vw] sm:text-[2vw] -mb-5]">
                  {props.data?.name}
                </div>
                <span className="text-[1rem] sm:text-[1.5vw]">
                  {props.data?.details}
                </span>
                <GitHubLinks data={props.data} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <Devicons icons={props.data.devicons} />
            <div className="sm:absolute bottom-5 right-10 text-black">
              <ScrollDown />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
