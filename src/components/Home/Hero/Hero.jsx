import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";
import herovid from '../../../assets/hero2.mp4'

export default function Hero() {
  const navigate = useNavigate();
  const top = useRef(null);
  const bottom = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Math.ceil(window.innerWidth / 1363) + 2);

    const handleScroll = () => {
      const scroll = window.scrollY;

      top.current.style.transform = `translateX(${scroll * -0.5}px)`;
      bottom.current.style.transform = `translateX(${scroll * 0.5}px)`;
    };
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      setCount(Math.ceil(window.innerWidth / 1363) + 2);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const text1 = "5 PROJECTS \xa0\xa0 100+ MEMBERS \xa0\xa0 10 SPEAKERS \xa0\xa0 ".repeat(count);
  const text2 = "10 SPEAKERS \xa0\xa0 5 PROJECTS \xa0\xa0 100+ MEMBERS \xa0\xa0 ".repeat(count);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div>GEORGIA TECH XR</div>
        <div>GEORGIA TECH&apos;S PORTAL TO EXTENDED REALITY</div>
        <div className={styles.button} onClick={() => navigate("/join")}>
          <img src="/play.png" alt="" />
          JOIN
        </div>
      </div>
      <div className={styles.imageContainer}>
        <svg className={`${styles.ellipse} ${styles.ellipse1}`}>
          <circle cx="50%" cy="50%" r="27.5vmax" fill="#FF005CCC" />
        </svg>
        <svg className={`${styles.ellipse} ${styles.ellipse2}`}>
          <circle cx="50%" cy="50%" r="27.5vmax" fill="#250063" />
        </svg>
        <img className={styles.image1} src="hero1.png" alt="Event 1" />
        <img className={styles.image3} src="hero3.png" alt="Event 3" />
        <img className={styles.image2} src="hero2.gif" alt="Event 3" />
        <img className={styles.image4} src="hero4.png" alt="Event 4" />
        <div className={`${styles.details} ${styles.detailsTop}`} ref={top}>
          {text1}
        </div>
        <div className={`${styles.details} ${styles.detailsBottom}`} ref={bottom}>
          {text2}
        </div>
      </div>
    </div>
  );
}
