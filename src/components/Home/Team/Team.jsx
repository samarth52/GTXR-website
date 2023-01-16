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

export default function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        THE <div style={{ color: "#FF005C" }}>TEAM</div>
      </div>
      <div className={styles.grid}>
        {execs.map((exec, index) => (
          <ExecBox key={`Exec${index}`} {...exec} />
        ))}
      </div>
    </div>
  );
}
