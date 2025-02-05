import React from 'react'
import {useParams} from 'react-router-dom'
import {Heart,Eye} from 'lucide-react'
const BlogView = ({blogs,updatecounts}) => {
    const { index } = useParams(); 
  const blog = blogs[parseInt(index)]; 
  const likefunc=(index)=>{
    updatecounts(index,'like');
  }
  return (
    <div>   
    <div className="p-8">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-lg mb-6">by {blog.author}</p>
      <p>{blog.content}</p>
      <div className='flex justify-center'>
      <img src={blog.img} className='mt-10 w-150'/></div>
      <div className='flex mt-5 gap-10'>
         <div className='flex'onClick={()=>likefunc(index)}><Heart /> <p>{blog.likeCount}</p>   </div>
        <div className='flex'><Eye /><p>{blog.viewCount}</p></div>
      </div>
    </div>
    </div>
  )
}

export default BlogView