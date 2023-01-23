import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const style = {
  background: "rgba(0, 0, 0, 0.5)",
};

export default function Navbar({ teamClick, isHome }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container} style={isHome ? style : {}}>
      <div>
        <img className={styles.logo} src="/logo.png" alt="GTXR Logo" onClick={() => navigate("/")} />
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem} onClick={() => navigate("/projects")}>
          PROJECTS
        </div>
        { isHome ? (
          <div className={styles.menuItem} onClick={teamClick}>
            TEAM
          </div>
        ) : (
          <HashLink className={styles.menuItem} to="/#team">
            TEAM
          </HashLink>
        )}
        <div className={styles.menuItem} onClick={() => navigate("/join")}>
          JOIN
        </div>
      </div>
      <div />
    </div>
  );
}
