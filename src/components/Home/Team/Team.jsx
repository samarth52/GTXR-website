import styles from "./Team.module.css";
import ExecBox from "./ExecBox/ExecBox";

const execs = [
  {
    name: "PARTH ARORA",
    image: "/Parth.png",
    link: "https://www.linkedin.com",
  },
  {
    name: "PARTH ARORA",
    image: "/Parth.png",
    link: "https://www.linkedin.com",
  },
  {
    name: "PARTH ARORA",
    image: "/Parth.png",
    link: "https://www.linkedin.com",
  },
  {
    name: "PARTH ARORA",
    image: "/Parth.png",
    link: "https://www.linkedin.com",
  },
  {
    name: "PARTH ARORA",
    image: "/Parth.png",
    link: "https://www.linkedin.com",
  },
  {
    name: "PARTH ARORA",
    image: "/Parth.png",
    link: "https://www.linkedin.com",
  },
  {
    name: "PARTH ARORA",
    image: "/Parth.png",
    link: "https://www.linkedin.com",
  },
  {
    name: "PARTH ARORA",
    image: "/Parth.png",
    link: "https://www.linkedin.com",
  },
];

export default function Team({ teamRef }) {
  return (
    <div className={styles.container} id="team" ref={teamRef}>
      <div className={styles.header}>
        THE <span style={{ color: "#FF005C" }}>TEAM</span>
      </div>
      <div className={styles.grid}>
        {execs.map((exec, index) => (
          <ExecBox key={`Exec${index}`} {...exec} />
        ))}
      </div>
    </div>
  );
}
