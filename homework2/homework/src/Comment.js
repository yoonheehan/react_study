import React from "react";

const Comment = ({ comment }) => {
  return <li>{JSON.stringify(comment)}</li>;
};

export default Comment;
