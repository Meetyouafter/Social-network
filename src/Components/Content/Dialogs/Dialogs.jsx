/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const users = [
  { id: 1, userName: 'Anton' },
  { id: 2, userName: 'Masha' },
  { id: 3, userName: 'Sasha' },
  { id: 4, userName: 'Anya' },
  { id: 5, userName: 'Dima' },
];

const dialogs = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'How are you?' },
  { id: 4, message: 'Bla-bla' },
  { id: 5, message: 'Yo' },
];

const user = users.map((user) => {
  return (
    <div>
      <NavLink to={`${user.id}`} className={styles.dialog}>
        {user.userName}
      </NavLink>
    </div>
  );
});

const message = dialogs.map((item) => (
  <div className={styles.message}>{item.message}</div>
));

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.users}>{user}</div>
      <div className={styles.messages}>{message}</div>
    </div>
  );
};

export default Dialogs;
