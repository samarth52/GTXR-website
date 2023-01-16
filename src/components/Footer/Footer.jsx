import styles from "./Footer.module.css";
import Links from "./Links/Links";

export default function Footer() {
  return (
    <div>
      <Links />
      <div className={styles.madeBy}>MADE BY THE GTXR TEAM</div>
      <div className={styles.bottom} />
    </div>
  );
}
