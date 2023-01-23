import "./Footer.css";
import Links from "./Links/Links";

export default function Footer() {
  return (
    <div style={{ filter: "blur(0px)" }}>
      <Links />
      <div className="madeBy">MADE BY THE GTXR TEAM</div>
      <div className="bottom" />
    </div>
  );
}
