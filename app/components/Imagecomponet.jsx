'use client'
import { useWindowSize } from '@uidotdev/usehooks'
import Image from 'next/image'
import React from 'react'

const Imagecomponet = ({ image }) => {

    const { width: windowWidth } = useWindowSize()
    // console.log(windowWidth);

    return (
        <>
            <Image src={image} alt='' objectFit={windowWidth > 1200 ? 'cover' : 'fill'} fill={true} sizes={windowWidth >= 1919 ? 'max((min(max(100vw, 1px), 1640px) - 96px) / 2, 1px)' : windowWidth >= 1440 && windowWidth < 1919 ? 'max((min(max(100vw, 1px), 1312px) - 96px) / 2, 1px)' : windowWidth >= 1200 && windowWidth < 1440 ? 'max((min(max(100vw - 128px, 1px), 1640px) - 96px) / 2, 1px)' : windowWidth >= 810 && windowWidth < 1200 ? 'max((min(max(100vw - 48px, 1px), 1640px) - 64px) / 2, 1px)' : 'min(max(100vw - 32px, 1px), 1640px)'} className='rounded-[20px]' />
        </>
    )
}

export default Imagecomponet
