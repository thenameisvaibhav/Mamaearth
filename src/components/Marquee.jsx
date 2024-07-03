import React from 'react'

const Marquee = () => {
    return (
        <div className='w-full mt-9 md:mt-14'>
            <div className="text bg-gradient-to-r from-[#01afefc8] to-[#8ECC45] text-white flex whitespace-nowrap font-['Helvetica_Now_Display'] font-semibold uppercase overflow-hidden pt-8 md:pt-16 pb-4 md:pb-8">
                <h1
                    className='text-5xl md:text-8xl relative top-0 left-0 translate-x-1 -translate-y-2'>
                    <span className='ml-5 md:ml-10'>Toxin-Free</span>
                    <span className='ml-5 md:ml-10'>Cruelty-Free</span>
                    <span className='ml-5 md:ml-10'>100% Safe</span>
                    <span className='ml-5 md:ml-10'>Mama's Favourite</span>
                    <span className='ml-5 md:ml-10'>Made with love ❤️</span>
                    </h1>
            </div>
        </div>
    )
}

export default Marquee