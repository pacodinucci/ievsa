"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { montserrat } from "@/lib/fonts";

const TextReveal = () => {
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
    <div className="bg-[#cfd1c3]">
      <div style={{ height: "40vh" }}></div>
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
    </div>
  );
};

export default TextReveal;
