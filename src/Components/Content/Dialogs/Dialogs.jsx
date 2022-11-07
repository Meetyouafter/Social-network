/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { uniqueId } from 'lodash';

const User = (props) => {
  return (
    <div>
      <NavLink key={uniqueId()} to={`${props.user.id}`} className={styles.dialog}>        
        <img src={props.user.avatar}/>
        {props.user.userName}
      </NavLink>
    </div>
  );
}
 
const Message = (props) => {
return <div className={styles.message}>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNm2EiokTIPQi0YQYXxmGVMLM72nCcANzKw&usqp=CAU'/>
  {props.message}
  </div>;
}

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.user}>
        {props.state.users.map(user => <User key={uniqueId()} user={user}/>)}
      </div>
      <div className={styles.messages}>
        {props.state.dialogs.map(dialog => <Message key={uniqueId()} message={dialog.message} />)}
      </div>
    </div>
  );
};

export default Dialogs;
