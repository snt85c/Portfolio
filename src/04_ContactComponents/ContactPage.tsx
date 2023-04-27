import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { iData } from "../03_ProjectModules/03.1_ProjectModuleDataComponents/ProjectModuleDataPackage";
import Devicons from "../00_SharedComponents/Devicons";
import GitHubLinks from "../00_SharedComponents/GitHubButtonsComponents/GitHubLinks";
import { VantaJsRingsBackgroundEffect } from "../00_SharedComponents/VantaJs";
import SocialButtons from "../00_SharedComponents/SocialButtons";

export default function ContactPage(props: { data: iData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      layout
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={isInView ? { x: "0", opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 60, duration: 300 }}
      className="flex flex-col justify-center items-center rounded-2xl text-white min-h-screen first:mt-0 p-5 text-[2rem] select-none"
    >

      <div className="flex  bg-slate-400 m-5 md:w-1/2 p-5 rounded-xl">
        <div className="flex flex-col">
          <div className="flex flex-row ">
            <div>
              <span className="text-black text-[8vw] sm:text-[4vw] font-semibold">
                Say Hi!
              </span>
              <div className=" text-[1rem] sm:text-[1.5vw] md:mt-5 p-2 text-gray-800">
                Currently open for new opportunities or people to share ideas
                with! For any other information about me or my work, feel free
                to reach out!
              </div>
            </div>
            <SocialButtons />{" "}
          </div>
          <div className="flex flex-col text-gray-800 justify-center items-center  text-[1rem] sm:text-[1.5vw] font-normal p-2 mt-5">
            <span>contact me at:</span>
            <a href="mailto:santi.cacciola@hotmail.it">
              <div className="underline  font-extrabold text-black">
                santi.cacciola.s@gmail.com
              </div>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center w-full mt-5 gap-2">
            <span className=" text-gray-800 text-[0.6rem] sm:text-[1vw] -mb-1 select-none">
              how was this page made?
            </span>
            <GitHubLinks data={props.data} />
            <Devicons icons={props.data.devicons} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
