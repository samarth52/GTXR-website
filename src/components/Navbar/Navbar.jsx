import styles from "./Navbar.module.css";

export default function Navbar({ teamClick }) {
  // teamClick = teamClick || (() => Router.push("/#team"));
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src="/logo.png" alt="GTXR Logo" />
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem}>PROJECTS</div>
        <div className={styles.menuItem}>TEAM</div>
        <div className={styles.menuItem}>JOIN</div>
      </div>
      <div />
    </div>
  );
}
