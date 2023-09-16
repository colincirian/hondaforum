import React, { useState } from "react";
import "./UserPost.css";

function PostList() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.prevent.default();
  };

  return (
    <div>
      <h1>Create a Post!</h1>
      <section className="user-textbox">
        <form>
          <label>Create a post </label>
          <textarea required></textarea>
        </form>
      </section>
    </div>
  );
}

export default PostList;
