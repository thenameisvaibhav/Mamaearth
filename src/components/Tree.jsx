import React from 'react'

const Tree = () => {
  return (
    <div className="w-full mt-5 md:mt-10">
      <div className="w-full h-full lg:h-96 bg-[url(/images/Tree.avif)] bg-cover">
        <div className="text">
          <h1 className='text-4xl md:text-6xl lg:text-7xl px-5 md:px-10 lg:px-14 tracking-tighter font-semibold font-["Helvetica"] mb-2 md:mb-4 lg:mb-6 text-center'>We Plant Goodness</h1>
          <h1 className='text-6xl md:text-7xl lg:text-8xl px-5 md:px-10 lg:px-14 tracking-wide font-semibold font-["Helvetica"] mb-2 md:mb-4 lg:mb-6 text-center lg:mt-14'>509491</h1>
          <p className='text-center text-sm lg:mt-20'>Trees have got life already...</p>
          <p className='text-center text-sm mb-4 md:mb-8 lg:mb-12'>Everytime you buy from us, we plant more trees!</p>
        </div>
      </div>
    </div>
  )
}

export default Tree