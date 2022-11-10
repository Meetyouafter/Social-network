import React from 'react';
import { addNewPostActionCreator, updateNewMessageActionCreator, updateNewPostActionCreator } from '../../Redux/state';
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
  const newPostElement = React.createRef();

  const createNewPost = () => {
    props.dispatch(addNewPostActionCreator());
  }

  const updateNewPost = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div className={styles.container}>
      My post
      {props.posts.map((post) => <Post post={post}/>)}
      <textarea onChange={updateNewPost} value={props.newPost} ref={newPostElement}></textarea>
      <button onClick={createNewPost}>Add new Post</button>
      
    </div>
  );
};

export default Posts;
