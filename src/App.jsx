// src/App.jsx
import React, { useState } from 'react';
import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <h1>LinkLoop</h1>
      <CreatePostForm onPostCreate={addPost} />
      <Feed posts={posts} />
    </div>
  );
}

export default App;
