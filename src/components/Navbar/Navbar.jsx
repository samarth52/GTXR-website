import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const style = {
  background: "rgba(0, 0, 0, 0.5)",
};

export default function Navbar({ teamClick, isHome }) {
  const navigate = useNavigate();
  teamClick = teamClick || (() => navigate("/#team"));

  return (
    <div className={styles.container} style={isHome ? style : {}}>
      <div>
        <img className={styles.logo} src="/logo.png" alt="GTXR Logo" />
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem} onClick={() => navigate("/projects")}>
          PROJECTS
        </div>
        <div className={styles.menuItem} onClick={teamClick}>
          TEAM
        </div>
        <div className={styles.menuItem} onClick={() => navigate("/join")}>
          JOIN
        </div>
      </div>
      <div />
    </div>
  );
}
