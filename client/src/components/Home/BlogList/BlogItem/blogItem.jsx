import React from 'react'
import './items.css'
import Category from '../../../Common/Category/Category'
import { Link } from 'react-router-dom'

function BlogItem({blog:{id,description,title,createdAt,category}}) {
  return (
    <div className='blogItem'>
       
        <Category category={category}/>
        <h2>{title}</h2>
        <p className='blogItem-desc'>{description}</p>
        

        <footer>
        <small>Posted on: {createdAt}</small>
        </footer>

        <Link className='blogItem-link' to={`/blog/${id}`}>view</Link>
      
    </div>
  )
}

export default BlogItem
