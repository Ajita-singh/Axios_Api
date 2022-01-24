import React, { useEffect, useState } from "react";
import axios from "axios";
const POST_API = "https://jsonplaceholder.typicode.com/posts";

export function AxiosApi() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
      axios.get(POST_API).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            userid={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          </div>
        ))}
      </div>
    </div>
  );
}
