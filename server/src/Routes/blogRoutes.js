import express from 'express'
import { getAllBlogPosts,getBlogPostById,addCommentsToBlogPost} from '../Controllers/blogController.js';


const router = express.Router()


router.get('/posts',getAllBlogPosts)

router.get('/posts/:id',getBlogPostById)


router.post('/posts/:id/comments',addCommentsToBlogPost)


export default router;