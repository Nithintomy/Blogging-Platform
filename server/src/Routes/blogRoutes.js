import express from 'express'
import {createBlogPost,getAllBlogPosts,getBlogPostById,addCommentsToBlogPost,getComments} from '../Controllers/blogController.js';


const router = express.Router()


// Retrieving a list of blog posts
router.post('/blog-posts',createBlogPost)
router.get('/posts',getAllBlogPosts)


// Retrieving a specific blog post by ID.
router.get('/posts/:id',getBlogPostById)


// Posting new comments on a blog post
router.post('/posts/:id/comments',addCommentsToBlogPost)
router.get('/posts/:id/comments',getComments)


export default router;