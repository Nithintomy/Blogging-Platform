import React from 'react'
import './items.css'
import Category from '../../../Common/Category/Category'
import { Link } from 'react-router-dom'


function formatDate(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString(undefined, options);
}

function BlogItem({blog:{_id,content,title,createdAt,category}}) {

  const Date = formatDate(createdAt);
  return (
    <div className='blogItem'>
       
        <Category category={category}/>
        <h2>{title}</h2>
        <p className='blogItem-desc'>{content}</p>
        

        <footer>
        <small>Posted on: {Date}</small>
        </footer>

        <Link className='blogItem-link' to={`/blog/${_id}`}>view</Link>
      
    </div>
  )
}

export default BlogItem
