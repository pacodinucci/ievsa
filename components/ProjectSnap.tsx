import Image from "next/image";

type ProjectSnapProps = {
  title?: string;
  text: string;
  images: string[]; // debe contener exactamente 2 rutas
  index: number;
};

const ProjectSnap = ({ title, text, images, index }: ProjectSnapProps) => {
  return (
    <div className="w-full flex justify-between px-24 gap-8">
      <p
        className={`${index === 0 ? "w-[80%]" : "w-[40%]"} MyriadValoresMobile`}
      >
        {text}
      </p>
      {/* {index !== 0 && ( */}
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
      {/* )} */}
    </div>
  );
};

export default ProjectSnap;
