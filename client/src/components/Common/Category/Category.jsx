import React from 'react'
import './category.css'

function Category({category}) {
  return (
    <div>
      <p className='category'>{category}</p>
    </div>
  )
}

export default Category
