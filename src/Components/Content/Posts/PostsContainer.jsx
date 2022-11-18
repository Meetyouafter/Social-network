import React from 'react';
import {
  addNewPostActionCreator,
  updateNewPostActionCreator,
} from '../../Redux/reducer/profileReducer';
import StoreContext from '../../Redux/StoreContext';
import Posts from './Posts';

const PostsContainer = () => {
  return (
    <StoreContext>
      {(store) => {
        const createNewPost = () => {
          store.dispatch(addNewPostActionCreator());
        };

        const updateNewPost = (text) => {
          store.dispatch(updateNewPostActionCreator(text));
        };
        return (
          <Posts
            addNewPost={createNewPost}
            updNewPost={updateNewPost}
            posts={store.getState().postsPage.posts}
            newPost={store.getState().postsPage.newPost}
          />
        );
      }}
    </StoreContext>
  );
};

export default PostsContainer;
