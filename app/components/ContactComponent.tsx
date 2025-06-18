import { FaInstagram, FaWhatsapp, FaMailchimp } from "react-icons/fa";

export const ContactComponent = () => {
  return (
    <div className="md:h-[300px] flex flex-col gap-y-4 justify-center items-center ">
      <FaInstagram />
      <FaMailchimp />
      <FaWhatsapp />
    </div>
  );
};
