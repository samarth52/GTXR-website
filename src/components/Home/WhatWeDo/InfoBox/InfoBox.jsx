import { useContext } from "react";
import WindowSizeContext from "../../../../contexts/WindowSizeContext";
import styles from "./InfoBox.module.css";

export default function InfoBox({ number, titleWhite, titleColor, description, image, reverse = false }) {
  const { mobile } = useContext(WindowSizeContext);

  const items = [
    <div key={`Number${number}`} className={styles.number}>
      {number}
    </div>,
    <div key={`Line${number}`} className={styles.line} />,
    <div key={`Info${number}`} className={styles.info}>
      <div key={`Title${number}`} className={styles.title}>
        {titleWhite} <span style={{ color: "#FF005C" }}>{titleColor}</span>
      </div>
      <div key={`Description${number}`} className={styles.description}>
        {description}
      </div>
    </div>,
  ];

  const imageContainer = (
    <div key={`ImageContainer${number}`} className={styles.imageContainer}>
      <img key={`Image${number}`} className={styles.image} src={image} alt={`WhatWeDo ${number}`} />,
    </div>
  );

  if (!mobile) {
    items.push(imageContainer);
  }

  if (reverse) {
    items.reverse();
  }

  if (!mobile) {
    return <div className={styles.container}>{items}</div>;
  } else {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.container}>{items}</div>
        {imageContainer}
      </div>
    );
  }
}
