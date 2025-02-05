import { motion } from 'framer-motion'
import React from 'react'

const Review = () => {
    return (
        <div className='w-full my-9 px-5 flex justify-center'>
            <div className='md:w-96'>
                <motion.h1 initial={{ y: '300%', opacity: 0 }}
                    whileInView={{ y: '0%', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2 }}  className='text-5xl tracking-tighter font-semibold font-["Helvetica"] mb-5 text-center'>Your Opinion Counts</motion.h1>
                <h5 className='font-["Neue"] text-md font-bold text-center'>" I wanted to use natural products for my baby and came across Mamaearth. I use its Baby Shampoo, Body Wash for Babies and Baby Hair Oil, and they all work very effectively. So if you are looking for a brand with an app, a safe and secure payment gateway, and a wide range of toxin-free products, Mamaearth is the one for you! "</h5>
                <h6 className='mt-2 font-["Neue"] font-semibold text-center md:text-xl'>- Gina</h6>
            </div>
        </div>
    )
}

export default Review
