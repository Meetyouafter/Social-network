import React from 'react';
import {
  addNewPostActionCreator,
  updateNewPostActionCreator,
} from '../../Redux/reducer/profileReducer';
import Posts from './Posts';

const PostsContainer = ({ posts, newPost, dispatch }) => {
  const createNewPost = () => {
    dispatch(addNewPostActionCreator());
  };

  const updateNewPost = (text) => {
    dispatch(updateNewPostActionCreator(text));
  };

  return (
    <Posts
      addNewPost={createNewPost}
      updNewPost={updateNewPost}
      posts={posts}
      newPost={newPost}
    />
  );
};

export default PostsContainer;
