import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Join.module.css";

// const members = new Array(3).fill(0);

export default function Home() {
  return (
    <div style={{ backgroundColor: "#151515", minWidth: "100vw" }}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>JOIN US</div>
        <div className={styles.content}>
          Our vision is to make GeorgiaTech a nationwide leader in the XR space. Georgia Tech is already heavily invested in XR; we&apos;ve
          produced several founders of the biggest XR startups (who we have had at speaker events!), have the inventors of the Google Glass
          and other talented professors pioneering research in the field, and we have a diverse talent pool (you guys) who are ready to make
          their own contributions. We want to expand this community and help everyone even remotely interested in the field to get involved.
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>WHAT'S NEXT</div>
        <div className={styles.nextContents}>
          <div className={styles.content}>
            To start, choose what type of member you wanna be based on your commitment level (see member hierarchy below). We have a
            flexible member structure that allows you to commit as much as you want whenever you want.
          </div>
          <div className={styles.content}>
            If you plan on being a general member, just keep an eye on this slack and look for events and conversations that happen. We drop
            a plethora of opportunities in the slack whenever they pop up (internships, hackathons, networking events, etc.), so stay tuned
            in cause you never know!
          </div>
          <div className={styles.content}>
            If you plan on being an associate member, you must choose a track to develop your XR skills. If you don&apos;t have any or all
            skills to pursue a track, don&apos;t worry, our project leads will pair you with mentors and provide you with ample
            tutorials/guidance.
          </div>
          <div className={styles.content}>
            Finally, if you want to be an Executive member, you must apply using this{" "}
            <a href="https://forms.gle/DuYiHbGkRFnwRxpS6" className={styles.link} target="_blank" rel="noopener noreferrer">
              form
            </a>{" "}
            which is checked during the 3rd last week of a semester. Executive members are selected based on their commitment/contributions
            to the club, so attend events and put your best foot forward on project teams!
          </div>
        </div>
      </div>
      {/*
      <div className={styles.container}>
        <div className={styles.header}>MEMBER HIERARCHY</div>
        <div className={styles.members}>
          {members.map((member, index) => (
            <div className={styles.member} key={index}></div>
          ))}
        </div>
      </div>
      */}
      <Footer />
    </div>
  );
}
