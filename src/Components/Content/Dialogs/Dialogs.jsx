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

const Dialogs = ({
  changeMessage,
  getNewMessage,
  newMessage,
  dialogs,
  users,
}) => {
  const newMessageElement = React.createRef();

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    changeMessage(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.user}>
        {users.map((user) => (
          <User key={uniqueId()} user={user} />
        ))}
      </div>
      <div className={styles.messages}>
        {dialogs.map((dialog) => (
          <Message key={uniqueId()} message={dialog.message} />
        ))}

        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={newMessage}
        />
        <button onClick={getNewMessage}>Send new message</button>
      </div>
    </div>
  );
};

export default Dialogs;
