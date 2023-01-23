import styles from "./WhatWeDo.module.css";
import InfoBox from "./InfoBox/InfoBox";

const info = [
  {
    titleWhite: "Experienced",
    titleColor: "Speakers",
    description:
      "Interact with Experienced Professionals from all cross the industry who regularly share their thoughts and expertise with the members of our community at exclusive speaker events.",
    image: "/WhatWeDo1.png",
  },
  {
    titleWhite: "Practical",
    titleColor: "Projects",
    description:
      "Work on our signature projects in Virtual, Augmented and Mixed Realities to learn and increase your knowledge in the field and contribute in products that might add value to its users.",
    image: "/WhatWeDo2.jpg",
  },
  {
    titleWhite: "Engaging",
    titleColor: "Community",
    description:
      "Learn with and from your peers about these vast technologies and get personalized mentorship, especially if you are just starting off and want to explore these technologies.",
    image: "/WhatWeDo3.jpg",
  },
];

export default function WhatWeDo() {
  return (
    <div className={styles.container}>
      <div className={styles.line} style={{ left: "20%" }} />
      <div className={styles.line} style={{ left: "50%" }} />
      <div className={styles.line} style={{ left: "80%" }} />
      <div className={styles.header}>
        WHAT <span style={{ color: "#FF005C" }}>WE</span> DO
      </div>
      {info.map((item, index) => (
        <InfoBox key={index} number={`${index + 1 < 10 ? "0" : ""}${index + 1}`} {...item} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
}
