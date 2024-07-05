import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Heading = () => {
    const headRef = useRef()
    useGSAP(()=>{
        gsap.from(headRef.current,{
            y: -100,
            opacity: 0,
            duration: 1.2,
        })
    })
    return (
        <div ref={headRef} className='heading w-full bg-[#c9ff97cc] py-2 md:py-4 px-5 md:px-0'>
            <h4 className='text-center leading-5 font-["Neue"] capitalize'>Asia's 1st Brand with <span className='font-semibold'>MADE SAFE</span> Certified Products</h4>
        </div>
    )
}

export default Heading