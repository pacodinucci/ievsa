// import ComponentA from "@/components/ComponentA";
import Landing from "@/components/Landing";
import LandingContent from "@/components/LandingContent";
import Navbar from "@/components/Navbar";
import ParallaxPicture from "@/components/ParallaxPicture";
import PictureComponent from "@/components/PictureComponent";
import { images, text } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <LandingContent />
      <ParallaxPicture />
      <PictureComponent text={text} images={images} header="Nuestro trabajo" />
      <div className="min-h-screen"></div>
    </main>
  );
}
