import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { almarai, epilogue, mediumaeonikFont } from '@/utils/font'

const MobileIndividual = ({ desc, title, indexed, activedesc }) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {

        setOpen(!open)
    }

    return (
        <div className='w-full border-b border-[#7ad157] py-6'>
            <div className='w-full h-full flex flex-col gap-4'>
                <div onClick={() => handleClick()} className='cursor-pointer flex gap-4 h-min justify-center items-start w-full relative overflow-hidden p-0'>
                    <div className='flex flex-grow-[1] pointer-events-none flex-shrink-0 basis-0 items-start h-min '>
                        <div className='flex flex-grow-[1] flex-shrink-0 basis-0 relative h-auto'>
                            <p className={`${epilogue.className} text-[#015840] text-2xl  tracking-tight leading-[1.5em] text-start`}>{title}</p>
                        </div>
                    </div>

                    <div className='flex flex-none items-center self-stretch  h-auto justify-center relative w-min'>
                        <div className='h-[24px] relative w-[24px] flex-none'>

                            {!open ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-cfebd3db-8ed9-4e26-8ab4-46ccd2d53ef2, rgb(1, 88, 64))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-cfebd3db-8ed9-4e26-8ab4-46ccd2d53ef2, rgb(1, 88, 64))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ width: "100%", height: "100%" }}><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            }
                        </div>
                    </div>
                </div>
                <motion.div initial={{ y: '-40px' }} animate={open ? { y: 0, transitionDuration: '.3s', transitionTimingFunction: 'linear' } : {}} className={`${open ? 'flex' : 'hidden'} w-full`}>
                    <div className='flex flex-grow-[1] flex-shrink-0 basis-0 h-min justify-center items-center relative '>
                        <div className='flex flex-grow-[1] flex-shrink-0 basis-0 h-auto relative '>
                            <p className={`${almarai.className} font-normal text-[1rem] leading-[1.3]  text-start text-[#015840]`}>
                                {desc}
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>

        </div>
    )
}

export default MobileIndividual
