import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "200vw",
          scrub: 2,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  // Generar las rutas de las imágenes del 1 al 10
  const images = Array.from(
    { length: 10 },
    (_, index) => `/image${index + 1}.png`
  );

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-[100vh] w-[300vw] flex flex-row relative bg-neutral-300 px-8 py-18" // (10 imágenes * 30vw)
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="h-[100vh] w-[30vw] flex justify-center items-center bg-neutral-300"
            >
              <Image
                src={image}
                alt={`image ${index + 1}`}
                width={500}
                height={300}
                className="object-cover w-full h-full max-h-[70vh] min-w-72 px-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
