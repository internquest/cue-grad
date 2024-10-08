'use client'
import { useWindowSize } from '@uidotdev/usehooks'
import Image from 'next/image'
import React from 'react'

const Imagecomponet = ({ image }) => {

    const { width: windowWidth } = useWindowSize()
    // console.log(windowWidth);

    return (
        <>
            <Image src={image} alt='' width={610} objectFit='cover' height={582} className='rounded-[20px] tml:ml-[20%]' />
        </>
    )
}

export default Imagecomponet
