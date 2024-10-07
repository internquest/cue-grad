'use client'
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'

const Loading = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [textloaded, setTextloaded] = useState(false)
    const [loadfull, setLoadfull] = useState(false)

    const [initiateload, setInitiateload] = useState(false)
    const [loadingperc, setLoadingperc] = useState(20)
    const sentences = [`It's Time to Reimagine`, `the World of Social`]

    useEffect(() => {
        // Immediately start text transition
        setTextloaded(true);
        console.log('Component mounted, starting text transition');

        // Check if the page is already loaded
        if (document.readyState === 'complete') {
            setIsLoaded(true);
            console.log('Page already loaded');
        } else {
            // If not, wait for the load event
            const handleLoad = () => {
                setIsLoaded(true);
                console.log('Page fully loaded');
            };
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);
    useEffect(() => {
        if (loadingperc === 100) {
            setTimeout(() => {

                setLoadfull(true)
            }, 1500);
        }
    }, [loadingperc])

    console.log(textloaded);
    console.log(isLoaded);

    useEffect(() => {
        let key, key1;
        if (isLoaded) {
            key = setTimeout(() => {
                setInitiateload(true)
            }, 3200);
        }
        if (initiateload) {
            // key = setTimeout(() => {
            key1 = setInterval(() => {
                setLoadingperc(prev => {
                    if (prev >= 100) {
                        return 100;
                    }
                    return prev + 1;
                });

            }, 20);
        }
        if (loadingperc >= 100) {
            clearInterval(key1)
        }

        return () => {
            clearTimeout(key);
            clearInterval(key1);
        }

    }, [isLoaded, initiateload]);
    const scaleloadingperc = loadingperc / 100
    console.log(scaleloadingperc);

    return (
        <div style={{ opacity: loadfull && 0, transitionDuration: loadfull && '1s', pointerEvents: loadfull && 'none' }} className='fixed top-0 bottom-0 right-0 left-0 bg-[#000815] z-[11] flex transition-opacity duration-[2s] ease-[cubic-bezier(0.42,0,0.33,1)] '>
            <div className='transition-opacity duration-[1s] ease-[cubic-bezier(0.42,0,0.33,1)] self-center overflow-hidden py-[6.944444vw] px-0 grid grid-cols-12 gap-[1.6666667vw] w-full mx-auto max-w-[calc(100vw-(2*3.33333vw))] '>
                <div className='[grid-column:4/-4] flex flex-col justify-center items-center'>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: [0.42, 0, 0.33, 1] }} className='md:mb-[3.333333vw] duration-[1.2s] transition-opacity text-center text-[#ffda59] ease-[cubic-bezier(0.42,0,0.33,1)]'>{loadingperc}</motion.span>
                    <h2 className='mb-[4.4444444vw] text-white text-center text-[3.333vw] leading-[100%] font-medium tracking-[.01em]'>
                        {sentences.map((sentence, sentenceIndex) => {
                            const previousSentencesLength = sentences
                                .slice(0, sentenceIndex)
                                .reduce((acc, s) => acc + s.length, 0);

                            return (
                                <span key={sentenceIndex} className='block'>
                                    {sentence.split('').map((char, charIndex) => {
                                        const totalIndex = 2 * previousSentencesLength + charIndex;
                                        return (
                                            <React.Fragment key={charIndex}>
                                                {char === ' ' ? (
                                                    '\u00A0'
                                                ) : (
                                                    <motion.span
                                                        initial={{ x: -20, y: 80, rotateX: '-60deg', rotateY: '-20deg', rotateZ: '-10deg', opacity: 0 }}
                                                        animate={textloaded ? {
                                                            x: 0,
                                                            y: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            rotateZ: 0,
                                                            opacity: 1,
                                                            transition: {
                                                                delay: totalIndex * 0.005,
                                                                duration: 1,
                                                                ease: [0.42, 0, 0.33, 1]
                                                            }
                                                        } : {}}
                                                        className="inline-block"
                                                    >
                                                        {char}
                                                    </motion.span>
                                                )}
                                            </React.Fragment>
                                        );
                                    })}
                                </span>
                            );
                        })}
                    </h2>
                    <motion.div initial={loadingperc === 100 ? { scaleX: 1 } : { scaleX: 0 }} animate={loadingperc === 100 ? { scaleX: 0 } : { scaleX: 1 }} transition={{ duration: loadingperc === 100 ? .7 : 1.2, ease: [0.42, 0, 0.33, 1] }} className={`loading-bar ${loadingperc === 100 ? 'origin-right' : 'origin-center'}  transition-transform duration-[1.2s] ease-[cubic-bezier(0.42,0,0.33,1)] w-[calc((2*calc((calc(100vw-(2*3.3333333333vw))-((12-1)*1.6666666667vw))/12))+1.6666666vw)] h-[.27777778vw] relative overflow-hidden rounded-[1px] before:absolute after:absolute before:content-[""] before:top-0 before:right-0 before:left-0 before:bottom-0 before:bg-[#a0a8ac] before:opacity-[.25]  `} style={{
                        '--progress': scaleloadingperc,
                        '--opacity': initiateload ? 1 : 0
                    }}></motion.div>
                </div>
            </div>
        </div>
    )
}

export default Loading