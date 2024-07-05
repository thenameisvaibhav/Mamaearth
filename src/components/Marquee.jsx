import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    return (
        <div className='w-full mt-9 md:mt-14'>
            <div className="text bg-gradient-to-r from-[#01afefc8] to-[#8ECC45] flex whitespace-nowrap font-['Found'] font-black uppercase overflow-hidden pt-8 md:pt-16 pb-4 md:pb-8">
                <motion.h1
                    initial={{ x: '0' }}
                    animate={{ x: '-100%' }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
                    className='text-5xl md:text-8xl lg:text-9xl relative top-0 left-0 translate-x-1 -translate-y-2 w-fit'>
                    <span className='ml-5 md:ml-10'>Toxin-Free</span>
                    <span className='ml-7 md:ml-14 lg:ml-20'>Cruelty-Free</span>
                    <span className='ml-7 md:ml-14 lg:ml-20'>Free Shipping</span>
                    <span className='ml-7 md:ml-14 lg:ml-20'>Mama's Favourite</span>
                    <span className='ml-7 md:ml-14 lg:ml-20'>Made with love ❤️</span>
                </motion.h1>
                <motion.h1
                    initial={{ x: '0' }}
                    animate={{ x: '-100%' }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
                    className='text-5xl md:text-8xl lg:text-9xl relative top-0 left-0 translate-x-1 -translate-y-2 w-fit'>
                    <span className='ml-5 md:ml-10'>Toxin-Free</span>
                    <span className='ml-7 md:ml-14 lg:ml-20'>Cruelty-Free</span>
                    <span className='ml-7 md:ml-14 lg:ml-20'>Free Shipping</span>
                    <span className='ml-7 md:ml-14 lg:ml-20'>Mama's Favourite</span>
                    <span className='ml-7 md:ml-14 lg:ml-20'>Made with love ❤️</span>
                </motion.h1>
            </div>
        </div>
    )
}

export default Marquee