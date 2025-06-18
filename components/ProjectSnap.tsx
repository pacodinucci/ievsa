import { ibm } from "@/lib/fonts";
import Image from "next/image";

type ProjectSnapProps = {
  title?: string;
  text: string;
  description: string | undefined;
  images: string[];
  index: number;
};

const ProjectSnap = ({
  title,
  text,
  description,
  images,
  index,
}: ProjectSnapProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:px-24 gap-8">
      <div className="flex flex-col gap-6">
        <p
          className={`${ibm.className} text-lg font-semibold ${
            index === 0 ? "w-[80%]" : "w-[80%] md:w-[20vw]"
          }`}
        >
          {text}
        </p>
        <p
          className={`${ibm.className} text-base italic ${
            index === 0 ? "w-[80%]" : "w-[80%] md:w-[20vw]"
          }`}
        >
          {description}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {images.map((image, index) => (
          <Image
            key={index}
            alt={`Ievsa projects ${index}`}
            src={image}
            width={500}
            height={0}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSnap;
