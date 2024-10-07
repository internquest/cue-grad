'use client'
import { useInView, motion } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'

const Revealcompo = ({ children, css, delay = 500 }) => {
    const comporef = useRef(null)
    const [isReady, setIsReady] = useState(false)
    const inview = useInView(comporef, { margin: "0px 100px -250px 0px", once: true })

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setIsReady(true), 7400)
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
        }

        return () => window.removeEventListener('load', handleLoad)
    }, [])

    return (
        <motion.div style={{
            transform: isReady && inview ? 'translate3d(0,0,0)' : `translate3d(0,50px,0)`,
            opacity: isReady && inview ? 1 : 0
        }} ref={comporef} className={`${css} duration-500`}>
            {children}
        </motion.div>
    )
}

export default Revealcompo
