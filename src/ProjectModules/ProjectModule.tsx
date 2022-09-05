import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { generateRandomColor } from "../Services";
import { iData } from "../ProjectModuleDataComponents/ProjectModuleDataPackage";
import Devicons from "./Devicons";
import GitHubLinks from "./GitHubButtonsComponents/GitHubLinks";

export default function ProjectModule(props: { data?: iData }) {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0, delay: 0 }); //threshold:0.2,
  let isAlreadyAnimated = false; //not a state, we dont want to trigger a render

  const testVariant = {
    visible: { x: "0", opacity: 1, backgroundColor: "white" },
  };

  useEffect(() => {
    //if intersection-observer determines that inView is true or isAlreadyAnimated state is true, then set it to variant/visible, then set isAlreadyAnimated to true after 500ms. This allows for the animation to happen only once during the first render.
    if (inView || isAlreadyAnimated) {
      control.start("visible");
      setTimeout(() => {
        isAlreadyAnimated = true;
      }, 2000);
    }
  }, [control, inView]);

  return (
    <AnimatePresence>
      {props.data && (
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0, backgroundColor: "black" }}
          variants={testVariant}
          animate={control}
          transition={{ type: "spring", stiffness: 60, duration: 500 }}
          style={
            {
              // background: `linear-gradient(190deg, ${generateRandomColor()},${generateRandomColor()})`,
            }
          }
          className="flex flex-col justify-between items-center rounded-2xl text-black min-h-screen first:mt-0 p-5 my-10 select-none"
        >
          <div className="font-extrabold text text-[8vw] sm:text-[2rem]">
            {props.data?.name}
          </div>
          <div className="flex flex-col sm:mx-5 p-2 gap-20 sm:bg-gray-500/25">
            <div className="flex sm:flex-row flex-col justify-center items-center  ">
              {props.data?.video.href && (
                <img
                  src={props.data.video.href}
                  width={300}
                  height={"60vh"}
                  className="rounded-lg top-40 sm:top-auto sm:relative z-10 duration-300"
                />
              )}
              <div className="flex flex-col gap-5 -mt-[5rem] sm:-ml-[10rem] z-20 text-[3vw] sm:text-[1rem] w-[100%] sm:w-[50%] p-5 bg-slate-500/95 duration-300 text-white shadow-lg">
                <span>{props.data?.details}</span>
                <GitHubLinks href={props.data?.href} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Devicons icons={props.data?.devicons} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
