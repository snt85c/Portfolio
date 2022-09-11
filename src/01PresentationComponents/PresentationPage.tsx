import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import ScrollDown from "../03ProjectModules/ScrollDown";
import SocialButtons from "./SocialButtons";
import { Particles } from "./Particles";
// import { ParticlesTest } from "./Particles";

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

  useEffect(() => {
    function telegramAlert() {
      fetch(
        `https://api.telegram.org/bot5531898247:AAG8rxOFIKmlwS6PYBVTuXdTGMqIaSpl5eE/sendMessage?chat_id=231233238&text=new visit to Portfolio: ${new Date()} `
      );
    }
    telegramAlert();
  }, []);

  return (
    <>
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
           min-h-[100vh] pt-5 pb-2  text-white text-[2rem] select-none"
        //
      >
        <Particles/>
        <div className="flex flex-row ">
          <div className="flex flex-col mt-5 ml-5 w-full ">
            <div className="text-[8vw] sm:text-[3rem] -mb-[1.5vh] leading-none ">
              Hi, i'm
            </div>
            <div className="text-[20vw] sm:text-[10rem]  font-extrabold leading-none  ">
              Santi!
            </div>
            <div className="leading-none -mt-[1.5vh] text-[5vw] sm:text-[2rem] text-amber-500 ">
              Front-end Developer
            </div>
          </div>
          <SocialButtons/>
        </div>
        <ScrollDown />
      </motion.div>
    </>
  );
}
