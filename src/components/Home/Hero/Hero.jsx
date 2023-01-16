import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const top = useRef(null);
  const bottom = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!count) setCount(Math.ceil(window.innerWidth / 1363) + 2);

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

  const text = "5 PROJECTS \xa0\xa0 100+ MEMBERS \xa0\xa0 10 SPEAKERS \xa0\xa0 ".repeat(count);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div>GEORGIA TECH XR</div>
        <div>GEORGIA TECH&apos;S PORTAL TO EXTENDED REALITY</div>
        <div className={styles.button}>
          <img src="/play.png" />
          JOIN
        </div>
      </div>
      <div className={styles.imageContainer}>
        <svg className={`${styles.ellipse} ${styles.ellipse1}`}>
          <circle cx="50%" cy="50%" r="27.5vmax" fill="#FF005CCC" />
        </svg>
        <svg className={`${styles.ellipse} ${styles.ellipse2}`}>
          <circle cx="50%" cy="50%" r="27.5vmax" fill="#250043" />
        </svg>
        <img className={styles.image1} src="hero1.png" alt="Event Picture 1" />
        <img className={styles.image3} src="hero3.png" alt="Event Picture 3" />
        <img className={styles.image2} src="hero2.png" alt="Event Picture 2" />
        <img className={styles.image4} src="hero4.png" alt="Event Picture 4" />
        <div className={`${styles.details} ${styles.detailsTop}`} ref={top}>
          {text}
        </div>
        <div className={`${styles.details} ${styles.detailsBottom}`} ref={bottom}>
          {text}
        </div>
      </div>
    </div>
  );
}
