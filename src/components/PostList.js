// PostList.js

import React, { useState } from 'react';

function PostList({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h3>Social Media Posts</h3>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
      <ul className="pagination">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
          <li key={index} className={index + 1 === currentPage ? 'active' : ''}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
