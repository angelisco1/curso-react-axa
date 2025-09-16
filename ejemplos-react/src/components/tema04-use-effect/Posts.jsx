import { useEffect, useState } from "react"


const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        console.log(data)
        setPosts(data)
      })

  }, [])

  return (
    <div>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  )
}

export default Posts