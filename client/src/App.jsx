import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import BlogList from './components/Home/BlogList/BlogList';

function App() {
  return (
   <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/tech" element={<BlogList category="Tech"/>} />
        <Route path="/travel" element={<BlogList category="Travel"/>} />
        <Route path="/food" element={<BlogList category="Food"/>} />
      </Routes>

   </div>

  );
}

export default App;
