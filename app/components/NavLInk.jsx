import { almarai } from '@/utils/font'
import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, text, pathname }) => {
    const isActive = pathname === href;
    console.log(pathname, href)
    console.log(isActive)
    return (
        <Link href={href} className={`py-2 px-3 bg-[rgba(207,255,145,0)] duration-200 hover:bg-[rgba(207,255,145)]  rounded-[100px] opacity-[1] w-min flex items-center justify-center cursor-pointer flex-nowrap relative  ${isActive && '!bg-[rgba(207,255,145)] hover:!bg-[rgba(122,209,87)]'}  `}>
            <div className=''>
                <p className={`${almarai.className} text-[1rem] font-normal tracking-[.015625em] text-[#010032] leading-[24px] whitespace-nowrap`}>{text}</p>
            </div>
        </Link>
    )
}

export default NavLink
