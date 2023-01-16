import Navbar from "../Navbar/Navbar";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Hero />
    </div>
  );
}
