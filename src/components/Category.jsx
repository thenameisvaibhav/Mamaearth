import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'

const Category = () => {
    return (
        <div className='w-full my-5 md:my-10'>
            <motion.h1
                initial={{ y: '300%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: .5 }}
                className='text-5xl md:text-6xl lg:text-7xl px-5 md:px-10 lg:px-14 tracking-tighter font-semibold font-["Helvetica"] mb-6 md:mb-12 text-center'>Our Range</motion.h1>
            <div className="category pl-3 md:px-9 lg:px-14 w-full overflow-x-auto flex gap-3 md:gap-9 lg:gap-14 whitespace-nowrap">
                <Tilt>
                    <div className="category1 flex-shrink-0">
                        <div className="categorycontainer font-['Helvetica']">
                            <div className="w-60 md:w-96 h-96 md:h-[60vh] lg:h-[85vh]">
                                <div className="image w-full">
                                    <img className='w-full object-cover' src="/images/face.webp" alt="" />
                                </div>
                                <button className='w-full h-14 md:h-20 lg:h-24 font-semibold py-3 md:py-9 flex items-center justify-center backdrop-blur-md relative top-0 left-0 -translate-x-0 -translate-y-[100%] text-xl md:text-4xl lg:text-5xl md:font-bold uppercase tracking-wider text-white'>Face</button>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="category2 flex-shrink-0">
                        <div className="categorycontainer font-['Neue']">
                            <div className="w-60 md:w-96 h-96 md:h-[60vh] lg:h-[85vh]">
                                <div className="image w-full">
                                    <img className='w-full h-full object-cover' src="/images/Hair.webp" alt="" />
                                </div>
                                <button className='w-full h-14 md:h-20 lg:h-24 font-semibold py-3 md:py-9 flex items-center justify-center backdrop-blur-md relative top-0 left-0 -translate-x-0 -translate-y-[100%] text-xl md:text-4xl lg:text-5xl md:font-bold uppercase tracking-wider text-white'>Hair</button>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="category3 flex-shrink-0">
                        <div className="categorycontainer font-['Neue']">
                            <div className="w-60 md:w-96 h-96 md:h-[60vh] lg:h-[85vh]">
                                <div className="image w-full">
                                    <img className='w-full h-full object-cover' src="/images/Baby.webp" alt="" />
                                </div>
                                <button className='w-full h-14 md:h-20 lg:h-24 font-semibold py-3 md:py-9 flex items-center justify-center backdrop-blur-md relative top-0 left-0 -translate-x-0 -translate-y-[100%] text-xl md:text-4xl lg:text-5xl md:font-bold uppercase tracking-wider text-white'>Baby</button>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="category4 flex-shrink-0">
                        <div className="categorycontainer font-['Neue']">
                            <div className="w-60 md:w-96 h-96 md:h-[60vh] lg:h-[85vh]">
                                <div className="image w-full">
                                    <img className='w-full h-full object-cover' src="/images/Makeup.webp" alt="" />
                                </div>
                                <button className='w-full h-14 md:h-20 lg:h-24 font-semibold py-3 md:py-9 flex items-center justify-center backdrop-blur-md relative top-0 left-0 -translate-x-0 -translate-y-[100%] text-xl md:text-4xl lg:text-5xl md:font-bold uppercase tracking-wider text-white'>Makeup</button>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default Category