/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const changeActiveClass = ({ isActive }) => (isActive ? styles.active : '')

const Sidebar = (props) => {
  return (
    <nav className={styles.sidebar}>
      <div>
        <NavLink to={'/home'} className={changeActiveClass}
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
    {props.sidebar.friends.map((friend) => {
    return <div key={friend.id} className={styles.friends}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnsq7RuoVd3kidDzeFLnPFABR_z8Qu9hMDg&usqp=CAU" alt="img" />
      {friend.name}
      </div>})}
    </nav>
    );
};

export default Sidebar;
