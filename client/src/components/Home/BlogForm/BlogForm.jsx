import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'

function BlogForm({ onClose, onFormSubmit,fetchBlogPosts }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { title, content, category }
        axios.post('http://localhost:5000/api/blog-posts',formData)
        .then((response)=>{
            console.log(response)
            console.log('Blog post added successfully:', response.data);
        })
        .catch((error)=>{
            console.error('Error adding blog post',error)
        })


        onFormSubmit(formData)
        fetchBlogPosts();
        console.log("Hii")
        onClose()
    }

    return (
        <form onSubmit={handleSubmit} className='blog-form'>
            <h2>Add A New Blog Post</h2>

            <div>
                <label htmlFor="title">Title</label>
                <input type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <label htmlFor="category">Category</label>

                <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="Tech">Tech</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                </select>
            </div>
            <button type='submit'>Add Blog</button>
            <button onClick={onClose}>Close</button>

        </form>
    )
}

export default BlogForm
