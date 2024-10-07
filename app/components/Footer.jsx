import Image from 'next/image'
import React from 'react'
import footerbg from '@/public/footerbg.svg'
import prentuslogo from '@/public/prentusfootlogo.svg'
import { almarai, epilogue, mediumaeonikFont, regularaeonikFont } from '@/utils/font'
import appstore from '@/public/appstore.svg'
import playstore from '@/public/playstore.svg'
import linkdedin from '@/public/linkedin.svg'
import x from '@/public/x.svg'
import yourtube from '@/public/youtube.svg'
import insta from '@/public/insta.svg'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='flex items-center flex-none justify-center h-min tml:pt-16 tml:px-2 tml:pb-4 btl:pt-0 btl:px-6 btl:pb-6 bmLLL:pt-0 bmLLL:px-16 bmLLL:pb-16 py-[64px] relative w-full '>
            <div className='tml:w-full bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] rounded-[24px] flex flex-grow flex-shrink-0 basis-0 '>
                <div className='w-full h-auto relative flex-none'>
                    <div className="flex flex-col items-center bg-[#311f40] w-full rounded-[24px]  flex-nowrap gap-[96px] justify-center h-min overflow-hidden p-[44px] relative ">

                        <div className='absolute bottom-0 h-[700px] overflow-visible right-0 top-[unset] inset-[0_-483px_-422px_0] md:overflow-hidden p-0 z-0'>
                            <div className=' h-[582px] rotate-[-45deg] lg:rotate-0 lg:h-[1022px] relative w-[1021px] lg:w-[1280px]'>
                                <div className='w-full h-full relative'>
                                    <Image src={footerbg} alt='' fill={true} />

                                </div>
                            </div>
                        </div>

                        <div className='flex flex-none flex-col amLL:flex-row flex-nowrap gap-[64px] amLL:gap-[10px] h-min justify-center overflow-hidden w-full p-0 relative '>
                            <div className='flex items-start flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-8 h-[424px] justify-start overflow-visible p-0 relative'>
                                <Link href="/" className='flex-none h-[60px]  relative w-[111px] '>
                                    <div className='w-full h-full bg-[#015840] flex items-center justify-center rounded-tl-[20px] rounded-tr-[50px] text-white text-[2rem] font-medium  leading-[1.9] rounded-br-[50px]'>
                                        cue.
                                    </div>
                                </Link>
                                <div className="flex flex-shrink-0 flex-none h-auto relative w-[283px] ">
                                    <p className={`${epilogue.className} font-normal  text-white text-[1rem] tracking-normal leading-[1.8] text-start m-0 p-0`}>The all-in-one career success platform to get from learning to earning using the power of AI, community, and you.</p>
                                </div>
                                <div className='flex flex-col flex-none gap-4 h-min rounded-[100px] justify-center overflow-hidden p-0 relative w-min'>
                                    <a href="" className='rounded-[100px] flex items-center float-none h-min relative w-min '>
                                        <div className='flex-shrink-0 bg-[length:100%_100%] rounded-[inherit] relative flex-none h-[56px] w-[188px] '>
                                            <Image src={appstore} alt='' fill={true} />
                                        </div>
                                    </a>
                                </div>
                                <div className='flex flex-col flex-none gap-4 h-min rounded-[100px] justify-center overflow-hidden p-0 relative w-min'>
                                    <a href="" className='rounded-[100px] flex items-center float-none h-min relative w-min '>
                                        <div className='flex-shrink-0 bg-[length:100%_100%] rounded-[inherit] relative flex-none h-[56px] w-[188px] '>
                                            <Image src={playstore} alt='' fill={true} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row items-start flex-grow flex-shrink-0 basis-0 flex-nowrap gap-8 h-min justify-start relative'>
                                <div className='flex items-start flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-6 h-min justify-start relative p-0'>
                                    <div className='flex-none h-auto relative whitespace-pre-wrap w-full break-words flex flex-shrink-0 flex-col justify-start '>
                                        <p className={`${epilogue.className} font-normal  text-[#ffffffa3] text-[1rem] tracking-normal  leading-[1.8] text-start m-0 p-0 `}>Jobseekers</p>
                                    </div>
                                    <div className={`flex flex-col ${almarai.className}  flex-none flex-nowrap gap-3  h-min justify-start relative w-full `}>
                                        <div className=' flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                            <p className={` font-normal text-[#ffffff] text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className=''>Overview</a>
                                            </p>
                                        </div>
                                        <div className=' flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                            <p className={` font-normal text-[#ffffff] text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className=''>Pricing</a>
                                            </p>
                                        </div>
                                        <div className=' flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                            <p className={` font-normal text-[#ffffff] text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className=''>Sign Up</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-start flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-6 h-min justify-start relative p-0'>
                                    <div className='flex-none h-auto relative whitespace-pre-wrap w-full break-words flex flex-shrink-0 flex-col justify-start '>
                                        <p className={`${epilogue.className} font-normal  text-[#ffffffa3] text-[1rem] tracking-normal  leading-[1.8] text-start m-0 p-0 `}>Schools</p>
                                    </div>
                                    <div className={`${almarai.className} flex flex-col flex-none flex-nowrap gap-3  h-min justify-start relative w-full `}>
                                        <div className={` flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full   `}>
                                            <p className={` font-normal text-[#ffffff] text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className=''>Overview</a>
                                            </p>
                                        </div>
                                        <div className=' flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                            <p className={` font-normal text-[#ffffff] text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className=''>Pricing</a>
                                            </p>
                                        </div>
                                        <div className=' flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                            <p className={` font-normal text-[#ffffff] text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className=''>Carrer Services</a>
                                            </p>
                                        </div>
                                        <div className=' flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                            <p className={` font-normal text-[#ffffff] text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className='whitespace-nowrap'>Employment Partner Tools</a>
                                            </p>
                                        </div>
                                        <div className=' flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                            <p className={`${regularaeonikFont.className} font-normal text-[#ffffff] text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className=''>Job Placement Tracking</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-start flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-6 h-min justify-start relative p-0'>
                                    <div className='flex-none h-auto relative whitespace-pre-wrap w-full break-words flex flex-shrink-0 flex-col justify-start '>
                                        <p className={`${epilogue.className} font-normal  text-[#ffffffa3] text-[1rem] tracking-normal  leading-[1.8] text-start m-0 p-0 `}>Company</p>
                                    </div>
                                    <div className={` ${almarai.className} flex flex-col flex-none flex-nowrap gap-3  h-min justify-start relative w-full `}>
                                        <div className=' flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                            <p className={` font-normal text-[#ffffff] text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className='font-[inherit]'>Hire Talent</a>
                                            </p>
                                        </div>
                                        <div className=' flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                            <p className={` font-normal text-[#ffffff] text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className=''>About</a>
                                            </p>
                                        </div>
                                        <div className=' flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                            <p className={` font-normal text-[#ffffff] text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className=''>Blog</a>
                                            </p>
                                        </div>
                                        <div className=' flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full '>
                                            <p className={` font-normal text-[#ffffff] whitespace-nowrap text-[1rem] tracking-normal leading-[1.8] text-start `}>
                                                <a href="" className=''>Quickstart Case Study</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[44px] md:flex-row flex-none md:items-end flex-nowrap h-min justify-between overflow-hidden p-0 relative w-full'>
                            <div className='flex flex-col order-1 md:order-[0] flex-none items-start flex-nowrap gap-6 h-min justify-start relative w-min'>
                                <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre w-auto'>
                                    <p className={`${almarai.className} font-normal text-[#ffffffa3] text-[1rem] tracking-normal leading-[1.8] text-start `}>Chat with us here or on social</p>
                                </div>
                                <div className='flex flex-none items-start flex-nowrap gap-1 h-min justify-start relative w-min'>
                                    <a href="" className='bg-[#ffffff29] rounded-md flex-none h-[36px] overflow-hidden relative w-[44px] block'>
                                        <div className='h-[26px] left-[calc(50%-13px)] absolute top-[calc(50%-13px)] w-[26px] '>
                                            <div className='w-full h-full'>
                                                <Image src={linkdedin} alt='' fill={true} />
                                            </div>
                                        </div>
                                    </a>
                                    <a href="" className='bg-[#ffffff29] rounded-md flex-none h-[36px] overflow-hidden relative w-[44px] block'>
                                        <div className='h-[21px] left-[12px] absolute top-[7px]  w-[20px] '>
                                            <div className='w-full h-full'>
                                                <Image src={x} alt='' fill={true} />
                                            </div>
                                        </div>
                                    </a>
                                    <a href="" className='bg-[#ffffff29] rounded-md flex-none h-[36px] overflow-hidden relative w-[44px] block'>
                                        <div className='h-[26px] left-[calc(50%-14px)] absolute top-[calc(50%-13px)]  w-[28px] '>
                                            <div className='w-full h-full'>
                                                <Image src={yourtube} alt='' fill={true} />
                                            </div>
                                        </div>
                                    </a>
                                    <a href="" className='bg-[#ffffff29] rounded-md flex-none h-[36px] overflow-hidden relative w-[44px] block'>
                                        <div className='h-[26px] left-[calc(50%-14px)] absolute top-[calc(50%-13px)]  w-[26px] '>
                                            <div className='w-full h-full'>
                                                <Image src={insta} alt='' fill={true} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col order-2 md:order-1 justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre w-full md:w-auto'>
                                <p className={`${epilogue.className} text-center font-normal text-white text-[1rem] tracking-normal leading-[1.8] md:text-start   `}>
                                    © 2023 Prentus. All rights reserved.
                                </p>
                            </div>
                            <div className='flex flex-nowrap order-[0] md:order-2 gap-16 items-start h-min justify-start relative w-min'>
                                <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre w-auto'>
                                    <p className={`${almarai.className} font-normal text-white text-[1rem] tracking-normal leading-[1.8]  text-start `}>
                                        <a href="">Terms</a>
                                    </p>
                                </div>
                                <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre w-auto'>
                                    <p className={`${almarai.className} font-normal text-white text-[1rem] tracking-normal leading-[1.8]  text-start `}>
                                        <a href="">Privacy</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
