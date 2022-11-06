import React from 'react';
import styles from './Posts.module.css';

const posts = [
  { id: 1, likes: 28, content: "What's up?" },
  { id: 2, likes: 12, content: 'I am tired' },
  { id: 3, likes: 178, content: 'I love pizza' },
  { id: 4, likes: 3, content: 'I bougth a cat yestarday' },
  { id: 5, likes: 77, content: 'It is my first post' },
];

const getPosts = posts.map((post) => {
  return (
    <div className={styles.post}>
      <img
        alt='img'
        src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
      />
      {post.content}
      <button>Like</button>
      Likes: {post.likes}
    </div>
  );
});

const Posts = () => {
  return (
    <div className={styles.container}>
      My post
      <textarea></textarea>
      <button>Add new Post</button>
      {getPosts}
    </div>
  );
};

export default Posts;
