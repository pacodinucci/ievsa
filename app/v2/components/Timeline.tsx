import Image from "next/image";
import React from "react";

const processSteps = [
  {
    id: 1,
    title: "Permit",
    description:
      "We'll prepare and submit a formal application to your local planning department.",
    image: "/image1.png", // Si no tiene imagen
    time: "One Week Later",
  },
  {
    id: 2,
    title: "Site prep",
    description:
      "We'll get your yard ready by installing the foundation and utility connections.",
    image: "/image2.png",
    time: "Approx. Two Weeks Later",
  },
  {
    id: 3,
    title: "Transport",
    description:
      "Your backyard begins its journey from our factory to your home.",
    image: "/image3.png",
    time: "Two Weeks Later",
  },
  {
    id: 4,
    title: "Crane in",
    description:
      "In just a few hours, we crane in the backyard onto its foundation.",
    image: "/image4.png",
    time: "After Crane-in Day",
  },
  {
    id: 5,
    title: "Wrap up",
    description:
      "We connect the backyard to the grid, test everything, and ensure it's good to go.",
    image: "/image5.png",
    time: "One Day Later",
  },
];

const Timeline = () => {
  return (
    <div className="relative flex flex-col items-center space-y-12 p-6 md:p-12 my-24">
      {/* Línea central */}
      <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300"></div>
      {processSteps.map((step, index) => (
        <div
          key={step.id}
          className={`flex flex-col md:flex-row w-full max-w-4xl ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-5 w-5 mt-10 bg-[#F2F2F2] rounded-full z-10 flex items-center justify-center">
            <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
          </div>
          {/* Texto */}
          <div
            className={`flex-1 p-4 text-center md:text-left ${
              index % 2 === 0 ? "md:pr-8" : "md:pl-8"
            }`}
          >
            <span className="text-sm font-bold uppercase text-gray-500">
              {step.time}
            </span>
            <h3 className="text-lg font-bold text-gray-800 mt-2">
              {step.title}
            </h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>

          {/* Imagen */}
          <div className="flex-1 p-4 ml-16">
            <Image src={step.image} alt={step.title} width={300} height={0} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
