import Image from "next/image";

type ProjectSnapProps = {
  title?: string;
  text: string;
  images: string[]; // debe contener exactamente 2 rutas
};

const ProjectSnap = ({ title, text, images }: ProjectSnapProps) => {
  return (
    <div className="w-full flex justify-between px-24 gap-8">
      <p className="w-[40%] MyriadValoresMobile">{text}</p>
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
