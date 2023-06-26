import React from "react";
import { useEffect, useState } from "react";
import apiRequest from "./apiRequest";
import Comment from "./Comment";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComment() {
      let data = await apiRequest(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(data);
    }
    fetchComment();
  }, []);

  return (
    <>
      <div>Comments</div>
      <ul>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </ul>
    </>
  );
};

export default Comments;
