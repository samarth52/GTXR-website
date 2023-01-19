import Navbar from "../Navbar/Navbar";
import Projects from "./Projects/Projects";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}
