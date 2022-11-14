import store from './Components/Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const getTreeOfApp = (store) => {
  root.render(
    <>
      <App store={store} dispatch={store.dispatch.bind(store)} />
    </>
  );
};

getTreeOfApp(store);
store.subscribe(() => getTreeOfApp(store));
