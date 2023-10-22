import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

function BlogForm({ onClose, onFormSubmit, fetchBlogPosts }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) {

            const formData = { title, content, category }
            axios.post('http://localhost:5000/api/blog-posts', formData)
                .then((response) => {
                    console.log(response)
                    console.log('Blog post added successfully:', response.data);
                })
                .catch((error) => {
                    console.error('Error adding blog post', error)
                })


            onFormSubmit(formData)
            fetchBlogPosts();
            onClose()
        }
    }
    const validateForm = () => {
        if (title.trim().length === 0 || content.trim().length === 0) {
            toast.error("Title and Content are Required")
            return false
        }
        if (title.trim().length < 5) {
            toast.error("Title should be at least 5 characters");
            return false;
        }
        if (content.trim().length < 10) {
            toast.error("Content should be at least 10 characters");
            return false;
        }

        if (/^\d/.test(content.trim())) {
            toast.error("Content should not start with a number");
            return false
        }
        if (/\d/.test(title.trim())) {
            toast.error("Title should not contain numbers");
            return false;
        }

        return true;
    }

    return (
        <form onSubmit={handleSubmit} className='blog-form'>
            <ToastContainer />
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
