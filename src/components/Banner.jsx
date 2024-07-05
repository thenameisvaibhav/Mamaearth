import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { BiSolidOffer } from "react-icons/bi";


const Banner = () => {
    const text1Ref = useRef()
    const text2Ref = useRef()
    const text3Ref = useRef()
    const text4Ref = useRef()
    const offerRef = useRef()
    const btnRef = useRef()
    const imageRef = useRef()


    useGSAP(() => {
        const tl1 = gsap.timeline({
            repeat: -1,
        });

        const tl2 = gsap.timeline({
            delay: 1.38
        });

        tl1.to('.banner-img', {
            transform: 'translateX(-100%)',
            duration: .8,
            ease: 'sine.inOut',
        }, '+=2')
            .to('.banner-img', {
                transform: 'translateX(-200%)',
                duration: .8,
                ease: 'sine.inOut',
            }, '+=2')
            .to('.banner-img', {
                transform: 'translateX(-300%)',
                duration: .8,
                ease: 'sine.inOut',
            }, '+=2')
            .to('.banner-img', {
                transform: 'translateX(-400%)',
                duration: .8,
                ease: 'sine.inOut',
            }, '+=2')
            .to('.banner-img', {
                transform: 'translateX(-500%)',
                duration: .8,
                ease: 'sine.inOut',
            }, '+=2')


        tl2.from(text1Ref.current, {
            y: -100,
            duration: .3,
            rotate: 45,
            opacity: 0,
            ease: 'power4.inOut'
        },)
            .from(text2Ref.current, {
                y: -100,
                duration: .3,
                rotate: 45,
                opacity: 0,
                ease: 'power4.inOut'
            },)
            .from(text3Ref.current, {
                y: -100,
                duration: .3,
                rotate: 45,
                opacity: 0,
                ease: 'power4.inOut'
            },)
            .from(text4Ref.current, {
                y: -100,
                duration: .3,
                rotate: 45,
                opacity: 0,
                ease: 'power4.inOut'
            },)
            .from(offerRef.current, {
                x: -100,
                duration: .3,
                opacity: 0,
                ease: 'elastic.inOut'
            })
            .from(btnRef.current, {
                opacity: 0,
                duration: .3,
                ease: 'sine.inOut'
            })
            .from(imageRef.current, {
                opacity: 0,
                duration: .3,
                ease: 'sine.inOut'
            })
    })
    return (
        <div className='w-full lg:flex lg:flex-row-reverse font-["Helvetica"] pt-1 lg:pt-5 lg:flex-1 lg:overflow-hidden'>
            <div ref={imageRef} className="image w-full lg:w-1/2 h-[37.5vh] md:h-[52vh] lg:h-full flex flex-nowrap overflow-hidden">
                <img className='banner-img w-full h-full object-cover object-top shrink-0' src="/images/MamaFace.jpg" alt="" />
                <img className='banner-img w-full h-full object-cover object-top shrink-0' src="/images/MamaMake.jpg" alt="" />
                <img className='banner-img w-full h-full object-cover object-center shrink-0' src="/images/Mamasun.png" alt="" />
                <img className='banner-img w-full h-full object-cover object-center shrink-0' src="/images/shap.jpg" alt="" />
                <img className='banner-img w-full h-full object-cover object-center shrink-0' src="/images/Mamababyup.png" alt="" />
                <img className='banner-img w-full h-full object-cover object-top shrink-0' src="/images/MamaFace.jpg" alt="" />
            </div>
            <div className="info px-5 md:pl-16 lg:pl-32 py-4 w-full lg:w-1/2 min-h-[35vh] lg:min-h-full">
                <h3 ref={text1Ref} className='text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter pl-1'>Enchance your</h3>
                <h1 ref={text2Ref} className='text-6xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] lg:leading-[6.5rem] font-bold leading-[3.7rem] tracking-tighter'>Beauty</h1>
                <h1 ref={text3Ref} className='text-6xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] lg:leading-[6.5rem] font-bold leading-[3.7rem] tracking-tighter'>Naturally🌿</h1>
                <h5 ref={text4Ref} className='text-xl md:text-2xl lg:text-3xl font-medium leading-none tracking-tighter mt-3 '>That's our vision</h5>
                <div ref={offerRef} className="shippingoffer w-fit flex items-center gap-2 mt-2 md:mt-5 px-4 rounded-lg py-1 lg:py-2 bg-[#FBD11B]">
                    <BiSolidOffer />
                    <h3 className='text-sm md:text-base lg:text-lg font-semibold tracking-tight leading-none'>Buy Any 3 Products @ FLAT Rs.899</h3>
                </div>
                <motion.button whileHover={{ scale: 1.1, backgroundColor: '#FFF', color: '#111', duration: 2 }} whileTap={{scale: .9}} ref={btnRef} className='bg-zinc-800 text-white px-5 lg:px-8 py-3 mt-5 md:mt-8 lg:text-lg rounded-lg font-semibold'>Check Products</motion.button>
            </div>
        </div>
    )
}

export default Banner