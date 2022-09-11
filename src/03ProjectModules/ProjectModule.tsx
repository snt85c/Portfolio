import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { iData } from "../ProjectModuleDataComponents/ProjectModuleDataPackage";
import Devicons from "./Devicons";
import GitHubLinks from "./GitHubButtonsComponents/GitHubLinks";
import ScrollDown from "./ScrollDown";
import { generateRandomColor } from "../Services";

export default function ProjectModule(props: { data: iData, number:number }) {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0, delay: 0 }); //threshold:0.2,
  const isAlreadyVisited = useRef(false);

  const testVariant = {
    visible: { x: "0", opacity: 1 },
  };

  useEffect(() => {
    //if intersection-observer determines that inView is true or isAlreadyAnimated state is true, then set it to variant/visible, then set isAlreadyAnimated to true after 500ms. This allows for the animation to happen only once during the first render.
    let abortController = new AbortController();
    if (inView || isAlreadyVisited.current) {
      control.start("visible");
      setTimeout(() => {
        isAlreadyVisited.current = true;
      }, 2000);
    }
    return abortController.abort();
  }, [control, inView]);

  return (
    <>
      {props.data && (
        <motion.div
          ref={ref} //this is for intersection-observer
          initial={{ x: -100, opacity: 0 }}
          variants={testVariant}
          animate={control}
          transition={{ type: "spring", stiffness: 60, duration: 500 }}
          className="flex flex-col justify-between items-center rounded-2xl text-black min-h-screen p-5 my-5 select-none"
          style={{
            background: `linear-gradient(180deg, white 30% ,${generateRandomColor()})`,
          }}
        >
          <div className="flex flex-col sm:mx-5 relative sm:p-10 gap-20 sm:bg-gray-500/50 rounded-md">
            <div className="flex sm:flex-row  flex-col justify-center items-center  ">
              {props.data.img.desktop && (
                <>
                  <img
                    src={props.data.img.desktop}
                    width={700}
                    height={600}
                    className="rounded-lg top-40 hidden sm:flex z-10 duration-300"
                  />
                  <img
                    src={props.data.img.mobile}
                    width={300}
                    height={300}
                    className="rounded-lg top-40 sm:hidden z-10 duration-300"
                  />
                </>
              )}
              <div className="flex flex-col items-center justify-center gap-5 -mt-[5rem] sm:mt-0 sm:-ml-[20rem] z-20 text-[3vw] sm:text-[1rem] w-[100%] sm:w-[50%] p-5 bg-slate-500/95 duration-300 text-white shadow-lg">
                <div className="font-extrabold text text-[6vw] sm:text-[1.5rem] -mb-5]">
                  {props.data?.name}
                </div>
                <span>{props.data?.details}</span>
                <GitHubLinks href={props.data?.href} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-5 sm:pb-1">
            <Devicons icons={props.data.devicons} />
            <ScrollDown />
          </div>
        </motion.div>
      )}
    </>
  );
}
