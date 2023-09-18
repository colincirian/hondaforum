"use client";

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./UserPost.css";
import { supabase } from "../config/SupabaseClient";
import { click } from "@testing-library/user-event/dist/click";

function UserPost() {

// Handle form submission
const handleSubmit = async (event) => {

  event.preventDefault();
  const username = event.target.username.value;
  const comment = event.target.comment.value;

  // Insert data into the Supabase table
  const { data, error } = await supabase
    .from('posts')
    .insert([{ username, comment }]);

  if (error) {
    console.error('Error inserting data:', error.message);
  } else {
    console.log('Data inserted successfully:', data);
  }
};

  return (
    <>
      <h1>Create a Post!</h1>
      <div className="post-container">
        <section className="user-textbox">
          <form>
            <input placeholder="Username" type="text" id="username" />
            <input placeholder="Comment" type="text" id="comment" />
            <button type="submit">Submit Post</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default UserPost;

//   const [postContent, setPostContent] = useState("");
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch data
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const { data, error } = await supabase
//         .from("") // Table name
//         .select("");

//       if (error) {
//         throw error;
//       }

//       setPost(data);
//     } catch (error) {
//       console.error("Error fetching data", error.message);
//     }
//   };
