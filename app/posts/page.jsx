import React from 'react'

async function fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = await data.json();
    return res;
}

async function Page() {
  const posts = await fetchData();

  return (
    <div>
      <h1>Posts</h1>

      <ul>
        {posts.map(post => (
          <li>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page