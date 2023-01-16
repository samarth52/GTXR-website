import styles from "./Links.module.css";

export default function Links() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/logo.png" alt="GTXR Logo" />
      </div>
      <div className={styles.links}>
        <div className={styles.column}>
          <div className={styles.item}>PROJECTS</div>
          <div className={styles.item}>HOME</div>
          <div className={styles.item}>JOIN</div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>PROJECTS</div>
          <div className={styles.item}>HOME</div>
          <div className={styles.item}>JOIN</div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>PROJECTS</div>
          <div className={styles.item}>HOME</div>
          <div className={styles.item}>JOIN</div>
        </div>
      </div>
      <div />
    </div>
  );
}
