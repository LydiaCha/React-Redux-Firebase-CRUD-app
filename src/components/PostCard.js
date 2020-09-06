import React from "react";

const PostCard = (props) => {
  return (
    <div className="jumbotron">
      <div>{props.children}</div>
    </div>
  );
};

export default PostCard;
