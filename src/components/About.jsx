import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
    return (
        <div className='w-full mt-5 md:mt-10'>
            <motion.h1
                initial={{ y: '300%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: .5 }}
                className='text-5xl md:text-6xl lg:text-7xl px-5 md:px-10 lg:px-14 tracking-tighter font-semibold font-["Helvetica"] mb-6 md:mb-12 lg:mb-16 text-center'>Want to Achieve</motion.h1>
            <div className="all font-['Neue'] lg:flex">
                <div className="image1 w-full lg:w-[25%] h-96 md:h-full flex items-center justify-center">
                    <div className="w-full h-96 md:h-[60vh] relative">
                        <img className='w-full h-full blur-sm object-cover' src="/images/Mamaemp.png" alt="" />
                    </div>
                    <div className="w-[80%] lg:w-[20%] h-[45%] lg:h-[36%] absolute">
                        <img className='w-full h-full object-cover' src="/images/Mamaemp.png" alt="" />
                        <h1 className='text-center text-xl md:text-4xl font-bold tracking-wide text-white'>Mum Empowerment</h1>
                    </div>
                </div>
                <div className="image2 w-full lg:w-[25%] h-96 md:h-full flex items-center justify-center">
                    <div className="w-full h-96 md:h-[60vh] relative">
                        <img className='w-full h-full blur-sm object-cover' src="/images/MamaSaf.jpg" alt="" />
                    </div>
                    <div className="w-[80%] lg:w-[20%] h-[45%] lg:h-[36%] absolute">
                        <img className='w-full h-full object-cover' src="/images/MamaSaf.jpg" alt="" />
                        <h1 className='text-center text-xl md:text-4xl font-bold tracking-wide text-white'>Safety</h1>
                    </div>
                </div>
                <div className="image3 w-full lg:w-[25%] h-96 md:h-full flex items-center justify-center">
                    <div className="w-full h-96 md:h-[60vh] relative">
                        <img className='w-full h-full blur-sm object-cover' src="/images/Mamahon.png" alt="" />
                    </div>
                    <div className="w-[80%] lg:w-[20%] h-[45%] lg:h-[36%] absolute">
                        <img className='w-full h-full object-cover' src="/images/Mamahon.png" alt="" />
                        <h1 className='text-center text-xl md:text-4xl font-bold tracking-wide text-white'>Honesty</h1>
                    </div>
                </div>
                <div className="image4 w-full lg:w-[25%] h-96 md:h-full flex items-center justify-center">
                    <div className="w-full h-96 md:h-[60vh] relative">
                        <img className='w-full h-full blur-sm object-cover' src="/images/Fruit.avif" alt="" />
                    </div>
                    <div className="w-[80%] lg:w-[20%] h-[45%] lg:h-[36%] absolute">
                        <img className='w-full h-full object-cover' src="/images/Fruit.avif" alt="" />
                        <h1 className='text-center text-xl md:text-4xl font-bold tracking-wide text-white'>Best of Earth</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About