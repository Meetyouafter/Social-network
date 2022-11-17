import { uniqueId } from 'lodash';
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

const Posts = ({addNewPost, updNewPost, posts, newPost}) => {
  const newPostElement = React.createRef();

  const updateNewPost = () => {
    const text = newPostElement.current.value;
    updNewPost(text);
  }

  return (
    <div className={styles.container}>
      My post
      {posts.map((post) => <Post key={uniqueId()} post={post}/>)}
      <textarea onChange={updateNewPost} value={newPost} ref={newPostElement}></textarea>
      <button onClick={addNewPost}>Add new Post</button>
      
    </div>
  );
};

export default Posts;
