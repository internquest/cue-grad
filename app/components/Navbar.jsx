'use client'
import { almarai, boldaeonikFont, epilogue, mediumaeonikFont } from '@/utils/font'
import React, { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import Image from 'next/image'
import prnetuslogo from '@/public/prentuslogo.svg'
import { useMotionValueEvent, useScroll, motion, animate, useInView } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavLink from './NavLInk'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(true);
    const navref = useRef(null)
    const [count, setcount] = useState(0)
    const { width: windowWidth } = useWindowSize()
    const { scrollY } = useScroll()
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const pathname = usePathname()

    const inview = useInView(navref, { once: true })



    useEffect(() => {
        setOpen(false)
    }, [pathname])
    // const [variantsvalue, setVariantsValue] = useState(
    //     {    
    //         initialclose: {
    //             transform: 'translate3d(0px,-250px,0px) scale(1,0.5)',
    //             // y: -250,
    //             // scale: '(1,0.5)',
    //         },
    //         animateclose: {
    //             transform: 'translate3d(0px,0px,0px) scale(1,1)',
    //             // scale: '(1,1)',

    //         }
    //     });

    // console.log(scrollY.get());


    const handleNav = () => {
        setOpen(!open)
        setcount(1)
    }
    // console.log(open);

    // write code for navbar to transfrom to top and when scrolled down it will be fixed to top
    // useEffect(() => {
    //     setVariantsValue(open ? navbaropen : navbarclose);
    // }, [open, count]);

    useMotionValueEvent(scrollY, 'change', (value) => {

        const isVisible = prevScrollPos > value || value < 10;

        setVisible(isVisible);
        setPrevScrollPos(value);
        // console.log('Navbar visible:', isVisible);
    })

    const navbarclose = {
        initial: {
            transform: 'translate3d(0px,-278px,0px) scale(1,0.15)',
            // y: -250,
            // scale: '(1,0.5)',
        },
        animate: {
            transform: 'translate3d(0px,0px,0px) scale(1,1)',
            // scale: '(1,1)',

        }
    }

    const navbaropen = {
        initial: {
            transform: 'translate3d(0px,278px,0px) scale(1,7.5435)',
            // y: -250,
            // scale: '(1,0.5)',
        },
        animate: {
            transform: 'translate3d(0px,0px,0px) scale(1,1)',
            // scale: '(1,1)',

        }
    }
    // const navbar = {
    //     initialclose: {
    //         transform: 'translate3d(0px,-278px,0px) scale(1,0.15)',

    //         // y: -250,
    //         // scale: '(1,0.5)',
    //     },
    //     animate: {
    //         transform: 'translate3d(0px,0px,0px) scale(1,1)',
    //         // scale: '(1,1)',

    //     }
    //     ,
    //     initialopen: {
    //         transform: 'translate3d(0px,278px,0px) scale(1,7.5435)',
    //         // scale: '(1,1.2)',
    //     },

    // }

    // const navbarinside = {
    //     initialclose: {
    //         transform: 'translate3d(0px,-40px,0px) scale(1,0.1235)',

    //         // y: -250,
    //         // scale: '(1,0.5)',
    //     },
    //     animate: {
    //         transform: 'translate3d(0px,0px,0px) scale(1,1)',
    //         // scale: '(1,1)',

    //     }
    //     ,
    //     initialopen: {
    //         transform: 'translate3d(0px,263px,0px) scale(1,7.1453125)',
    //         // scale: '(1,1.2)',
    //     },

    // }
    // const variantsvalue = open && count ? navbaropen : navbarclose
    // console.log(variantsvalue);
    // console.log(open);
    // console.log(pathname === '/');

    return (
        <div className='contents'>
            <motion.div ref={navref} className={`flex-none h-auto fixed top-0 w-full duration-500 backdrop-blur-[22px]  delay-75 z-[4] ${(inview && visible ? 'translate-y-0 opacity-[1]' : '-translate-y-full opacity-0')}`}>
                {windowWidth >= 1200 ?
                    <div className="flex  h-min flex-nowrap   overflow-visible p-[16px] relative items-center justify-center py-6 px-16 w-full bg-[rgba(255,249,243,.08)] shadow-none ">
                        <div className="flex-none bg-[rgba(255,249,242,0)]  bmL4k:max-w-[1312px] max-w-[1640px] w-full flex items-center flex-nowrap h-min justify-between overflow-hidden p-0 relative ">
                            <div className='flex justify-center flex-1 amLL:flex-none w-min relative overflow-hidden p-0 items-center h-min'>
                                <Link href="/" className='flex-none h-[60px]  relative w-[111px] '>
                                    <div className={`w-full h-full bg-[#015840] flex items-center justify-center rounded-tl-[20px] rounded-tr-[50px] text-white text-[2rem] font-medium  leading-[1.9] rounded-br-[50px]  ${epilogue.className} `}>
                                        cue.
                                    </div>
                                </Link>
                            </div>
                            <div className='flex items-center justify-center flex-none border-solid border-[1.5px] border-[#311f40] rounded-[1000px] gap-1 p-2 bg-[rgba(255,255,255,0.8)]  relative w-min'>
                                <div className='flex-none h-auto relative w-auto'>
                                    <NavLink href="/" text="Students" pathname={pathname} />
                                </div>
                                <div className='flex-none h-auto relative w-auto'>
                                    {/* <Link href="/about" className={`${pathname === '/about' ? 'bg-[rgba(207,255,145)] hover:bg-[rgba(122,209,87)]' : ''} py-2 px-3 bg-[rgba(207,255,145,0)] duration-200 hover:bg-[rgba(207,255,145)] rounded-[100px] opacity-[1] w-min flex items-center justify-center cursor-pointer flex-nowrap relative `}>
                                        <div className=''>
                                            <p className={`${almarai.className} text-[1rem] font-normal tracking-[.015625em] text-[#010032] leading-[24px] whitespace-nowrap `}>About</p>
                                        </div>
                                    </Link> */}
                                    <NavLink href="/about" text="About" pathname={pathname} />
                                </div>
                                <div className='flex-none h-auto relative w-auto'>
                                    <NavLink href="/internship" text="Internship" pathname={pathname} />
                                </div>
                                <div className='h-auto w-auto relative flex-none'>
                                    <NavLink href="" text="Feedback" pathname={pathname} />
                                </div>
                            </div>
                            <div className='flex items-center justify-center gap-3  relative w-min'>
                                <div className="flex-none h-auto relative w-auto">
                                    <a href="" className='flex items-center border hover:border-solid border-transparent hover:border-[#311f40] duration-200 rounded-[100px] justify-center cursor-pointer py-4 px-6 relative w-min'>
                                        <p className={`${almarai.className} font-normal text-[#311f40] text-[1.125rem] leading-[1] `}>Login</p>
                                    </a>
                                </div>
                                <div className='flex-none h-auto relative w-auto'>
                                    <a href="" className='bg-[#311f40] hover:bg-[#987de1] duration-200 rounded-[100px] cursor-pointer flex items-center justify-center py-4 px-6 w-min relative'>
                                        <p className={`${almarai.className} font-normal text-[#fff9f3] text-[1.125rem] leading-[1] whitespace-nowrap`}>Sign Up</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <motion.div initial={open && count ? 'initial' : 'initial'}
                        animate='animate'
                        variants={open ? navbaropen : navbarclose} className={`backdrop-blur-[22px] ${open ? 'bg-[rgb(255,249,243)]' : ' bg-[rgba(255,249,243,.08)]'} bg-[#fff9f3] transition-transform w-full p-4 pb-0 ${open ? 'min-h-screen  overflow-hidden flex-col h-[640px] gap-0 ' : ''} `}>
                        <motion.div className={`max-w-[1312px] flex-1 h-min ${open ? 'flex-none w-full' : ''} items-center overflow-hidden bg-white/[0] relative origin-center p-0 `}>
                            <div className={`flex ${open ? '' : 'flex-grow flex-shrink-0 basis-0'}  justify-between items-center h-min  overflow-hidden p-0 relative`}>
                                <Link href="/" className='flex-none h-[60px] relative w-[111px] block' >
                                    <div className={`w-full h-full bg-[#015840] flex items-center justify-center rounded-tl-[20px] rounded-tr-[50px] text-white text-[2rem] font-medium  tracking-[-.5px] leading-[1.9] rounded-br-[50px] ${epilogue.className} `}>
                                        cue.
                                    </div>
                                    {/* <Image src={prnetuslogo} alt='' fill={true} /> */}

                                </Link>
                                <div className='cursor-pointer flex w-[24px] h-[24px]'>
                                    <div onClick={() => handleNav()} className='h-[24px] w-[24px] flex-none relative'>
                                        {open ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-3ed2b2c2-311f-4c65-af11-26d6f412f688, rgb(49, 31, 64))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ width: '100%', height: '100%' }} ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-3ed2b2c2-311f-4c65-af11-26d6f412f688, rgb(49, 31, 64))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ width: '100%', height: '100%' }}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                        }
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {
                            open &&
                            <div className='w-full bg-[#fff9f3] flex  items-center flex-1 flex-col flex-nowrap justify-start relative p-0 '>
                                <div className='rounded-[1000px] gap-[48px] flex items-start flex-1 flex-col flex-nowrap justify-start pt-[46px] px-0 pb-[64px] relative w-full z-[1]'>
                                    <div className='flex flex-col items-center flex-none gap-6 h-min justify-start p-0 relative w-full'>

                                        <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                            <p className={`${almarai.className} font-normal text-[#311f40] text-[1.75rem] tracking-[.015625em] leading-[36px] text-start `}>
                                                <Link href="/" className='capitalize'>Students</Link>
                                            </p>
                                        </div>
                                        <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                            <p className={`${almarai.className} font-normal text-[#311f40] text-[1.75rem] tracking-[.015625em] leading-[36px] text-start `}>
                                                <Link href="/about" className='capitalize'>About</Link>
                                            </p>
                                        </div>
                                        <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                            <p className={`${almarai.className} font-normal text-[#311f40] text-[1.75rem] tracking-[.015625em] leading-[36px] text-start `}>
                                                <Link href="/internship" className='capitalize '>Internship </Link>
                                            </p>
                                        </div>
                                        <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                            <p className={`${almarai.className} font-normal text-[#311f40] text-[1.75rem] tracking-[.015625em] leading-[36px] text-start `}>
                                                <Link href="" className='capitalize  '>Feedback</Link>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex flex-col items-center btl:items-start justify-center gap-3  relative w-full'>
                                    <div className="flex-none order-1 h-auto relative w-full btl:w-min">
                                        <a href="" className='flex items-center btl:items-start justify-center cursor-pointer py-4 px-6 relative w-full'>
                                            <p className={`${almarai.className} font-normal text-[#311f40] text-[1.125rem] text-center leading-[1] `}>Login</p>
                                        </a>
                                    </div>
                                    <div className='flex-none h-auto relative btl:w-min w-full'>
                                        <a href="" className='bg-[#311f40] rounded-[100px] cursor-pointer flex items-center btl:items-start justify-center py-4 px-6 w-full relative'>
                                            <p className={`${almarai.className} font-normal text-[#fff9f3] text-[1.125rem] leading-[1] whitespace-nowrap`}>Sign Up</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        }
                    </motion.div>
                }
            </motion.div>
        </div >
    )
}

export default Navbar
