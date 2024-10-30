import React from 'react'

const BlogPost = () => {
  return (
    <div>
    <h1>{blogPost.title}</h1>
    <Image src={blogPost.image} alt={blogPost.title} width={600} height={400} />
    <p>{blogPost.description}</p>
    <p>{blogPost.date}</p>
  </div>
  )
}

export default BlogPost