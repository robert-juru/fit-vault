import logoImage from "/fit-vault-logo.png";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={styles.header}>
            {/* <h1> */}
              <a href="">
                <img
                  className={styles.logoImage}
                  src={logoImage}
                  alt="fit vault logo"
                />
              </a>
            {/* </h1> */}
            <div className={styles.navLinks}>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Programs</a>
              </li>
              <li>
                <a href="">Exercise Guide</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
