import styles from "./Contributors.module.css";

const contributors = new Array(15).fill(0);

export default function Contributors() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>CONTRIBUTORS</div>
      <div className={styles.contributors}>
        {contributors.map((contributor, index) => (
          <div className={styles.contributor} key={index}></div>
        ))}
      </div>
    </div>
  );
}