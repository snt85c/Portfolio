import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { iData } from "./ProjectModuleDataComponents/ProjectModuleDataPackage";
import Devicons from "./03ProjectModules/Devicons";
import GitHubLinks from "./03ProjectModules/GitHubButtonsComponents/GitHubLinks";
import SocialButtons from "./01PresentationComponents/SocialButtons";
import { Particles } from "./01PresentationComponents/Particles";

export default function ContactPage(props: { data: iData }) {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0, delay: 0 }); //threshold:0.2,
  const isAlreadyVisited = useRef(false);

  const testVariant = {
    visible: { x: "0", opacity: 1 },
  };

  useEffect(() => {
    //if intersection-observer determines that inView is true or isAlreadyAnimated state is true, then set it to variant/visible, then set isAlreadyAnimated to true after 2000ms. This allows for the animation to happen only once during the first render.
    if (inView || isAlreadyVisited) {
      control.start("visible");
      setTimeout(() => {
        isAlreadyVisited.current = true;
      }, 2000);
    }
  }, [control, inView]);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        variants={testVariant}
        animate={control}
        transition={{ type: "spring", stiffness: 60, duration: 300 }}
        className="flex flex-col justify-between items-center rounded-2xl text-white min-h-screen first:mt-0 p-5 text-[2rem] my-10 select-none"
      >
        <Particles />

        <div className="flex  bg-slate-400/75 m-5 mt-20 md:w-1/2 p-5 ">
          <div className="flex flex-col">
            <div className="flex flex-row font-bold">
              <div>
                <span className="text-black font-semibold">Say Hi!</span>
                <div className="text-[1rem] md:mt-5 p-2 font-semibold ">
                  Currently open for new opportunities or people to share ideas
                  with! For any other information about me or my work, feel free
                  to reach out!
                </div>
                <div className="text-[1rem] font-normal mt-5">
                  <span>contact me at:</span>
                  <a href="mailto:santi.cacciola@hotmail.it">
                    <div className="underline  font-extrabold">santi.cacciola@hotmail.it</div>
                  </a>
                </div>
              </div>
              <SocialButtons />
            </div>
            <div className="flex flex-col justify-center items-center w-full mt-5 gap-2">
              <span className=" text-white text-[0.7rem] -mb-1 select-none">
                how was this page made?
              </span>
              <GitHubLinks href={props.data.href} />
              <Devicons icons={props.data.devicons} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
