import { useEffect, useState, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";

export const VantaJsRingsBackgroundEffect = (page) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
        setVantaEffect(
          RINGS({
            el: myRef.current,
            mouseControls: true,
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
      <div ref={myRef} className=" absolute top-0 -z-10 min-w-full min-h-full"></div>
    </>
  );
};
