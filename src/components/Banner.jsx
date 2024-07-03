import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import React from 'react'
import { BiSolidOffer } from "react-icons/bi";


const Banner = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            repeat: -1,
        });

        tl.to('.banner-img', {
            transform: 'translateX(-100%)',
            duration: 1,
            ease: 'expo.inOut',
        }, '+=2')
            .to('.banner-img', {
                transform: 'translateX(-200%)',
                duration: 1,
                ease: 'expo.inOut',
            }, '+=2')
            .to('.banner-img', {
                transform: 'translateX(-300%)',
                duration: 1,
                ease: 'expo.inOut',
            }, '+=2')
            .to('.banner-img', {
                transform: 'translateX(-400%)',
                duration: 1,
                ease: 'expo.inOut',
            }, '+=2')
            .to('.banner-img', {
                transform: 'translateX(-500%)',
                duration: 1,
                ease: 'expo.inOut',
            }, '+=2')
    })
    return (
        <div className='w-full lg:flex lg:flex-row-reverse font-["Helvetica"] pt-1 lg:pt-5 lg:flex-1 lg:overflow-hidden'>
            <div className="image w-full lg:w-1/2 h-[37.5vh] md:h-[52vh] lg:h-full flex flex-nowrap overflow-hidden">
                <img className='banner-img w-full h-full object-cover object-top shrink-0' src="./src/assets/images/MamaFace.jpg" alt="" />
                <img className='banner-img w-full h-full object-cover object-top shrink-0' src="./src/assets/images/MamaMake.jpg" alt="" />
                <img className='banner-img w-full h-full object-cover object-center shrink-0' src="./src/assets/images/Mamasun.png" alt="" />
                <img className='banner-img w-full h-full object-cover object-center shrink-0' src="./src/assets/images/shap.jpg" alt="" />
                <img className='banner-img w-full h-full object-cover object-center shrink-0' src="./src/assets/images/Mamababyup.png" alt="" />
                <img className='banner-img w-full h-full object-cover object-top shrink-0' src="./src/assets/images/MamaFace.jpg" alt="" />
            </div>
            <div className="info px-5 md:pl-16 lg:pl-32 py-4 w-full lg:w-1/2 min-h-[35vh] lg:min-h-full">
                <motion.h3 initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: [0.83, 0, 0.17, 1], duration: .4, delay: .1 }} className='text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter pl-1'>Enchance your</motion.h3>
                <motion.h1 className='text-6xl md:text-7xl lg:text-[7.5rem] lg:leading-[6.5rem] font-bold leading-[3.7rem] tracking-tighter'>Beauty</motion.h1>
                <motion.h1 className='text-6xl md:text-7xl lg:text-[7.5rem] lg:leading-[6.5rem] font-bold leading-[3.7rem] tracking-tighter'>Naturally🌿</motion.h1>
                <motion.h5 className='text-xl md:text-2xl lg:text-3xl font-medium leading-none tracking-tighter mt-3'>That's our vision</motion.h5>
                <div className="shippingoffer w-fit flex items-center gap-2 mt-2 md:mt-5 px-4 rounded-lg py-1 lg:py-2 bg-[#FBD11B]">
                    <BiSolidOffer />
                    <h3 className='text-sm md:text-base lg:text-lg font-semibold tracking-tight leading-none'>Buy Any 3 Products @ FLAT Rs.899</h3>
                </div>
                <button className='bg-[#1F1F1F] text-white px-5 lg:px-8 py-3 mt-5 md:mt-8 lg:text-lg rounded-lg font-semibold active:scale-95'>Check Products</button>
            </div>
        </div>
    )
}

export default Banner