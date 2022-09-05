import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { iData } from "../ProjectModuleDataComponents/ProjectModuleDataPackage";
import Devicons from "./Devicons";
import GitHubLinks from "./GitHubButtonsComponents/GitHubLinks";
import ScrollDown from "./ScrollDown";

export default function ProjectModule(props: { data?: iData }) {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0, delay: 0 }); //threshold:0.2,
  var isAlreadyVisited = false

  const testVariant = {
    visible: { x: "0", opacity: 1, backgroundColor: "white" },
  };

  useEffect(() => {
    //if intersection-observer determines that inView is true or isAlreadyAnimated state is true, then set it to variant/visible, then set isAlreadyAnimated to true after 500ms. This allows for the animation to happen only once during the first render.
    if (inView || isAlreadyVisited) {
      control.start("visible");
      setTimeout(() => {
        // setIsAlreadyVisited(true);
        isAlreadyVisited = true;
      }, 2000);
    }
  }, [control, inView]);

  return (
    <AnimatePresence>
      {props.data && (
        <motion.div
          ref={ref} //this is for intersection-observer
          initial={{ x: -100, opacity: 0, backgroundColor: "black" }}
          variants={testVariant}
          animate={control}
          transition={{ type: "spring", stiffness: 60, duration: 500 }}
          className="flex flex-col justify-between items-center rounded-2xl text-black min-h-screen first:mt-0 p-5 my-10 select-none"
        >
          <div className="font-extrabold text text-[8vw] sm:text-[2rem]">
            {props.data?.name}
          </div>
          <div className="flex flex-col sm:mx-5 sm:p-10 gap-20 sm:bg-gray-500/50 rounded-md">
            <div className="flex sm:flex-row  flex-col justify-center items-center  ">
              {props.data?.img.desktop && (<>
                <img
                  src={props.data.img.desktop}
                  width={700}
                  height={600}
                  className="rounded-lg top-40 sm:top-auto hidden sm:flex z-10 duration-300"
                />
                <img
                  src={props.data.img.mobile}
                  width={300}
                  height={300}
                  className="rounded-lg top-40 sm:top-auto sm:hidden z-10 duration-300"
                />
                </>
              )}
              <div className="flex flex-col items-center justify-center gap-5 -mt-[5rem] sm:mt-0 sm:-ml-[20rem] z-20 text-[3vw] sm:text-[1rem] w-[100%] sm:w-[50%] p-5 bg-slate-500/95 duration-300 text-white shadow-lg">
                <span>{props.data?.details}</span>
                <GitHubLinks href={props.data?.href} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Devicons icons={props.data?.devicons} />
          </div>
            <ScrollDown />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
