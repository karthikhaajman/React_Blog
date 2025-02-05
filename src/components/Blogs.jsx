import React from 'react'
import { Heart,Eye,X } from 'lucide-react';
const Blogs = ({blogs,updatecounts,viewclick,blog_delete}) => {

  const likefunc=(index)=>{
    updatecounts(index,'like');
  }
  const viewfunc=(index)=>{
    updatecounts(index,'view');
  }

  return (
    <>

         <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">All Blogs</h1>
            <div className='grid grid-cols-4 gap-6 '>
          {blogs.length> 0 ?  
              (blogs.map((blog, index) => (
                  <div key={index} className="border-2 rounded-lg p-5 mb-6 bg-orange-200">
                    <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                    <p className="text-lg mb-3">by {blog.author}</p>
                    <p className='mb-6'>{blog.content.slice(0,80)}...</p>
                  
                 <img src={blog.img} alt="Blog" className="my-4 h-50 w-100" />

                    <div className='flex gap-5 mb-2'>
                    <div className='flex'> <button onClick={()=>likefunc(index)} ><Heart /> </button><p>{blog.likeCount}</p>   </div>
                    <div className='flex'> <button onClick={()=>{viewfunc(index);viewclick(index);}}><Eye /> </button><p>{blog.viewCount}</p></div>
                    <button onClick={()=>{blog_delete(index)}} > <X /></button>
                    </div>
                    
                  </div>
        ))):(<p>No blogs available.</p>) }
          </div>
          </div>
 
    </>
  );
}

export default Blogs