import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import skate from "../ProjectModuleDataComponents/1.webp";
import "../App.css";
import FlairText from "./flairText";

export default function AboutMe() {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0, delay: 0 });
  // const [isAlreadyVisited, setIsAlreadyVisited] = useState(false);
  let isAlreadyVisited = false;
//   const isAlreadyVisited = useRef(false);

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
        isAlreadyVisited= true;
      }, 2000);
    }
    return abortController.abort();
  }, [control, inView]);

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
        className="flex flex-col justify-end min-h-[98vh] pt-10 pb-2 bg-black text-white text-[2rem] select-none my-5 "
        //
      >
     

         
        <FlairText />
      </motion.div>
    </>
  );
}
