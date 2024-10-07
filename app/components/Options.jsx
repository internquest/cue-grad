
import Image from 'next/image'
import React from 'react'
import arrow from '@/public/AI Job Search Platform _ Prentus/download.svg'
import { almarai, epilogue, mediumaeonikFont, regularaeonikFont } from '@/utils/font'

const Options = ({ desc, title, indexed, activedesc }) => {
    return (
        <div className="flex flex-col items-center flex-none flex-nowrap gap-0 h-min justify-start p-0 overflow-visible relative w-full">
            <div className="flex-none h-auto relative w-full">
                <div className='w-full flex cursor-pointer items-center gap-12 justify-start overflow-visible p-0 relative '>
                    <div style={indexed + 1 === activedesc ? { opacity: 1 } : { opacity: 0 }} className='flex self-stretch items-center flex-grow-[.7] flex-shrink-0 basis-0 h-auto justify-center overflow-visible relative'>
                        <div className='flex-grow-[.7] flex-shrink-0 basis-0 h-auto relative '>
                            <p className={`font-normal text-[#01584d] text-[20px] tracking-[.01em] leading-[1.5] text-start  m-0 p-0 ${almarai.className}`}>{desc}</p>
                        </div>
                        <div className='aspect-square absolute left-0 overflow-hidden top-[-120px] w-[120px] z-[1]'>
                            <Image src='https://framerusercontent.com/images/CP7s7vbrxLKtcUpXxXxJq0gJm0Y.png' alt='' fill={true} />
                        </div>
                    </div>

                    <div style={indexed + 1 === activedesc ? { opacity: 1 } : { opacity: 0 }} className='[image-rendering:pixelated] flex-shrink-0 fill-black text-black flex-none h-[86px] relative w-[112px] '>
                        <Image src={arrow} alt='' width={112} height={86} />
                    </div>

                    <div className={`${indexed + 1 === activedesc ? ' border-[#015840]' : ' border-[#7ad157]'} flex flex-grow-[1] border-b-[1px]  flex-shrink-0 basis-0 py-[56px] px-0 relative items-center h-min justify-start `}>
                        <p className={` ${epilogue.className} ${indexed + 1 === activedesc ? 'text-[#015840]' : 'text-[#7ad157]'}   tracking-[.01em] font-semibold leading-[40px] text-start  m-0
     p-0 text-[2.25rem]`}>{title}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Options
