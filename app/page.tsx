import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import PictureComponent from "@/components/PictureComponent";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <PictureComponent />
      <div className="min-h-screen"></div>
    </main>
  );
}
