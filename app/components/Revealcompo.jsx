'use client'
import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'

const Revealcompo = ({ children, css }) => {

    const comporef = useRef(null)
    const inview = useInView(comporef, { margin: "0px 100px -250px 0px", once: true })
    return (
        <motion.div style={{
            transform: inview ? 'translate3d(0,0,0)  ' : `translate3d(0,50px,0)`,
            opacity: inview ? 1 : 0
        }} ref={comporef} className={`${css} duration-500`}>
            {children}
        </motion.div>
    )
}

export default Revealcompo
