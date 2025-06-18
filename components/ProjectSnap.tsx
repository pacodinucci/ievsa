import Image from "next/image";

type ProjectSnapProps = {
  title?: string;
  text: string;
  images: string[];
  index: number;
};

const ProjectSnap = ({ title, text, images, index }: ProjectSnapProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:px-24 gap-8">
      <p
        className={`${
          index === 0 ? "w-[80%]" : "w-[80%] md:w-[40%]"
        } MyriadValoresMobile`}
      >
        {text}
      </p>
      <div className="flex">
        {images.map((image, index) => (
          <Image
            key={index}
            alt={`Ievsa projects ${index}`}
            src={image}
            width={300}
            height={0}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSnap;
