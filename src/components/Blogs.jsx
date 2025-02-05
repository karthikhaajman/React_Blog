import React from 'react'
import { useState,useState } from 'react'

const Blogs = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        getData();
    },[])
    async function getDate(){
        var response=await fetch("https://dev.to/api/articles");
        var responsejson= await response.json();
        setData(data,responsejson);
    }
  return (
    <>
        {/* data && data.length>0 &&
        data.map ((item)=>{
            return  <BlogDisplay blog={item} key=
        })) */}
    </>
  )
}

export default Blogs