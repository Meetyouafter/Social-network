/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  addNewMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../Redux/reducer/dialogsReducer';
import StoreContext from '../../Redux/StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
    {(store) => {
        const addMessage = () => {
          store.dispatch(addNewMessageActionCreator());
        };
        const onMessageChange = (text) => {
          store.dispatch(updateNewMessageActionCreator(text));
        };
      return (
      <Dialogs
      changeMessage={onMessageChange}
      getNewMessage={addMessage}
      newMessage={store.getState().dialogsPage.newMessage}
      dialogs={store.getState().dialogsPage.dialogs}
      users={store.getState().dialogsPage.users}
    />)}}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
