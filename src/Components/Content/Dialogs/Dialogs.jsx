/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { uniqueId } from 'lodash';

const User = (props) => {
  return (
    <div>
      <NavLink
        key={uniqueId()}
        to={`${props.user.id}`}
        className={styles.dialog}
      >
        <img src={props.user.avatar} />
        {props.user.userName}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={styles.message}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNm2EiokTIPQi0YQYXxmGVMLM72nCcANzKw&usqp=CAU' />
      {props.message}
    </div>
  );
};

const Dialogs = (props) => {

  const message = React.createRef();

  const addNewDialog = () => {
    const text = message.current.value;
    props.dialogs.push(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.user}>
        {props.state.users.map((user) => (
          <User key={uniqueId()} user={user} />
        ))}
      </div>
      <div className={styles.messages}>
        {props.state.dialogs.map((dialog) => (
          <Message ref={message} key={uniqueId()} message={dialog.message} />
        ))}
        <div>
          <textarea onChange={props.newMessageText} value={props.newMessage}></textarea>
          <button onClick={addNewDialog}>Add new dialog</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
