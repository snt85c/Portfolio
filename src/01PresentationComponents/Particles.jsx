import { useEffect, useState, useRef } from "react";
import DOTS from "vanta/dist/vanta.dots.min";
import RINGS from "vanta/dist/vanta.rings.min";
import NET from "vanta/dist/vanta.net.min";


export const Particles = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {

        setVantaEffect(
          RINGS({
            el: myRef.current,
            mouseControls: false,
            touchControls: false,
            gyroControls: true,
            color: 0xf5e716,
            backgroundColor: 0x0,
            // minHeight: 200.0,
            // minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
          })
          );
      
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div ref={myRef} className=" absolute -z-10 min-w-full min-h-[97%]"></div>
    </>
  );
};
