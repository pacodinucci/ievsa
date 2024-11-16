// import ComponentA from "@/components/ComponentA";
import Landing from "@/components/Landing";
import LandingContent from "@/components/LandingContent";
import Navbar from "@/components/Navbar";
import ParallaxPicture from "@/components/ParallaxPicture";
// import PictureComponent from "@/components/PictureComponent";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      {/* <PictureComponent
        src="/garden2.jpg"
        header="Nuestro trabajo"
        text="Aca va el texto Aca va el texto Aca va el texto Aca va el texto Aca va el texto Aca va el texto Aca va el texto Aca va el texto Aca va el texto "
      /> */}
      {/* <ComponentA /> */}
      <LandingContent />
      <ParallaxPicture />
      <div className="min-h-screen"></div>
    </main>
  );
}
