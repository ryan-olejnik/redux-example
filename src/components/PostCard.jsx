import React from "react";
import cat1 from "../assets/cathead1.jpeg";
import cat2 from "../assets/cathead2.jpg";
import cat3 from "../assets/cathead3.png";
import cat4 from "../assets/cathead4.png";
import cat5 from "../assets/cathead5.gif";
import "./PostCard.css";

const catPics = [cat1, cat2, cat3, cat4, cat5];

const PostCard = ({ post, index }) => {
  let catIndex = index;
  while (catIndex >= 5) {
    catIndex -= 5;
  }

  return (
    <div key={index} className="post-card">
      <img src={catPics[catIndex]} className="post-card-photo" />
      <div className="post-card-text-container">
        <h4>
          {/* {post.title}, */}
          CatIndex:{catIndex}, Index: {index}
        </h4>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostCard;
