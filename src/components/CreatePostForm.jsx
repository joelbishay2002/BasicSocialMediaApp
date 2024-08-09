
import React, { useState } from 'react';

function CreatePostForm({ onPostCreate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostCreate({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePostForm;
