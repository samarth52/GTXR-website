import Navbar from "../Navbar/Navbar";
import Hero from "./Hero/Hero";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Team from "./Team/Team";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Team />
      <Footer />
    </div>
  );
}
