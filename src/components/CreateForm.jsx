import React from 'react'
import { useState } from 'react'
const CreateForm = () => {
    const [blog,setBlogs]= useState({
        author:'',title:'',des:'',img:''
    })

    function handleChange(key,value){
        setBlogs(blog=>({...blog,[key]:value}));
    }

  return (
    <div className='flex justify-center my-8'>
        <form className='border-3 rounded-xl w-180 bg-white'>
            <div className='h-12 bg-yellow-500 border-b-2 rounded-t-lg'></div>

            <div className='flex flex-col p-8'>
                <h1 className='font-bold text-2xl mb-8'>Your blog here!</h1>
                <label className='text-xl mb-3'>Author Name</label>
                <input type='text' className='border-2 rounded-md mb-3 h-10 pl-2' placeholder='Your name' onChange={(e)=>{handleChange('author',e.target.value)}}/>
                <label className='text-xl mb-3'>Title</label>
                <input type='text' className='border-2 rounded-md mb-3 h-10 pl-2' placeholder='Title here' onChange={(e)=>{handleChange('title',e.target.value)}}/>
                <label className='text-xl mb-3'>Your Blog</label>
                <textarea className='border-2 rounded-md mb-3 h-50 pl-2' placeholder='Your content' onChange={(e)=>{handleChange('des',e.target.value)}}/>
                <label className='text-xl mb-3'>Image</label>
                <input type='file' accept='image/*' className='border-2 rounded-md mb-3 h-10'/>
            </div>
            <div className='flex justify-center'>
            <button className='border-2 h-15 w-30 bg-cyan-700 rounded-lg text-3xl mb-5'>Post</button></div>
        </form>
    </div>
  )
}

export default CreateForm