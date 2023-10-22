import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import BlogList from './components/Home/BlogList/BlogList';
import Navbar from './components/Common/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [blogList,setBlogList] =useState([])

useEffect(() => {
     axios.get('http://localhost:5000/api/posts')
     .then((response)=>{
      console.log(response,"response")
      setBlogList(response.data)
     })
     .catch((error)=>{
      console.error('Error While Fetching blog List',error)
     })

}, [])


  return (
    <div className='container'>
              {/* Navbar */}
              <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/tech" element={<BlogList blogs={blogList} category="Tech" />} />
        <Route path="/travel" element={<BlogList blogs={blogList} category="Travel" />} />
        <Route path="/food" element={<BlogList blogs={blogList} category="Food" />} />

      </Routes>

    </div>

  );
}

export default App;
