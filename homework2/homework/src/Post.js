import React from "react";

const Post = ({ post }) => {
  return <li>{JSON.stringify(post)}</li>;
};

export default Post;
