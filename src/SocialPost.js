import React, { useState } from "react";
import "./SocialPost.css";

const SocialPost = ({ post }) => {
  const [likes, setLikes] = useState(0);

  const handleCount = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <h1>{post.user}</h1>
      <p>{post.message}</p>
      <div>Likes:{likes}</div>
      <button className="like-button" onClick={handleCount}>
        Like
      </button>
    </div>
  );
};

export default SocialPost;
