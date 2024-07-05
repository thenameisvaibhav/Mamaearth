import { delay, motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'

const BestSeller = () => {
    return (
        <div className='bestseller mt-4 lg:mt-8 mb-5 md:mb-10'>
            <motion.h1 initial={{ y: '300%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: .5 }} className='text-5xl md:text-6xl lg:text-7xl px-5 md:px-10 lg:px-14 tracking-tighter font-semibold font-["Helvetica"] text-center mb-6 md:mb-12 lg:mb-16'>Best Sellers</motion.h1>
            <div className="products px-3 md:px-9 lg:px-14 w-full overflow-x-scroll flex gap-3 md:gap-9 lg:gap-14 whitespace-nowrap">
                <div className="product1 flex-shrink-0">
                    <motion.div initial={{ y: '-100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ ease: [0.16, 1, 0.3, 1], duration: 2, delay: .4 }} className="productcontainer font-['Neue']">
                        <div className="w-60 md:w-80">
                            <div className="image flex items-center justify-center rounded-t-xl w-full h-72 md:h-[40vh] lg:h-[60vh] bg-gradient-to-r from-[#e36f06] to-[#C81E20] hover:pb-20">
                                <img className='drop-shadow-[0_10px_0.1px_rgba(0,0,0,0.24)]' src="/images/pro1.png" alt="" />
                            </div>
                            <div className="productdesc flex items-center justify-between px-5 md:px-8 py-3 md:py-5 bg-gradient-to-r from-[#e37106ac] to-[#c81e219a] rounded-b-xl">
                                <h3 className='font-bold  md:text-xl'>Ubtan Face Wash</h3>
                                <h3 className='font-bold md:text-xl'>₹ 337</h3>
                            </div>
                        </div>
                    </motion.div>
                    <Tilt>
                        <motion.button initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ ease: [0.16, 1, 0.3, 1], duration: .4 }} whileTap={{ scale: .9 }} className='w-full mt-1 md:mt-2 font-semibold rounded-xl py-3 md:py-5 md:text-xl bg-gradient-to-r from-[#e37106ac] to-[#c81e219a]'>Add to Cart</motion.button>
                    </Tilt>
                </div>
                <div className="product2 flex-shrink-0">
                    <motion.div initial={{ y: '-100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ ease: [0.16, 1, 0.3, 1], duration: 2, delay: .4 }} className="productcontainer font-['Neue']">
                        <div className="w-60 md:w-80">
                            <div className="image flex items-center justify-center rounded-t-xl w-full h-72 md:h-[40vh] lg:h-[60vh] bg-gradient-to-r from-[#e36f06] to-[#E1A500] hover:pb-20">
                                <img className='drop-shadow-[0_10px_0.1px_rgba(0,0,0,0.24)]' src="/images/pro2.png" alt="" />
                            </div>
                            <div className="productdesc flex items-center justify-between px-5 md:px-8 py-3 md:py-5 bg-gradient-to-r from-[#e37106ac] to-[#e1a50096] rounded-b-xl">
                                <h3 className='font-bold md:text-xl'>Vitamin C Sunscreen</h3>
                                <h3 className='font-bold md:text-xl'>₹ 429</h3>
                            </div>
                        </div>
                    </motion.div>
                    <Tilt>
                        <motion.button initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ ease: [0.16, 1, 0.3, 1], duration: .4 }} whileTap={{ scale: .9 }} className='w-full mt-1 md:mt-2 font-semibold rounded-xl py-3 md:py-5 md:text-xl bg-gradient-to-r from-[#e37106ac] to-[#e1a50096]'>Add to Cart</motion.button>
                    </Tilt>
                </div>
                <div className="product3 flex-shrink-0">
                    <motion.div initial={{ y: '-100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ ease: [0.16, 1, 0.3, 1], duration: 2, delay: .4 }} className="productcontainer font-['Neue']">
                        <div className="w-60 md:w-80">
                            <div className="image flex items-center justify-center rounded-t-xl w-full h-72 md:h-[40vh] lg:h-[60vh] bg-gradient-to-r from-[#E8BD7C] to-[#BA4E5E] hover:pb-20">
                                <img className='drop-shadow-[0_10px_0.1px_rgba(0,0,0,0.24)]' src="/images/Mamaonion.png" alt="" />
                            </div>
                            <div className="productdesc flex items-center justify-between px-5 md:px-8 py-3 md:py-5 bg-gradient-to-r from-[#e8bd7cb1] to-[#ba4e5eb2] rounded-b-xl">
                                <h3 className='font-bold md:text-xl'>Onion Shampoo</h3>
                                <h3 className='font-bold md:text-xl'>₹ 429</h3>
                            </div>
                        </div>
                    </motion.div>
                    <Tilt>
                        <motion.button initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ ease: [0.16, 1, 0.3, 1], duration: .4 }} whileTap={{ scale: .9 }} className='w-full mt-1 md:mt-2 font-semibold rounded-xl py-3 md:py-5 md:text-xl bg-gradient-to-r from-[#e8bd7cb1] to-[#ba4e5eb2]'>Add to Cart</motion.button>
                    </Tilt>
                </div>
                <div className="product4 flex-shrink-0">
                    <motion.div initial={{ y: '-100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ ease: [0.16, 1, 0.3, 1], duration: 2, delay: .4 }} className="productcontainer font-['Neue']">
                        <div className="w-60 md:w-80">
                            <div className="image flex items-center justify-center rounded-t-xl w-full h-72 md:h-[40vh] lg:h-[60vh] bg-gradient-to-l from-[#e36f06] to-[#E1A500] hover:pb-20">
                                <img className='drop-shadow-[0_10px_0.1px_rgba(0,0,0,0.24)]' src="/images/Mamaserum.png" alt="" />
                            </div>
                            <div className="productdesc flex items-center justify-between px-5 md:px-8 py-3 md:py-5 bg-gradient-to-l from-[#e37106ac] to-[#e1a50096] rounded-b-xl">
                                <h3 className='font-bold md:text-xl'>Vitamin C Serum</h3>
                                <h3 className='font-bold md:text-xl'>₹ 351</h3>
                            </div>
                        </div>
                    </motion.div>
                    <Tilt>
                        <motion.button initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ ease: [0.16, 1, 0.3, 1], duration: .4 }} whileTap={{ scale: .9 }} className='w-full mt-1 md:mt-2 font-semibold rounded-xl py-3 md:py-5 md:text-xl bg-gradient-to-l from-[#e37106ac] to-[#e1a50096]'>Add to Cart</motion.button>
                    </Tilt>
                </div>
                <div className="product5 flex-shrink-0">
                    <motion.div initial={{ y: '-100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ ease: [0.16, 1, 0.3, 1], duration: 2, delay: .4 }} className="productcontainer font-['Neue']">
                        <div className="w-60 md:w-80">
                            <div className="image flex items-center justify-center rounded-t-xl w-full h-72 md:h-[40vh] lg:h-[60vh] bg-gradient-to-r from-[#f8c1ff] to-[#F2B889] hover:pb-20">
                                <img className='drop-shadow-[0_10px_0.1px_rgba(0,0,0,0.24)]' src="/images/Mamaoil.png" alt="" />
                            </div>
                            <div className="productdesc flex items-center justify-between px-5 md:px-8 py-3 md:py-5 bg-gradient-to-r from-[#f8c1ffab] to-[#f2b889b6] rounded-b-xl">
                                <h3 className='font-bold md:text-xl'>Rosemary Oil</h3>
                                <h3 className='font-bold md:text-xl'>₹ 339</h3>
                            </div>
                        </div>
                    </motion.div>
                    <Tilt>
                        <motion.button initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ ease: [0.16, 1, 0.3, 1], duration: .4 }} whileTap={{ scale: .9 }} className='w-full mt-1 md:mt-2 font-semibold rounded-xl py-3 md:py-5 md:text-xl bg-gradient-to-r from-[#f8c1ffab] to-[#f2b889b6]'>Add to Cart</motion.button>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}

export default BestSeller