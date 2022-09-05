import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { generateRandomColor } from "../Services";
import { iData } from "../ProjectModuleDataComponents/ProjectModuleDataPackage";
import Devicons from "./Devicons";
import GitHubLinks from "./GitHubButtonsComponents/GitHubLinks";

export default function ContactPage(props: { data: iData }) {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0, delay: 0 }); //threshold:0.2,
  // const [isAlreadyAnimated, setIsAlreadyAnimated] = useState(false);
  let isAlreadyAnimated = false;

  const testVariant = {
    visible: { x: "0", opacity: 1 },
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
    <div ref={ref}>
      <AnimatePresence>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          variants={testVariant}
          animate={control}
          transition={{ type: "spring", stiffness: 60, duration: 300 }}
          style={{
            background: `linear-gradient(190deg, ${generateRandomColor()},${generateRandomColor()})`,
          }}
          className="flex flex-col justify-between items-center rounded-2xl text-white min-h-screen first:mt-0 p-5 text-[2rem] my-10"
        >
          <div>Contact</div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <span className=" text-white text-[0.7rem] -mb-1 select-none">
              how was this page made?
            </span>
            <GitHubLinks href={props.data.href} />
            <Devicons icons={props.data.devicons} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
