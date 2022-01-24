import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

export function UseApi() {
  const { data, isLoading } = useQuery("userdata", () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  });
  if (isLoading) {
    return <h3>Loading......</h3>;
  }
  return (
    <div>
      {data.data.map((posts, index) => (
        <div key={index}>
          name={posts.name}
          username={posts.username}
        </div>
      ))}
    </div>
  );
}



// export  const fetchPosts = async () => {
//     try {
//         const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
//         return data;
//     } catch(erro) {
//         throw Error("unable to fetch data");
//     }
// };