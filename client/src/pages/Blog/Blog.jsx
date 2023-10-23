import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Category from '../../components/Common/Category/Category';
import './Blog.css';
import './Comments.css'
import './Spinner.css'
import CommentForm from '../../components/Home/commentForm/CommentForm';
import axios from 'axios';
import { SpinnerRoundOutlined } from 'spinners-react';
import { ToastContainer } from 'react-toastify';


function formatDate(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString(undefined, options);
}

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments,setComments] =useState([])
  const [loading,setLoading] =useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error(error, 'Error');
      });
     
      axios.get(`http://localhost:5000/api/posts/${id}/comments`)
      .then((response)=>{
        console.log(response.data,"Comment data")
        setComments(response.data)
      })
      .catch((error)=>{
        console.error('Error occur While Fetching Comments',error)
      })
      .finally(() => {
        setLoading(false); 
      });


  }, [id]);


  const Date = blog ? formatDate(blog.createdAt) : ''; 

  return (
    <div>
      
      <Link className='back-button' to='/'><span>&#8592;</span>Back</Link>

      {loading ? ( 
        <div className="spinner-container">
       <SpinnerRoundOutlined size={200} thickness={100} speed={100} color="#36ad47" secondarycolor="rgba(0, 0, 0, 0.44)" />
       </div>
      ) : blog ? (
        <div className='blog'>
          <header>
            <p className='blog-date'>Published on: {Date}</p>
            <h1>{blog.title}</h1>
          </header>
          <div className='blog-category'>
            <Category category={blog.category} />
          </div>
          <p className='blog-desc'>{blog.content}</p>
          <CommentForm blogId={id} updateComments={setComments}/>

          <div className="comments" >
            <h2>Comments</h2>
            {comments.length > 0 ?(
            <ul>
              {comments.map((comment) => (
                <li key={comment._id}>
                  <p>Name : {comment.author}</p>
                  <p>{comment.text}</p>
                </li>
              ))}
            </ul>
            ):(
              <div className="no-comments">

                <h5>No comments Found</h5>
            
            </div>

            )}
          </div>

        </div>
      ) : null}
    </div>
  );
}

export default Blog;
