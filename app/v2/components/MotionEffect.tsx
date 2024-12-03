import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useScroll, useTransform, motion } from "framer-motion";

import { montserrat } from "@/lib/fonts";
import HorizontalScroll from "@/components/HorizontalScroll";

const MotionEffect = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="relative ">
      <Section1 scrollYProgress={scrollYProgress} />
      {/* <PaintEffect /> */}
      <Section2 scrollYProgress={scrollYProgress} />
    </div>
  );
};

const Section1 = ({ scrollYProgress }: any) => {
  const [lettersRef, setlettersRef] = useArrayRef<HTMLSpanElement>();

  function useArrayRef<T>() {
    const lettersRef = useRef<T[]>([]);
    lettersRef.current = [];
    return [
      lettersRef,
      (ref: T | null) => ref && lettersRef.current.push(ref),
    ] as const;
  }

  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const text = "Proyectos para ser vividos.";

  useEffect(() => {
    const reveal = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 1.5,
        start: "top center",
        end: "bottom 80%",
      },
      color: "#192915",
      duration: 5,
      stagger: 3,
    });
    return () => {
      reveal.kill();
    };
  }, []);

  return (
    <motion.div style={{ scale, rotate }} className="sticky top-0 bg-[#cfd1c3]">
      <div style={{ height: "15vh" }}></div>
      <div className="" style={{ paddingLeft: "10%", paddingRight: "30%" }}>
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className={`${montserrat.className}`}
              ref={setlettersRef}
              style={{
                fontSize: "clamp(3rem, 10vw, 15rem)",
                lineHeight: "clamp(3rem, 10vw, 15rem)",
                fontWeight: "800",
                color: "#cfd1c3",
                // filter: "drop-shadow(0 0 0.06rem rgb(33, 33, 33))",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div style={{ height: "30vh" }}></div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }: any) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);
  return (
    <motion.div style={{ scale, rotate }} className="relative h-[100vh]">
      {/* <Image src="/image8.png" alt="img" fill /> */}
      <HorizontalScroll />
    </motion.div>
  );
};

export default MotionEffect;
