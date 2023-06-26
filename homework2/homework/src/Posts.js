import React from "react";
import { useEffect, useState } from "react";
import apiRequest from "./apiRequest";
import Post from "./Post";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      let data = await apiRequest("https://jsonplaceholder.typicode.com/posts");
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <div>Posts</div>
      <ul>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </>
  );
};

export default Posts;
