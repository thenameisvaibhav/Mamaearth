import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowDown } from "react-icons/fa6";

const Blog = () => {
    return (
        <div 
            className='w-full mt-5 px-5 font-["Helvetica"] text-center'>
            <h2 className='text-[1.8rem] md:text-[3.5rem] font-semibold'>Want to become younger!</h2>
            <FaArrowDown className='arrow mt-2 text-4xl md:text-[3.5rem] inline-block relative md:left-56 hover:rotate-180 hover:transition-all' />
            <h4 className='text-3xl md:text-[3.5rem] mt-2'>Then checkout our <a href='#' className='uppercase font-bold border-[1px] underline underline-offset-4 hover:underline-offset-8 hover:transition-all'>Blog</a></h4>
        </div>
    )
}

export default Blog