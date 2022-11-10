/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { uniqueId } from 'lodash';
import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/reducer/dialogsReducer';

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
  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addNewMessageActionCreator())
  }

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch(updateNewMessageActionCreator(text))
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.user}>
        {props.dialogsPage.users.map(user => <User key={uniqueId()} user={user}/>)}
      </div>
      <div className={styles.messages}>
        {props.dialogsPage.dialogs.map(dialog => <Message key={uniqueId()} message={dialog.message} />)}
      
      <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessage}/>
      <button onClick={addMessage}>Send new message</button>
      </div>
    </div>
  );
};

export default Dialogs;
