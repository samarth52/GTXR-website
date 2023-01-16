// import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  // const [text, setText] = useState();

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
        <div className={`${styles.details} ${styles.detailsTop}`}>
          5 PROJECTS &nbsp;&nbsp; 100+ MEMBERS &nbsp;&nbsp; 10 SPEAKERS &nbsp;&nbsp; 5 PROJECTS &nbsp;&nbsp; 100+ MEMBERS &nbsp;&nbsp; 10
          SPEAKERS
        </div>
        <div className={`${styles.details} ${styles.detailsBottom}`}>
          5 PROJECTS &nbsp;&nbsp; 100+ MEMBERS &nbsp;&nbsp; 10 SPEAKERS &nbsp;&nbsp; 5 PROJECTS &nbsp;&nbsp; 100+ MEMBERS &nbsp;&nbsp; 10
          SPEAKERS
        </div>
      </div>
    </div>
  );
}
