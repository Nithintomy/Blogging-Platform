import React from 'react'
import HomeTitle from '../../components/Home/Header/HomeTitle'
import BlogList from '../../components/Home/BlogList/BlogList'
import { blogList } from '../../config/data'
import './Home.css'
import Navbar from '../../components/Common/Navbar/Navbar'


function Home() {


  return (
    <div>

   {/* Navbar */}

   <Navbar/>

   {/* HomeTitle */}

   <HomeTitle/>

   {/* Blog list  */}

   <div className="blog-list-container">
        <BlogList blogs={blogList} />
      </div>

    </div>
  )
}

export default Home
