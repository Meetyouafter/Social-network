import React from 'react';
import styles from './Posts.module.css';



const Post = (props) => {
    return (
      <div className={styles.post}>
        <img
          alt='img'
          src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
        />
        {props.post.content}
        <button>Like</button>
        Likes: {props.post.likes}
      </div>
    );
};

const Posts = (props) => {
  console.log(props)
  return (
    <div className={styles.container}>
      My post
      <textarea></textarea>
      <button>Add new Post</button>
      {props.posts.map((post) => <Post post={post}/>)}
    </div>
  );
};

export default Posts;
