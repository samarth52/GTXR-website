import styles from "./WhatWeDo.module.css";
import InfoBox from "./InfoBox/InfoBox";

const info = [
  {
    titleWhite: "Experienced",
    titleColor: "Speakers",
    description:
      "Interact with Experienced Professionals from all cross the industry who regularly share their thoughts and expertise with the members of our community at exclusive speaker events.",
    image: "/hero2.png",
  },
  {
    titleWhite: "Experienced",
    titleColor: "Speakers",
    description:
      "Interact with Experienced Professionals from all cross the industry who regularly share their thoughts and expertise with the members of our community at exclusive speaker events.",
    image: "/hero2.png",
  },
  {
    titleWhite: "Experienced",
    titleColor: "Speakers",
    description:
      "Interact with Experienced Professionals from all cross the industry who regularly share their thoughts and expertise with the members of our community at exclusive speaker events.",
    image: "/hero2.png",
  },
];

export default function WhatWeDo() {
  return (
    <div className={styles.container}>
      <div className={styles.line} style={{ left: "20%" }} />
      <div className={styles.line} style={{ left: "50%" }} />
      <div className={styles.line} style={{ left: "80%" }} />
      <div className={styles.header}>
        WHAT <div style={{ color: "#FF005C" }}>WE</div> DO
      </div>
      {info.map((item, index) => (
        <InfoBox key={index} number={`${index + 1 < 10 ? "0" : ""}${index + 1}`} {...item} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
}
