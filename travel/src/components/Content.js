import React from "react";
import Post from "./Post.js";
import data from "./data.js"

export default function Content() {
  const posts = data.map(post => {return <Post key={post.id} {...post}/>});
  return (
    <main>
      {posts}
    </main>
  )
}