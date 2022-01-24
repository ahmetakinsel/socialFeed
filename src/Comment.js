import React, { useState } from "react";

const Comment = ({ post }) => {
  const [name, setName] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  if (post.comments.length === 0) {
    return <p>No comment</p>;
  } else {
    return post.comments.map((comment) => {
      return (
        <div>
          <p>
            {comment.name}: {comment.message}
          </p>
          <input
            type="text"
            placeholder="Type name"
            onChange={handleName}
          ></input>
          <p>{name}</p>
        </div>
      );
    });
  }
};

export default Comment;
