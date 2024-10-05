'use client'
import Image from "next/image";
import Options from "./Options";
import { useEffect, useState } from "react";
import MobileOptions from "./MobileOptions";
import { boldaeonikFont, mediumaeonikFont, regularaeonikFont } from "@/utils/font";
import Revealcompo from "./Revealcompo";

const Main = () => {
    const [activedesc, setActivedesc] = useState(1)
    const facilities = [
        {
            title: 'Peer-to-peer Q&A',
            desc: 'When Google, ChatGPT, and Stack Overflow don’t have your answer, ask a Prentus peer.',
        },
        {
            title: 'Curated Resource Hub',
            desc: 'A robust record of resources that range from past discussions from active coaches to external blogs and previously popular threads.',
        },
        {
            title: 'Weekly Office Hours',
            desc: 'Let one of our coaches answer your most-pressing questions, like how to get hired faster or if drinking Celsius at 8pm the night before an interview is a bad idea.',
        },
        {
            title: 'Down in the DMs',
            desc: 'Connect privately with other Prentus users to solve problems or encourage each other to get your points up.',
        },

    ]

    // console.log(activedesc);
    useEffect(() => {
        const key = setInterval(() => {

            setActivedesc(prev => {
                if (prev > 3) {
                    return 1
                } else {

                    return ++prev
                }
            }
            )

        }, 2000);

        return () => clearInterval(key)
    }, [])

    return (
        <div className="tml:pt-16 tml:px-2 tml:pb-4 btl:pt-0 btl:px-6 btl:pb-6 bmLLL:pt-0  bmLLL:px-[64px] bmLLL:pb-[64px] py-16 px-0  w-full flex items-center flex-none h-min justify-center relative overflow-hidden">

            <Revealcompo css={"flex flex-grow-[1] flex-shrink-0 basis-0 h-min mx-auto bmL4k:max-w-[1312px] max-w-[1640px] overflow-hidden"}>
                <div className="contents">
                    <div className="opacity-[1] relative w-full ">
                        <div className="bg-[#cfff92] w-full rounded-[24px] opacity-[1] flex flex-col tml:gap-8 items-center gap-[64px] justify-start overflow-hidden px-[20px] md:px-[44px]  pt-[64px] pb-[44px] relative ">
                            <div className="opacity-[1] flex flex-col items-center flex-none gap-[12px] h-full   justify-center amLL:justify-start p-0 relative w-full ">
                                <div className=" relative flex flex-none h-min  gap-4 items-center justify-center   w-full">


                                    {/* <div className="flex-grow h-min w-auto md:whitespace-pre flex-shrink-0 order-1 basis-0 "> */}
                                    <h2 className={`font-normal text-[#015840] hidden amLL:block text-[44px] tracking-[.01em] leading-[1]  text-center ${boldaeonikFont.className} `}>Meet and learn from our community</h2>
                                    <h2 className={`font-normal text-[#015840] amLL:hidden tml:text-[38px]   md:text-[32px] order-1 amLL:text-[44px]   tracking-[.01em] tml:text-start leading-[1.2] text-center  ${boldaeonikFont.className} `}>Powered <span className="text-[#987de1]">by</span> and <span className="text-[#987de1]">for</span> the people</h2>
                                    {/* </div> */}


                                    <div className=" tml:hidden  rounded-[40px] order-0 amLL:order-1 opacity-[1] aspect-square order-0 amLL:-bottom-[111px] flex-none h-[56px] amLL:h-[80px] left-[50px]  amLL:absolute  w-auto amLL:w-[80px] z-[1]">
                                        <div className=" relative amLL:absolute rounded-[inherit] w-full h-full ">
                                            <Image src='https://framerusercontent.com/images/wfmxi15XMBJCiHQkO5ys2fnxxE.png' fill={true} alt="" className="rounded-[inherit] relative " />
                                        </div>
                                    </div>
                                    <div className="tml:hidden  rounded-[40px] opacity-[1] order-2 aspect-square  amLL:-bottom-[102px]  amLL:right-[-11px] flex-none h-[56px] amLL:h-[80px]  amLL:absolute w-auto amLL:w-[80px] z-[1]">
                                        <div className=" relative amLL:absolute rounded-[inherit] w-full h-full ">
                                            <Image src='https://framerusercontent.com/images/wfmxi15XMBJCiHQkO5ys2fnxxE.png' fill={true} alt="" className="rounded-[inherit] relative " />
                                        </div>
                                    </div>

                                </div>

                                <div className="flex-none hidden amLL:block h-auto relative whitespace-pre-wrap w-[720px] break-words ">
                                    <p className={`text-[#015840] font-normal text-[20px] tracking-[.02em] leading-[1.6] text-center m-0 p-0 ${regularaeonikFont.className}`}>An active and supportive community of like-minded job-seekers to help you navigate this major life change.</p>
                                </div>
                            </div>
                            <div className="hidden amLL:block w-full">

                                {
                                    facilities.map((facility, index) => <Options key={index} indexed={index} activedesc={activedesc} title={facility.title} desc={facility.desc} />)
                                }
                                {/* <Options /> */}
                            </div>

                            <div className=" tml:block btl:block hidden w-full">

                                {
                                    // facilities.map((facility, index) => <Options indexed={index} activedesc={activedesc} title={facility.title} desc={facility.desc} />)
                                    <MobileOptions facilities={facilities} />
                                }
                                {/* <Options /> */}
                            </div>
                        </div>

                    </div>
                </div>
            </Revealcompo>

        </div>
    )
}

export default Main
