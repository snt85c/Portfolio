import { useEffect, useState, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";

export const Particles = (page) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  console.log(page)
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
