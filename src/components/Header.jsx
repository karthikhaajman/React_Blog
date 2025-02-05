import React from 'react'
import {BrowserRouter, Link,Router} from 'react-router-dom' 

const Header = () => {
  return (
    <div className='flex items-center px-5 py-3 justify-between font-extrabold text-xl border-b-2'>
        <img src="https://tse1.mm.bing.net/th?id=OIP.fXktcQxAb0ahw5VZwNk_GgHaHa&pid=Api&P=0&h=80"/>
        <div className='w-1/3'>
            <ul className='flex justify-between w-full'>
                <li><Link to='/' className='hover:cursor-pointer hover:underline'>Home</Link></li>
                <li><Link to='/blogs' className='hover:cursor-pointer hover:underline'>Blogs</Link></li>
                <li> <Link to='/contact' className='hover:cursor-pointer hover:underline'>About Us</Link></li>
            </ul>
        </div>
        <button className='border-2 rounded-full px-8 py-2' onClick={<Create />}>Create Blog</button>
    </div>
  )
}

export default Header