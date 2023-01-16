import styles from "./ExecBox.module.css";

export default function ExecBox({ name, image, link }) {
  console.log(image);
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />
      <div className={styles.background} />
      <div className={styles.name}>{name}</div>
      <div className={styles.triangle} />
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className={styles.linkedin} src="/linkedin.png" alt="LinkedIn Logo" />
      </a>
    </div>
  );
}
