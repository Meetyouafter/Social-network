import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  addNewMessage,
  addNewPost,
  updateNewPost,
  updateNewMessage,
} from './Components/Redux/state';

const renderUpdate = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App
      state={state}
      addNewMessage={addNewMessage}
      addNewPost={addNewPost}
      updateNewPost={updateNewPost}
      updateNewMessage={updateNewMessage}
    />
  );
};

export default renderUpdate;
