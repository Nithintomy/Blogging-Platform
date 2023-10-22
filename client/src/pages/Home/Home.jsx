import React, { useEffect, useState } from 'react';
import HomeTitle from '../../components/Home/Header/HomeTitle';
import BlogList from '../../components/Home/BlogList/BlogList';
import BlogForm from '../../components/Home/BlogForm/BlogForm';
import axios from 'axios'
import './Home.css';
import '../Blog/Spinner.css'
import { SpinnerRoundOutlined } from 'spinners-react';


function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetchBlogPosts();
  }, [])


  const fetchBlogPosts = () => {
    console.log("reached");
    axios
      .get('http://localhost:5000/api/posts')
      .then((response) => {

        const sortedBlogs = response.data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setBlogs(sortedBlogs);
      })
      .catch((error) => {
        console.error('Error while fetching the blog Data', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const openModal = () => {
    console.log("modal open")
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
     
      {isModalOpen && (
        <BlogForm
          onClose={closeModal}
          fetchBlogPosts={fetchBlogPosts}
          onFormSubmit={(FormData) => {
            console.log('form data', FormData);
            closeModal();
          }}
        />
      )}

      
      {/* HomeTitle */}
      <HomeTitle />
      <div className="add-blog-button-container">
        <button className="add-blog-button" onClick={openModal}> Add Blog</button>
      </div>

      {/* Blog list */}
      {loading ? (
        <div className="spinner-container">
          <SpinnerRoundOutlined size={200} thickness={100} speed={100} color="#36ad47" secondarycolor="rgba(0, 0, 0, 0.44)" />
        </div>
      ) : (
        <div className="blog-list-container">

          <BlogList blogs={blogs} /> {/*  passing the fetched data to blogList */}
        </div>
      )}
    </div>
  );
}

export default Home;
