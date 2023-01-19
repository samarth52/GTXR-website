import styles from "./Navbar.module.css";
import Router from "next/router";

export default function Navbar({ teamClick }) {
  teamClick = teamClick || (() => Router.push("/#team"));
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src="/logo.png" alt="GTXR Logo" />
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem} onClick={() => Router.push("/projects")}>
          PROJECTS
        </div>
        <div className={styles.menuItem} onClick={teamClick}>
          TEAM
        </div>
        <div className={styles.menuItem} onClick={() => Router.push("/join")}>
          JOIN
        </div>
      </div>
      <div />
    </div>
  );
}
