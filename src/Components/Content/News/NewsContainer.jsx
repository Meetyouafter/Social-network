/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  addNewNewsActionCreator,
  updateNewNewsActionCreator,
} from '../../Redux/reducer/newsReducer';
import News from './News';

const NewsContainer = ({ store }) => {
  const handleClick = () => {
    store.dispatch(addNewNewsActionCreator());
  };

  const changeNews = (text) => {
    store.dispatch(updateNewNewsActionCreator(text));
  };

  return (
    <News
      onClick={handleClick}
      updateNews={changeNews}
      newNews={store.getState().newsPage.newNews}
      news={store.getState().newsPage.news}
    />
  );
};

export default NewsContainer;
