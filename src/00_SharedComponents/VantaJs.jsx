import { useEffect, useState, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";

export const VantaJsRingsBackgroundEffect = (page) => {
  let vantaEffect = useRef() 
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
        vantaEffect = 
          RINGS({
            el: myRef.current,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            color: 0xf5e716,
            backgroundColor: 0x0,
            scale: 1.0,
            scaleMobile: 1.0,
          })
        ;
      }
    return () => {
      if (vantaEffect.current) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div ref={myRef} className=" absolute top-0 left-0 -z-10 w-[99vw] h-[99vh]"></div>
    </>
  );
};
