

import React from 'react';
import './list.css';
import BlogItem from './BlogItem/blogItem';

function BlogList({ blogs, category }) {
  const filteredBlogs = category ? blogs.filter((blog) => blog.category === category) : blogs;

  return (
    <>
      <div className="grid-container">
        <div className='blogList'>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogItem key={blog._id} blog={blog} />
            ))
          ) : null}
        </div>
      </div>
      
      {filteredBlogs.length === 0 && (
        <div className='not-found-container'>
          <h4>No Result Found ...</h4>
          <img
              src='https://uploads-ssl.webflow.com/5fa27c3574b213fae018d63e/61db77ae62249315c10cf2d3_animation_500_kxszguql.gif'
              alt='No items found'
              className='not-found-gif'
            />
        </div>
      )}
    </>
  );
}

export default BlogList;
