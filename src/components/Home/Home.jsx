// import { useRef } from "react";
import Layout from "../blob/Layout/Layout";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero/Hero";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
// import Team from "./Team/Team";
import Footer from "../Footer/Footer";

export default function Home() {
  // const teamRef = useRef(null);
  // const teamClick = () => {
  //   teamRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout />
      {/* <Navbar teamClick={teamClick} isHome={true} /> */}
      <Navbar isHome={true} />
      <Hero />
      <WhatWeDo />
      {/* <Team teamRef={teamRef} /> */}
      <Footer />
    </div>
  );
}
