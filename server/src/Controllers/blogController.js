import BlogPost from "../Model/blogModel.js"

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
    try {

        const postId = req.params.id

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

        post.comments.push(commentData);
        await post.save();
        res.status(201).json(post)
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while adding a comment.' });
      }

  }