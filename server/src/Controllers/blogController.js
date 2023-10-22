import BlogPost from "../Model/blogModel.js"
import Comment from "../Model/commentModel.js";



export const createBlogPost = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    const newBlogPost = new BlogPost({
      title,
      content,
      category,
    });

    const saveBlogPost = await newBlogPost.save();
    res.status(201).json(saveBlogPost);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while creating a new blog post.' });
  }
};


export const getAllBlogPosts = async (req, res) => {
 
    try {
      const posts = await BlogPost.find();
     
      res.status(200).json(posts);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while fetching blog posts.' });
    }
  };


  export const getBlogPostById =async (req,res)=>{
    console.log("entered to single view")
    try {
        console.log(req.params.id,"id here")
        const postId = req.params.id

        console.log(postId)

        const post = await BlogPost.findById(postId)

        if(!post){
            return res.status(404).json({error:"Blog Post is not Found"})
        }

        res.status(200).json(post)
        
    } catch (error) {
        console.error('Error:',error);
        res.status(500).json({error:"An error Occured While Fetching the Blogs"})
        
    }
  }

  export const addCommentsToBlogPost =async(req,res)=>{

    try {

        const postId = req.params.id;

        const commentData =req.body;

        const post = await BlogPost.findById(postId)

        if(!post){
            return res.status(404).json({error:"No Blog post Found"})

        }

        const newComment =new Comment({
          author:commentData.commenter,
          text:commentData.text
        })

        await newComment.save()

        post.comments.push(newComment._id);
        await post.save();
        res.status(201).json(newComment)
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while adding a comment.' });
      }

  }


  export const getComments = async(req,res)=>{
    console.log("enter to getComments ")
    try {

      const postId = req.params.id;

      console.log(postId,"Post Id")

      const post = await BlogPost.findById(postId).populate('comments')

      console.log(post,"post ")

      if(!post){
        return res.status(404).json({error:'No Blog Post Found'})
      }

      const comments =post.comments

      console.log(comments)

      res.status(200).json(comments);
      
    } catch (error) {
      console.error('Error',error)
      res.status(500).json({error:'Server Error'});
      
    }
  }