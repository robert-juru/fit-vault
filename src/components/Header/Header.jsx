import logoImage from "/fit-vault-logo.png";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={styles.header}>
              <Link to="/">
                <img
                  className={styles.logoImage}
                  src={logoImage}
                  alt="fit vault logo"
                />
              </Link>
            <div className={styles.navLinks}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Programs</Link>
              </li>
              <li>
                <Link to="/">Exercise Guide</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
