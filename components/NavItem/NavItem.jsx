import Link from "next/link";
import styles from "./navItem.module.scss";

const NavItem = ({ text, href, activeTab }) => {
  return (
    <Link href={href}>
      <a
        className={`${styles.navItem} ${activeTab === text ? styles.active : ""}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;
