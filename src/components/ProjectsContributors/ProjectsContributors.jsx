import Navbar from "../Navbar/Navbar";
import Projects from "./Projects/Projects";
import Contributors from "./Contributors/Contributors";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Projects />
      <Contributors />
      <Footer />
    </div>
  );
}
