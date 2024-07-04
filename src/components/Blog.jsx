import React from 'react'
import { FaArrowDown } from "react-icons/fa6";

const Blog = () => {
    return (
        <div className='w-full mt-5 px-5 font-["Helvetica"] text-center'>
            <h2 className='text-[1.8rem] md:text-[3.5rem] font-semibold'>Want to become younger!</h2>
            <FaArrowDown className='mt-2 text-4xl md:text-[3.5rem] inline-block relative md:left-56'/>
            <h4 className='text-3xl md:text-[3.5rem] mt-2'>Then checkout our <a href='#' className='uppercase font-bold border-[1px] underline underline-offset-4'>Blog</a></h4>
        </div>
    )
}

export default Blog