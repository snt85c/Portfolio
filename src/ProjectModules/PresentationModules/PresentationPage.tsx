import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

import SocialButtons from "./SocialButtons";
import ScrollDown from "../ScrollDown";
import { ParticlesTest } from "../Particles";

export default function PresentationModule() {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0, delay: 0 });
  // const [isAlreadyVisited, setIsAlreadyVisited] = useState(false);
  // let isAlreadyVisited = false;
  const isAlreadyVisited = useRef(false);

  const firstModuleVariant = {
    visible: { x: "0", opacity: 1 },
  };

  useEffect(() => {
    let abortController = new AbortController();

    //if intersection-observer determines that inView is true or isAlreadyVisited state is true, then set it to variant/visible, then set isAlreadyVisited to true after 2000ms. This allows for the animation to happen only once during the first render.
    if (inView || isAlreadyVisited) {
      control.start("visible");
      setTimeout(() => {
        // setIsAlreadyVisited(true);
        isAlreadyVisited.current = true;
      }, 2000);
    }
    return abortController.abort();
  }, [control, inView]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          //initially is hidden
          ref={ref}
          //useInView needs to know which div is referring to
          variants={firstModuleVariant}
          //sets multiple choices of animation, in this case only one as initial will suffice for the start
          animate={control}
          //control is dependent on the variant
          transition={{ type: "tween", duration: 0.8 }}
          //tween is a simple slide animation, no bounce
          className="flex flex-col  justify-between border border-gray-500 mx-5
           min-h-[100vh] pt-10 pb-2 bg-black text-white text-[2rem] select-none"
          //
        >
          <div className="flex flex-row">
            <span className="absolute -z-10">
              <ParticlesTest />
            </span>
            <div className="flex flex-col mt-5 ml-5 w-full">
              <div className="text-[8vw] sm:text-[3rem] -mb-[1.5vh] leading-none">
                Hi, i'm
              </div>
              <div className="text-[20vw] sm:text-[10rem] font-extrabold leading-none">
                Santi!
              </div>
              <div className="leading-none -mt-[1.5vh] text-[5vw] sm:text-[2rem] text-amber-500">
                Front-end Developer
              </div>
            </div>
            <SocialButtons />
          </div>
          <div className=" leading-none -mt-[1.5vh] text-[3vw] sm:text-[1rem] text-center p-3">
            <div className="flex justify-center items-center m-3 text-[4vw] sm:text-[2rem]">
              I like making{" "}
              <span className="text-amber-500 font-bold text-[5vw] sm:text-[3rem] ml-1">
                {" "}
                things!
              </span>
            </div>
            <div className="ml-1">
              What{" "}
              <span className="text-amber-500 font-bold text-[3vw] sm:text-[1.5rem] ml-1">
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
              <span className="text-amber-500 font-bold text-[3vw] sm:text-[1.5rem] ml-1">
                is yet to come.
              </span>
            </div>
            <ScrollDown />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
