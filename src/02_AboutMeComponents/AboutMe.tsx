import { motion, useInView } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import "../App.css";
import bg from "./bg.png";
import bg2 from "./bg2.png";

import AboutMeCard from "./AboutMeCard";
import ScrollDown from "../00_SharedComponents/ScrollDown";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin:"300px 0px 0px 0px" });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: "0", opacity: 1 } : {}}
        transition={{ type: "tween", duration: 0.8 }}
        className="flex flex-col justify-center items-center min-h-screen pt-5 pb-2 bg-black text-white text-[2rem] select-none"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AboutMeCard />
        <div className="absolute bottom-5 sm:right-10">
          <ScrollDown />
        </div>
      </motion.div>
    </>
  );
}
