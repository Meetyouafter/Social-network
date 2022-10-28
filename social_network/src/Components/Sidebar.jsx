/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
      <nav className={styles.sidebar}>
        <div>
          <a className={styles.item} href="#">Profile</a>
        </div>
        <div>
          <a className={styles.item} href="#">Message</a>
        </div>
        <div>
          <a className={styles.item} href="#">News</a>
        </div>
        <div>
          <a className={styles.item} href="#">Music</a>
        </div>
        <div>
          <a className={styles.item} href="#">Setting</a>
        </div>
      </nav>  
      );
};

export default Sidebar;
