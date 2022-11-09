import store from './Components/Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const getTreeOfApp = (store) => {
  root.render(
    <>
      <App
        store={store}
        addNewMessage={store.addNewMessage.bind(store)}
        addNewPost={store.addNewPost.bind(store)}
        updateNewMessage={store.updateNewMessage.bind(store)}
        updateNewPost={store.updateNewPost.bind(store)}
      />
    </>
  );
};

getTreeOfApp(store);
store.subscribe(getTreeOfApp);
