import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import ScrollDown from "../00_SharedComponents/ScrollDown";
import SocialButtons from "../00_SharedComponents/SocialButtons";
import { VantaJsRingsBackgroundEffect } from "../00_SharedComponents/VantaJs";

export default function PresentationModule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    function telegramAlert() {
      fetch(
        `https://api.telegram.org/bot5531898247:AAG8rxOFIKmlwS6PYBVTuXdTGMqIaSpl5eE/sendMessage?chat_id=231233238&text=new visit to Portfolio: ${new Date()} `
      );
    }
    if (process.env.NODE_ENV !== "development") telegramAlert();
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: "0", opacity: 1 } : {}}
        transition={{ type: "tween", duration: 0.8 }}
        className="flex flex-col  justify-between border border-gray-500 
           min-h-[100vh] pt-5 pb-2 mx-5 text-white text-[2rem] select-none"
      >
        <VantaJsRingsBackgroundEffect />
        <div className="flex flex-row ">
          <section className="flex flex-col mt-5 ml-5 w-full ">
            <p className="text-[8vw] sm:text-[3vw] leading-none ">Hi, i'm</p>
            <p className="text-[20vw] sm:text-[10vw]  font-extrabold leading-none  ">
              Santi!
            </p>
            <p className="leading-none -mt-[1.5vh] text-[5vw] sm:text-[2vw] text-amber-500 ">
              Front-end Developer
            </p>
          </section>
          <SocialButtons />
        </div>
        <div className="sm:absolute bottom-5 right-10">
          <ScrollDown />
        </div>
      </motion.div>
    </>
  );
}
