import { motion } from 'framer-motion'
import React from 'react'

const Tree = () => {
  return (
    <div className="w-full mt-5 md:mt-10">
      <div className="w-full h-full lg:h-96 bg-[url(/images/Tree.avif)] bg-cover">
        <div className="text">
          <motion.h1 initial={{ y: '300%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: .5 }}
            className='text-4xl md:text-6xl lg:text-7xl px-5 md:px-10 lg:px-14 tracking-tighter font-semibold font-["Helvetica"] mb-2 md:mb-4 lg:mb-6 text-center'>We Plant Goodness</motion.h1>
          {"509491".split('').map((item, index) =>
            <motion.span
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              transition={{ ease: [0.87, 0, 0.13, 1], delay: index * .05 }}
              className='inline-block text-4xl md:text-7xl lg:text-8xl px-5 md:px-10 lg:px-14 tracking-wide font-semibold font-["Helvetica"] mb-2 md:mb-4 lg:mb-6 text-center lg:mt-14 lg:ml-20' key={index}>{item}</motion.span>)}
          <p className='text-center text-sm lg:mt-20'>Trees have got life already...</p>
          <p className='text-center text-sm mb-4 md:mb-8 lg:mb-12'>Everytime you buy from us, we plant more trees!</p>
        </div>
      </div>
    </div>
  )
}

export default Tree