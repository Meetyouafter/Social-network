import React from 'react';
import Post from '../Post/Post';
import styles from './Posts.module.css';

const Posts = () => {
  return (
    <div className={styles.container}>
      My post
      <textarea></textarea>
      <button>Add new Post</button>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
