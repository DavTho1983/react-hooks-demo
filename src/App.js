import React, { useState } from "react";

import UseBar from "./User/UseBar";
import Post from "./Post/Post";
import CreatePost from "./Post/CreatePost";
import PostList from "./Post/PostList";
import "./App.css";

const posts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Melanie"
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Melanie"
  }
];

function App() {
  const [name, setName] = useState("");

  function handleChange(evt) {
    setName(evt.target.value);
  }
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <input type="text" onChange={handleChange} value={name} />
      <UseBar />
      <Post
        title="React Hooks"
        content="The greatest thing since sliced bread!"
        author="Melanie Freshness"
      />
      <CreatePost />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
