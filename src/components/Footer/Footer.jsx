import "./Footer.css";
import Links from "./Links/Links";

export default function Footer() {
  return (
    <div style={{ filter: "blur(0px)" }}>
      <Links />
      <div className="madeBy">
        <div>
          BUILT BY&nbsp;
          <a href="https://www.linkedin.com/in/samarth-chandna/" target="_blank" rel="noopener noreferrer">
            SAMARTH CHANDN<span className="no-spacing">A</span>
          </a>
          &nbsp;&nbsp;AND DESIGNED BY&nbsp;
          <a href="https://www.linkedin.com/in/yatharth-bhargava/" target="_blank" rel="noopener noreferrer">
            YATHARTH BHARGAV<span className="no-spacing">A</span>
          </a>
        </div>
      </div>
      <div className="bottom" />
    </div>
  );
}
