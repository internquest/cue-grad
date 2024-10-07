'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import black from '@/public/AI Job Search Platform _ Prentus/download (3).svg'
import white from '@/public/AI Job Search Platform _ Prentus/download (2).svg'
import { almarai, epilogue, mediumaeonikFont, regularaeonikFont } from '@/utils/font'

const FaqIndividual = ({ defaultstate, question, solution, indexed }) => {
    const [open, setOpen] = useState(defaultstate)
    const handleClick = () => {

        setOpen(!open)
    }



    return (
        <motion.div initial={!open ? { transform: 'scale(1,1.8)', } : { transform: 'scale(1,0.5)', }} animate={{ transform: 'scale(1,1)' }} onClick={() => handleClick()} className={`w-full ${!open ? "hover:bg-[#fdf3ea] bg-[rgb(252,242,232,0)]" : "bg-[rgb(207,255,145)]"} rounded-[24px] flex flex-col tml:gap-4 gap-6 h-min items-center justify-center overflow-hidden bmLLL:p-7 tml:p-6 tml:px-2 btl:p-7 p-[48px] relative transition-all duration-500`}>
            <div className='flex flex-none tml:gap-4 gap-6 h-min justify-center items-center w-full p-0'>
                <div className='flex justify-center tml:items-start items-center flex-grow-[1] flex-shrink-0 basis-0 tml:gap-2 gap-12 h-min p-0'>
                    <div className='outline-none flex-none h-auto relative w-[42px]'>
                        <h3 className={`${epilogue.className} ${!open ? "text-[#987de1]" : "text-[#015840]"} font-normal tml:text-[1.25rem]  text-[32px]  tracking-tight tml:leading-[1.3] leading-[1.2rem] text-center `}>0{indexed + 1}</h3>
                    </div>

                    <div className='flex flex-col justify-center flex-grow-[1] flex-shrink-0 basis-0 h-auto relative whitespace-pre-wrap '>
                        <h3 className={`font-medium text-[#311f40] tml:text-[1.25rem] text-[32px] text-start  tracking-[.01em] leading-[1.2] ${epilogue.className} `}>
                            {question}
                        </h3>
                    </div>

                </div>
                <div className={`${!open ? "rotate-45 duration-500  bg-[#fdf3ea]" : "rotate-0 duration-500  bg-[#015840]"} flex flex-none tml:h-[24px] tml:w-[24px]  h-[48px] w-[48px] justify-center    items-center rounded-[50%] `}>
                    <div className='[image-rendering:pixelated] flex-shrink-0 flex-none h-[20px] w-[20px] relative'>
                        {
                            !open ? <Image src={black} alt='' fill={true} /> : <Image src={white} alt='' fill={true} />
                        }

                    </div>
                </div>
            </div>
            <motion.div initial={{ y: '-40px' }} animate={open ? { y: 0, transitionDuration: '.3s', transitionTimingFunction: 'linear' } : {}} className={`${!open ? "hidden" : "flex"} flex-none items-center justify-center tml:gap-3  gap-12 h-min overflow-hidden relative w-full `}>
                <div className='w-[42px] flex flex-none self-stretch '></div>
                <div className='flex flex-grow-[1] flex-shrink-0 basis-0 items-center justify-center relative'>
                    <p className={`${almarai.className} font-normal tml:text-[.875rem] text-[20px] text-[#015840] tracking-[.02em] tml:leading-[1.4] leading-[2rem] text-start `}>{solution}</p>
                </div>
                <div className='w-[48px] flex flex-none self-stretch '></div>
            </motion.div>
        </motion.div>
    )
}

export default FaqIndividual
