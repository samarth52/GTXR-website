import styles from "./Projects.module.css";

const projects = [{}, {}, {}, {}, {}, {}];

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <svg className={`${styles.ellipse} ${styles.ellipse1}`}>
          <circle cx="50%" cy="50%" r="17.3vmax" fill="#FF005CCC" />
        </svg>
        <svg className={`${styles.ellipse} ${styles.ellipse2}`}>
          <circle cx="50%" cy="50%" r="17.3vmax" fill="#250043" />
        </svg>
        <div className={styles.header}>PROJECTS</div>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <div className={styles.project} key={index}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
