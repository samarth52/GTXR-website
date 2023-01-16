import styles from "./InfoBox.module.css";

export default function InfoBox({ number, titleWhite, titleColor, description, image, reverse = false }) {
  const items = [
    <div key={`Number${number}`} className={styles.number} style={{ color: reverse ? "#6F03C3" : "#FF005C" }}>
      {number}
    </div>,
    <div key={`Line${number}`} className={styles.line} />,
    <div key={`Info${number}`} className={styles.info}>
      <div key={`Title${number}`} className={styles.title}>
        {titleWhite}
        <div style={{ color: reverse ? "#6F03C3" : "#FF005C" }}>{titleColor}</div>
      </div>
      <div className={styles.description}>{description}</div>
    </div>,
    <img key={`Image${number}`} className={styles.image} src={image} alt={`WhatWeDo Image ${number}`} />,
  ];

  if (reverse) {
    items.reverse();
  }

  return <div className={styles.container}>{items}</div>;
}
