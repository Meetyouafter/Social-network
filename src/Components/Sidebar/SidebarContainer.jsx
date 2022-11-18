/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import StoreContext from '../Redux/StoreContext';
import Sidebar from './Sidebar';

const SidebarContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => <Sidebar sidebar={store.getState().sidebar} />}
    </StoreContext.Consumer>
  );
};

export default SidebarContainer;
