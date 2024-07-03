import React from 'react'
import Heading from './Heading'
import Navbar from './Navbar'
import Banner from './Banner'

const LandingPage = () => {
    return (
        <div className='w-full h-screen flex flex-col'>
            <Heading/>
            <Navbar/>
            <Banner/>
        </div>
    )
}

export default LandingPage