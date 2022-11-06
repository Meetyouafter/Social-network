/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const changeActiveClass = ({ isActive }) => (isActive ? styles.active : '')

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div>
        <NavLink to={'/'} className={changeActiveClass}
            >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to={'/dialogs'} className={changeActiveClass}>
          Message
        </NavLink>
      </div>
      <div>
        <NavLink to={'/news'} className={changeActiveClass}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to={'/music'} className={changeActiveClass}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to={'/setting'} className={changeActiveClass}>
          Setting
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
