import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './CommentForm.css'
import axios from 'axios';

function CommentForm({ onCommentSubmit,blogId }) {

    const [newCommenter, setCommenter] = useState('')
    const [comment, setComment] = useState('')

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!newCommenter || !comment) {
            toast.error("Both are Required")
        }

        const newCommentData = {
            commenter: newCommenter,
            text: comment,
          
        }

        axios.post(`http://localhost:5000/api/posts/${blogId}/comments`,newCommentData)
        .then((response)=>{
            console.log(response,"comment")
            onCommentSubmit(response.data)
        })
        .catch((error)=>{
            console.error('Error',error)
        })

        setCommenter('');
        setComment('');
    }
    return (
        <div className='comment-form'>
            <form onSubmit={handleCommentSubmit}>
                <h4>Share Your Thoughts </h4>
                <ToastContainer />

                <div>
                    <label htmlFor="commenter">Your Name</label>
                    <input type="text" id='commenter' value={newCommenter}
                        onChange={(e) => setCommenter(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="comment">Comment Your Thoughts</label>
                    <textarea
                        name="comment"
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    >

                    </textarea>
                </div>

                <button type='submit'>Submit Your Comment</button>

            </form>

        </div>
    )
}

export default CommentForm
