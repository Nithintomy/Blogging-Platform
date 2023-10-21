import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogList } from '../../config/data';
import Category from '../../components/Common/Category/Category';
import './Blog.css'

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null)


  useEffect(() => {

    let blog = blogList.find(blog => blog.id === parseInt(id))

    if (blog) {
      setBlog(blog);
    }


  }, [])

  return (
    <div>

      <Link className='back-button' to='/'><span>&#8592;</span>Back</Link>


      {
        blog ? (
          <div className='blog'>

            <header>
              <p className='blog-date'>Published on :{blog.createdAt}</p>
              <h1>{blog.title}</h1>

            </header>

            <div className='blog-category'>

              <Category category={blog.category} />

            </div>

            <p className='blog-desc'>{blog.description}</p>

          </div>


        ) : null

      }
    </div>

  )
}
export default Blog