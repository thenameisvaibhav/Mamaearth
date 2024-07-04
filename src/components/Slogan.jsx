import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Slogan = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            repeat: -1,
        });

        tl.to('.mid-img', {
            transform: 'translateX(-100%)',
            duration: 1,
            ease: 'expo.inOut',
        }, '+=3')
            .to('.mid-img', {
                transform: 'translateX(-200%)',
                duration: 1,
                ease: 'expo.inOut',
            }, '+=3')
            .to('.mid-img', {
                transform: 'translateX(-300%)',
                duration: 1,
                ease: 'expo.inOut',
            }, '+=3')
            .to('.mid-img', {
                transform: 'translateX(-400%)',
                duration: 1,
                ease: 'expo.inOut',
            }, '+=3')
    })
    return (
        <div className='w-full'>
            <div className="image w-full h-full flex flex-nowrap overflow-hidden">
                <img className="mid-img" src="/images/Facemid.avif" alt='' />
                <img className="mid-img" src="/images/MamaShamid.avif" alt='' />
                <img className="mid-img" src="/images/Mamababymid.avif" alt='' />
                <img className="mid-img" src="/images/Mamalipmid.avif" alt='' />
                <img className="mid-img" src="/images/Facemid.avif" alt='' />
            </div>
        </div>
    )
}

export default Slogan