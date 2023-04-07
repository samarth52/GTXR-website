import styles from "./Links.module.css";

export default function Links() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/logo.png" alt="GTXR Logo" />
      </div>
      <div className={styles.links}>
        <div className={styles.column}>
          <a href="/">
            <div className={styles.item}>HOME</div>
          </a>
          <a href="https://github.com/GeorgiaTech-XR" target="_blank" rel="noopener noreferrer">
            <div className={styles.item}>PROJECTS</div>
          </a>
          <a href="/join">
            <div className={styles.item}>JOIN</div>
          </a>
        </div>
        <div className={`${styles.column} ${styles.logoLinks}`}>
          <a href="https://www.instagram.com/georgiatechxr/" target="_blank" rel="noopener noreferrer">
            <img className={`${styles.image} ${styles.instagram}`} src="instagram.png" alt="Instagram Logo" />
          </a>
          <a href="mailto:contact@gtxr.club">
            <img className={`${styles.image} ${styles.email}`} src="email.png" alt="Email Logo" />
          </a>
          <a
            href="https://join.slack.com/t/gtxrgroup/shared_invite/zt-1bfj2rjuc-IIdx2Ck6b6h8U7~OCy9Zrw"
            target="_blank"
            rel="noopener noreferrer">
            <img className={`${styles.image} ${styles.slack}`} src="slack.png" alt="Slack Logo" />
          </a>
        </div>
      </div>
      <div />
    </div>
  );
}
