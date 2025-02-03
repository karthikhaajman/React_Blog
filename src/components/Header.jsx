import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center px-5 py-3 justify-between font-extrabold text-xl'>
        <img src="https://tse1.mm.bing.net/th?id=OIP.fXktcQxAb0ahw5VZwNk_GgHaHa&pid=Api&P=0&h=80"/>
        <div className='w-1/3'>
            <ul className='flex justify-between w-full'>
                <li className='hover:cursor-pointer hover:underline'>Home</li>
                <li className='hover:cursor-pointer hover:underline'>Blogs</li>
                <li className='hover:cursor-pointer hover:underline'>About Us</li>
            </ul>
        </div>
        <button className='border-2 rounded-full px-8 py-2'>Create Blog</button>
    </div>
  )
}

export default Header