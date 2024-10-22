'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { almarai, boldaeonikFont, epilogue, mediumaeonikFont, regularaeonikFont } from '@/utils/font'

import laughingstar from '@/public/about/laughingstar.png'
import ai from '@/public/about/Ai.png'
import assistant from '@/public/about/assistant.png'
import oncampus from '@/public/about/on-campus.png'
import drives from '@/public/about/drives.png'
import eyeemji from '@/public/about/eyeemoji.png'
import Revealcompo from '../Revealcompo'



const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component is mounted
    }, []);

    return (
        <div className='tml:pt-[92px] tml:px-2 tml:pb-4 btl:pt-20 btl:px-6 btl:pb-6 bmLLL:pt-[116px] lg:mx-auto bmLLL:px-[64px] bmLLL:pb-[64px] pt-[116px] px-16 pb-12 flex items-center flex-none h-min justify-center relative w-full '>

            <Revealcompo css={'flex flex-col bg-[#cfff92] rounded-[20px] flex-grow-[1] flex-shrink-0 basis-0 tml:h-auto gap-0 tml:min-h-0 min-h-[600px] justify-start  items-center bmL4k:max-w-[1312px] max-w-[1640px] p-0 relative w-full'}>
                <div className=' bmLLL:p-[64px] bmL4k:p-[64px] tml:p-3 p-16 bmLLL:pt-0 bmL4k:pt-0 pt-0 tml:w-full bmLLL:w-full w-[85%] flex flex-col flex-none items-center justify-start gap-6 h-min relative'>
                    <div className='flex justify-start flex-col flex-shrink-0 mt-20 flex-none h-auto relative whitespace-pre-wrap w-full'>
                        <p className={`${epilogue.className} font-semibold text-[#015840] text-[20px] tracking-[-.5px] leading-[2rem] text-center tml:p-2  m-0 p-0`}>About Cue</p>
                    </div>
                    <div className='flex-none h-auto relative flex justify-center mt-2  whitespace-pre-wrap w-full'>
                        <h2 className={` ${epilogue.className} font-medium  text-[#015840]/[.85] text-[1.65rem]   tml:w-full max-w-[650px]   tracking-[-.5px] leading-[1.7] md:leading-[2]  text-center `}>
                            Our mission is to be the trusted AI partner for students,
                            simplifying the on-campus placement process and
                            helping them land their dream jobs
                        </h2>
                    </div>
                </div>
                <div className='bmLLL:h-auto   flex-none relative w-full  '>
                    <div className='flex justify-center items-end'>
                        <div className=' relative flex-grow   max-w-[150px] h-[150px] lg:max-w-[200px] lg:h-[200px]'>

                            <Image src={laughingstar} alt='' fill={true} />
                        </div>
                        <div className=' relative flex-grow max-w-[80px] h-[80px] lg:max-w-[101px] -ml-3 lg:h-[100px]'>

                            <Image src={ai} alt='' fill={true} />
                        </div>
                        <div className=' relative tml:hidden flex-grow max-w-[170px] h-[170px] lg:max-w-[281px] -mb-3  lg:mb-16 -ml-3 lg:-ml-5 lg:h-[114px]'>

                            <Image src={assistant} alt='' width={170} height={70} className='lg:hidden absolute bottom-0' />
                            <Image src={assistant} alt='' width={281} height={114} className='hidden lg:block' />
                        </div>
                        <div className=' relative flex-grow tml:hidden max-w-[170px] h-[70px] lg:max-w-[293px]  lg:-ml-12 lg:h-[100px]'>

                            <Image src={oncampus} alt='' fill={true} />
                        </div>
                        <div className=' relative tml:hidden flex-grow max-w-[50px] h-[180px] lg:max-w-[75px]  ml-2 -mb-16 lg:h-[294px]'>

                            <Image src={drives} alt='' fill={true} />
                        </div>
                        <div className='  relative flex-grow max-w-[120px] h-[120px] lg:max-w-[180px]  ml-2  lg:h-[180px]'>

                            <Image src={eyeemji} alt='' fill={true} />
                        </div>
                        {/* <div className='absolute  amLL:hidden  w-full h-full'>
              {/* <Image src={herosmall} alt='' fill={true} /> */}
                        {/* </div> */}
                    </div>
                </div>
            </Revealcompo>
        </div>
    )
}

export default About
