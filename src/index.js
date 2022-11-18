import store from './Components/Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StoreContext from './Components/Redux/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const getTreeOfApp = (store) => {
  root.render(
    <StoreContext.Provider value={store}>
      <App store={store} dispatch={store.dispatch.bind(store)} />
    </StoreContext.Provider>
  );
};

getTreeOfApp(store);
store.subscribe(() => getTreeOfApp(store));
