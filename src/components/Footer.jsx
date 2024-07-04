import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='w-full bg-[#111] text-white py-5 md:py-10 px-5 md:px-10 font-["Helvetica"]'>
            <div className="upper lg:flex items-center justify-between">
                <img className='w-full lg:w-96 object-cover' src="images/MamaLogo.png" alt="" />
                <div className="support mt-10 md:mt-14 lg:block flex items-center justify-between border-b-[.1px] lg:border-b-0 border-zinc-400 pb-4 md:pb-8">
                    <h1 className='font-bold uppercase text-xl md:text-3xl lg:text-xl'>Customer Support</h1>
                    <h1 className='hidden text-lg mt-6 lg:block opacity-90'>Privacy Policy</h1>
                    <h1 className='hidden text-lg mt-4 lg:block opacity-90'>Returns</h1>
                    <h1 className='hidden text-lg mt-4 lg:block opacity-90'>Terms & Conditions</h1>
                    <h1 className='hidden text-lg mt-4 lg:block opacity-90'>We're Safe</h1>
                    <h1 className='text-2xl md:text-4xl lg:hidden'>+</h1>
                </div>
                <div className="shop mt-4 md:mt-8 flex lg:block items-center justify-between mb-10 lg:mb-0 lg:mr-52">
                    <h1 className='font-bold uppercase text-xl md:text-3xl lg:text-xl'>Shop Products</h1>
                    <h1 className='hidden text-lg mt-6 lg:block opacity-90'>Hair</h1>
                    <h1 className='hidden text-lg mt-4 lg:block opacity-90'>Face</h1>
                    <h1 className='hidden text-lg mt-4 lg:block opacity-90'>Baby</h1>
                    <h1 className='hidden text-lg mt-4 lg:block opacity-90'>Makeup</h1>
                    <h1 className='text-2xl md:text-4xl lg:hidden'>+</h1>
                </div>
            </div>
            <div className="social flex flex-wrap shrink-0 mt-5 border-y-[.1px] border-zinc-400 lg:mx-32">
                <div className="1 h-24 md:h-28 w-1/2 lg:w-1/4 border-r-[.1px] border-zinc-400 border-b-[.1px] lg:border-b-0 flex items-center justify-center gap-2 md:gap-5">
                    <FaFacebookSquare className='md:text-2xl' />
                    <h1 className='md:text-2xl'>Facebook</h1>
                </div>
                <div className="2 h-24 md:h-28 w-1/2 lg:w-1/4 border-b-[.1px] lg:border-b-0 lg:border-r-[.1px] flex items-center justify-center gap-2 md:gap-5 border-zinc-400">
                    <FaInstagram className='md:text-2xl' />
                    <h1 className='md:text-2xl'>Instagram</h1>
                </div>
                <div className="3 h-24 md:h-28 w-1/2 lg:w-1/4 border-r-[.1px] border-zinc-400 flex items-center justify-center gap-2 md:gap-5">
                    <FaYoutube className='md:text-2xl' />
                    <h1 className='md:text-2xl'>Youtube</h1>
                </div>
                <div className="4 h-24 md:h-28 w-1/2 lg:w-1/4 flex items-center justify-center gap-2 md:gap-5">
                    <BsTwitterX className='md:text-2xl' />
                    <h1 className='md:text-2xl'>X</h1>
                </div>
            </div>
            <div className="mt-10 text-center flex flex-col items-center justify-center gap-2 text-zinc-300">
                <h1 className='md:text-xl'>Refund policy  |  Privacy policy |</h1>
                <h1 className='md:text-xl'>Terms of service | Shipping policy |</h1>
            </div>
            <div className="w-full flex justify-center items-center my-9">
                <div className="flex justify-center gap-5 items-center w-1/2 lg:w-1/3">
                    <img src="/images/Google.png" alt="" className='' />
                    <img src="/images/Apple.png" className='' alt="" />
                </div>
            </div>

            <h1 className='md:mt-10 md:text-xl'>© 2024 Honasa Consumer Limited. All Rights Reserved</h1>
            <h1 className='text-center md:text-xl mt-5'>Made with ❤️</h1>
        </footer>
    )
}

export default Footer