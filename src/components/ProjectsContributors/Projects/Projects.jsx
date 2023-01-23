import styles from "./Projects.module.css";

const projects = [
  {
    title: "Augmented Reality Building Tour",
    description: "One of the popular applications of Augmented Reality is to create tours for buildings and visitors' sites so that the people viewing them can know the back story behind them. We plan on doing the same with Georgia Tech's famous Kendeda building. We want to share the story behind every small innovation which has made the building one of the most sustainable in the world. We plan on creating an application that would track the existing information boards in the building using a mobile phone and share with the users some more information either in form of text, graphics, or animations.",
    image: "ar-building.jpeg",
  },
  {
    title: "Virtual Reality Aerospace Lab",
    description: "Education is undoubtedly the biggest existing use case of Virtual Reality and being at a university like Georgia Tech gives us great freedom to leverage the technology. We plan on creating simulations and basic equipment for, as of now, aerospace engineers to allow them to get the feel of using the expensive materials they might otherwise not get to use at an early stage. This project aims to reduce the equipment and training costs for labs by training the rookie engineers in a virtual space before they get their hands on expansive and dangerous equipment.",
    image: "vr-lab.jpeg",
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <svg className={`${styles.ellipse} ${styles.ellipse1}`}>
          <circle cx="50%" cy="50%" r="17.3vmax" fill="#FF005CCC" />
        </svg>
        <svg className={`${styles.ellipse} ${styles.ellipse2}`}>
          <circle cx="50%" cy="50%" r="17.3vmax" fill="#250063" />
        </svg>
        <div className={styles.header}>PROJECTS</div>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <div className={styles.projectContainer} key={`Project${index}`}>
              <div className={styles.projectTitle}>{project.title}</div>
              <div className={styles.project}>
                <img className={styles.projectImage} src={project.image} alt={project.title} />
                <div className={styles.projectDescription}>{project.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
