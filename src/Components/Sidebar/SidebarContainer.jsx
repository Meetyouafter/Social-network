/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Sidebar from './Sidebar';

const SidebarContainer = (props) => {
  return <Sidebar sidebar={props.store.getState().sidebar} />;
};

export default SidebarContainer;
