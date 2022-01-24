import React from "react";
import SocialPost from "./SocialPost";
import Comment from "./Comment";
import "./SocialFeed.css";
let posts = [
  {
    user: "Ahmet",
    message: "message",
    dateTime: "17 Nisan Cumartesi, 18:24",
    comments: [
      {
        name: "kemal",
        message: "comment-1",
        dateTime: "18 Nisan Cumartesi, 19:24",
      },
    ],
  },
  {
    user: "ersel",
    message: "message-2",
    dateTime: "18 Ocak Cumartesi, 21:24",
    comments: [],
  },
  {
    user: "benjamin",
    message: "message-3",
    dateTime: "18 Ocak Cumartesi, 21:24",
    comments: [
      {
        name: "kemal",
        message: "comment-3",
        dateTime: "20 Ocak Cumartesi, 19:24",
      },
      {
        name: "Mehmet Ali Alabora",
        message: "comment-3 muhalefeti",
        dateTime: "20 Ocak Cumartesi, 19:24",
      },
      {
        name: "Ejder Aslanbaba",
        message: "comment-3 muhalefetinin muhalefeti",
        dateTime: "20 Ocak Cumartesi, 19:24",
      },
    ],
  },
];

const SocialFeed = () => {
  return (
    <div className="wrapper">
      <div className="details">
        {posts.map((post) => {
          return (
            <div>
              <SocialPost post={post} />
              <Comment post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialFeed;
