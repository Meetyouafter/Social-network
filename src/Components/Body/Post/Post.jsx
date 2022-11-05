/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <div className={styles.post}>
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
      Post 1
    <button>Like</button>
    </div>
  );
};

export default Post;
