'use client'
import React, { useEffect } from 'react'
import Revealcompo from '../Revealcompo'
import { archivo } from '@/utils/font'

const Hero = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component is mounted
    }, []);

    return (
        <div className=" overflow-hidden  relative w-full btl:pt-[80px] btl:px-6 btl:pb-6 bmLLL:pt-[116px] bmLLL:px-16 bmLLL:pb-16 tml:pt-[116px] tml:px-2 tml:pb-4 pt-[126px] px-16 pb-16 flex-none h-min justify-center flex-col items-center">

            <Revealcompo css={"bg-[#CFFF92] mx-auto  bmL4k:max-w-[1312px]  max-w-[1640px] flex tml:items-start items-center tml:justify-start tml:rounded-bl-[0px] tml:rounded-br-[0px] rounded-[30px]  flex-grow flex-shrink-0 basis-0 flex-col h-auto   px-2 w-full "}>

                <h2 className={`w-full hidden md:block tml:mt-10 pl-2 mt-20 lg:mt-36 ${archivo.className} font-semibold text-black/90 tml:text-[2rem] tml:text-start text-[2rem] md:text-[3rem] tml:leading-[1.6]   leading-[1.7]   text-center`}>
                    <span className="inline-block tracking-[-.5px]">
                        Your smart companion for
                    </span>
                    <br /><span className="inline-block ml-1 tracking-[-.5px]">

                        on-campus placement success
                    </span>
                </h2>
                <h2 className={`w-full px-2  md:hidden  text-left mt-16 ${archivo.className} font-semibold text-[2rem] text-black/90 leading-[1.7] tracking-[-0.5px] text-center`}>
                    <span className="inline-block text-left ">
                        Your smart companion for  on-campus placement success
                    </span>

                </h2>

                <p className={`px-2 ${archivo.className} font-normal max-w-[659px]  xl:w-[70%] text-[1.1rem] md:text-[1.375rem] leading-[2] tracking-[.015em] tml:text-start text-center text-[#2C2C2C] mt-4 `}>
                    Transform your on-campus placement experience with cutting-
                    edge AI solutions designed to guide, support, and empower you
                    every step of the way.
                </p>
                <a href='https://tally.so/r/nWp9RQ' target='_blank' class=" tml:self-start tml:ml-4 flex flex-grow items-center cursor-pointer  gap-[10px] h-min overflow-visible px-[24px] py-[16px] relative no-underline w-min hover:bg-[#ff7a05] bg-[rgb(255,_143,_62)] opacity-100 mt-8 rounded-[100px]">
                    <div class="   h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                        <p class={`box-border  m-0 p-0 ${archivo.className} text-[1rem] `}>Get Started</p>
                    </div>
                </a>

                <div className="w-full md:max-w-[519px] tml:h-min h-[672px] bg-white tml:border-[5px] border-[10px] mt-12 flex flex-col  pr-5 rounded-t-[40px] border-[#CFFF92]/[.5]">
                    <div className='rounded-[20px] h-[40px] flex text-center  justify-center w-[40px] mt-14 ml-5  bg-[#cfff92]'>
                        <h1 className={`text-[1.9rem] leading-[.2] mt-[-2px] self-center text-[#000]/[.5] ${archivo.className}  font-medium`}>c</h1>
                        {/* c */}
                    </div>
                    {/* <Image src={c} alt="" width={40} height={42} className="mt-14 ml-5" /> */}
                    <div className={`bg-[#CFFF92]/[.2] w-[80%] md:max-w-[412px] tml:h-min h-[288px] ml-5 mt-3 rounded-[10px] flex flex-col gap-5 py-5   px-5 pr-2 text-[#000000]/[.8] ${archivo.className}`} >
                        <p className=" text-[1rem] md:text-[1.25rem] leading-[2] font-normal tracking-wide">
                            Hello
                        </p>
                        <p className=" max-w-[344px] tracking-[.015em] text-[.9rem] md:text-[1.125rem] font-normal leading-[2]">I’m your helpful AI assistant to navigate
                            on-campus placements like a pro. Let
                            me know what you need help with to get
                            started!</p>
                    </div>
                    <div className={`bg-[#E2FFBD] w-[80%] px-1 md:max-w-[341px]  mt-8   pl-5 tml:pr-4 py-5     rounded-[10px] font-normal text-[.9rem]  md:text-[1.125rem] leading-[1.75] tracking-[0.015em]  self-end  ${archivo.className}  `}>
                        I was just wondering on what to
                        prepare for upcoming Stripe OA.
                    </div>
                    <div className="mt-8 ml-5 mb-4 flex gap-5 items-center">
                        <div className='rounded-[20px] h-[40px] flex text-center  justify-center w-[40px]   bg-[#cfff92]'>
                            <h1 className={`text-[1.9rem] leading-[.6] mt-[-2px] self-center text-[#000]/[.5] ${archivo.className}  font-medium`}>c</h1>
                            {/* c */}
                        </div>
                        {/* <Image src={c} alt="" width={40} height={42} className="" /> */}
                        <div className="bg-[#CFFF92]/[.2] rounded-[10px] w-[56px] h-[28px] "></div>
                    </div>

                </div>

            </Revealcompo>
        </div>
    )
}

export default Hero
