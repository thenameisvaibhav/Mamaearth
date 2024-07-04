import React from 'react'

const Category = () => {
    return (
        <div className='w-full my-5 md:my-10'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl px-5 md:px-10 lg:px-14 tracking-tighter font-semibold font-["Helvetica"] mb-6 md:mb-12 lg:mb-16 text-center'>Our Range</h1>
            <div className="category pl-3 md:px-9 lg:px-14 w-full overflow-x-auto flex gap-3 md:gap-9 lg:gap-14 whitespace-nowrap overflow-hidden">
                <div className="category1 flex-shrink-0">
                    <div className="categorycontainer font-['Helvetica']">
                        <div className="w-60 md:w-96 h-96 md:h-[50vh] lg:h-[60vh]">
                            <div className="image w-full">
                                <img className='w-full object-cover' src="/images/face.webp" alt="" />
                            </div>
                            <button className='w-full font-semibold py-3 md:py-9 backdrop-blur-md relative top-0 left-0 -translate-x-0 -translate-y-[100%] md:-translate-y-[150%] lg:-translate-y-[190%] text-xl md:text-2xl lg:text-3xl md:font-bold uppercase'>Face</button>
                        </div>
                    </div>
                </div>
                <div className="category2 flex-shrink-0">
                    <div className="categorycontainer font-['Neue']">
                        <div className="w-60 md:w-96 h-96 md:h-[50vh] lg:h-[60vh]">
                            <div className="image w-full">
                                <img className='w-full h-full object-cover' src="/images/Hair.webp" alt="" />
                            </div>
                            <button className='w-full font-semibold py-3 md:py-9 backdrop-blur-md relative top-0 left-0 -translate-x-0 -translate-y-[100%] md:-translate-y-[150%] lg:-translate-y-[190%] text-xl md:text-2xl lg:text-3xl md:font-bold uppercase'>Hair</button>
                        </div>
                    </div>
                </div>
                <div className="category3 flex-shrink-0">
                    <div className="categorycontainer font-['Neue']">
                        <div className="w-60 md:w-96 h-96 md:h-[50vh] lg:h-[60vh]">
                            <div className="image w-full">
                                <img className='w-full h-full object-cover' src="/images/Baby.webp" alt="" />
                            </div>
                            <button className='w-full font-semibold py-3 md:py-9 backdrop-blur-md relative top-0 left-0 -translate-x-0 -translate-y-[100%] md:-translate-y-[150%] lg:-translate-y-[190%] text-xl md:text-2xl lg:text-3xl md:font-bold uppercase'>Baby</button>
                        </div>
                    </div>
                </div>
                <div className="category4 flex-shrink-0">
                    <div className="categorycontainer font-['Neue']">
                        <div className="w-60 md:w-96 h-96 md:h-[50vh] lg:h-[60vh]">
                            <div className="image w-full">
                                <img className='w-full h-full object-cover' src="/images/Makeup.webp" alt="" />
                            </div>
                            <button className='w-full font-semibold py-3 md:py-9 backdrop-blur-md relative top-0 left-0 -translate-x-0 -translate-y-[100%] md:-translate-y-[150%] lg:-translate-y-[190%] text-xl md:text-2xl lg:text-3xl md:font-bold uppercase'>Makeup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category