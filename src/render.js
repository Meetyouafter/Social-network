import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addNewMessage, addNewPost, updateNewMessage, updateNewPost } from './Components/Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const getTreeOfApp = (state) => {
  root.render(
    <>
      <App
        state={state}
        addNewMessage={addNewMessage}
        addNewPost={addNewPost}
        updateNewMessage={updateNewMessage}
        updateNewPost={updateNewPost}
      />
    </>
  );
};

export default getTreeOfApp;
