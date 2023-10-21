import React from 'react'
import './list.css'
import BlogItem from './BlogItem/blogItem'

function BlogList({blogs}) {
  return (
    <div className='blogList'>
        {blogs.map(blog=>(
            <BlogItem key={blog.id} blog ={blog}/>
            
        ))}
      
    </div>
  )
}

export default BlogList
