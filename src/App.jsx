
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import About from './components/About'
import CreateForm from './components/CreateForm'
import BlogView from './components/BlogView'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {useState,useEffect} from 'react'

function App() {

  return (
    <>
    <BrowserRouter>
    <AppContent />
      </BrowserRouter>
    </>
  )
}

const AppContent=()=>{
  const [blogs,setBlog]=useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlog(storedBlogs);
  }, []);
  

  function handleclick(){
    navigate("/create_blog");
  }

  function updatecounts(index,type){
    setBlog((prevBlogs) => {
      const updatedBlogs = [...prevBlogs];
      if (type === 'like') {
        updatedBlogs[index].likeCount += 1;
      } else if (type === 'view') {
        updatedBlogs[index].viewCount += 1;
      }
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      return updatedBlogs;
    });
  }
  function addblog(blog){
    setBlog((prevBlogs) => {
      const updatedBlogs = [...prevBlogs, blog];
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      return updatedBlogs;
    });
  }
  function viewClick(index){
    navigate(`/blogs/view_blog/${index}`);
  }
  const blog_delete = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1); 
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs)); 
    setBlog(updatedBlogs); 
  };
  return <>
  <div className='bg-orange-100'>
      <Header clickaction={handleclick} />
      <Routes>
      <Route path='/' element={<Home clickaction={handleclick} />}></Route>
      <Route path='/blogs' element={<Blogs blogs={blogs} updatecounts={updatecounts} viewclick={viewClick} blog_delete={blog_delete} />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/create_blog' element={<CreateForm addblog={addblog}/>}></Route>
      <Route path='/blogs/view_blog/:index' element={<BlogView  blogs={blogs}  updatecounts={updatecounts}/>}></Route>
      </Routes>
      <Footer />
    </div>
  </>
}

export default App
