import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import 'remixicon/fonts/remixicon.css';
import { IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
    const tl = useRef(gsap.timeline({ paused: true }));

    useEffect(() => {
        tl.current
            .to('.full', {
                right: 0,
                duration: 0.8,
                ease: 'cric.out(1.7)'
            })
            .from('.full h4', {
                x: 150,
                duration: 0.7,
                stagger: 0.3,
                opacity: 0,
                ease: 'back.inOut'
            })
            .from('.full i', {
                opacity: 0,
                ease: 'power4.out'
            })
    }, []);
    return (
        <div className='w-full flex items-center justify-between px-5 md:px-10 lg:px-14 py-2 lg:py-5 font-["Neue"] overflow-x-hidden'>
            <div className="logo">
            <img className='w-48 object-contain' src="src\assets\images\MamaLogo.png" alt="" />
            </div>
            <div className="nav1 lg:flex lg:gap-7 hidden">
                {['Home', 'Products', 'About Us', 'Blog'].map((item, index) => (
                    <a key={index} href="#" className={`tracking-wide font-medium text-xl hover:text-2xl transition-all`}>{item}</a>
                ))}
            </div>
            <div className="nav2 hidden lg:flex">
                <a href="#" className='tracking-wide font-medium text-xl hover:text-2xl transition-all'>Contact Us</a>
            </div>
            <IoMenuOutline onClick={() => tl.current.play()} className='w-10 h-10 lg:hidden' />
            <div className="full h-screen w-full absolute top-0 -right-full bg-black px-10 py-36 backdrop-blur lg:hidden">
                <h4 className='text-5xl md:text-8xl font-medium mb-6 md:mb-12 text-white'>Home</h4>
                <h4 className='text-5xl md:text-8xl font-medium mb-6 md:mb-12 text-white'>Products</h4>
                <h4 className='text-5xl md:text-8xl font-medium mb-6 md:mb-12 text-white'>About Us</h4>
                <h4 className='text-5xl md:text-8xl font-medium mb-6 md:mb-12 text-white'>Blog</h4>
                <h4 className='text-5xl md:text-8xl font-medium text-white'>Contact Us</h4>
                <i onClick={() => tl.current.reverse()} className="ri-close-large-fill absolute top-12 right-6 md:right-20 bg-white rounded-full px-5 py-4 font-bold text-xl cursor-pointer" ></i>
            </div>
        </div>
    )
}

export default Navbar