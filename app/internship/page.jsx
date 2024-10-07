import React from 'react'
import Revealcompo from '../components/Revealcompo'
import spiral from '@/public/internship/internshipherospiral.png'
import doublestars from '@/public/internship/doublestars.png'
import Image from 'next/image'
import { almarai, epilogue, mediumaeonikFont, regularaeonikFont } from '@/utils/font'

const page = () => {
    return (
        <div className='min-h-screen w-auto overflow-hidden xl:overflow-visible  mx-auto flex flex-col items-center justify-start h-min p-0 relative'>
            <div className='tml:pt-[82px] tml:px-2 tml:pb-4 tml:mt-3 btl:pt-20 btl:px-6 btl:pb-6 bmLLL:pt-[116px] lg:mx-auto bmLLL:px-[64px] bmLLL:pb-[32px] pt-[116px] px-16 pb-8 flex items-center flex-none h-min justify-center relative w-full '>
                <Revealcompo css={'flex flex-col bg-[#987DE1] tml:min-h-[150px] tml:rounded-[20px] rounded-[30px] flex-grow-[1] flex-shrink-0 basis-0 tml:h-auto gap-0 tml:min-h-0 min-h-[580px] justify-start   items-center bmL4k:max-w-[1312px] max-w-[1640px] p-0 relative w-full'}>
                    <div className='absolute right-[10px] bottom-0 flex-none tml:w-[100px] tml:h-[150px] w-[430px] h-[530px]'>
                        <Image src={spiral} alt='' fill={true} />
                    </div>
                    <div className='absolute  bottom-0 left-[7%] flex-none tml:w-[100px] tml:h-[50px] w-[332px] h-[155px]'>
                        <Image src={doublestars} alt='' fill={true} />

                    </div>
                    <div className='flex justify-center flex-grow items-center tml:py-10 tml:px-2 max-w-[807px] '>
                        <h1 className={`text-[#FFFfff] relative  text-center  tml:text-[2rem] text-[4rem] font-bold leading-[1.6] tracking-[0.02em] ${epilogue.className} `}>Entrepreneur in Residence Internship</h1>
                    </div>
                </Revealcompo>
            </div>


            <div className=' tml:px-2 tml:pb-4 btl:pt-20 btl:px-6 btl:pb-6  lg:mx-auto bmLLL:px-[64px] bmLLL:pb-[64px]  px-16 pb-6 flex items-center flex-none h-min justify-center relative w-full '>
                <Revealcompo css={'flex flex-col bg-[#FFA556] rounded-[30px] flex-grow-[1] flex-shrink-0 basis-0 tml:h-auto gap-0 tml:min-h-0 min-h-[455px] justify-start   items-center bmL4k:max-w-[1312px] max-w-[1640px] p-0 relative w-full'}>

                    <div className='absolute tml:hidden top-[34%] left-0 w-[100px] h-[100px] bg-[#FFAE67]'>
                        <div className='relative w-full h-full'>
                            <div className='absolute top-[100%] left-[100%] w-[50px] h-[50px] bg-[#FFAE67] '></div>
                        </div>
                    </div>
                    <div className='absolute tml:hidden bottom-0 right-[8%] w-[121px] h-[50px] bg-[#FFAE67]'>

                    </div>
                    <div className='flex justify-center flex-grow items-center tml:py-10 px-10 '>
                        <p className={`text-[#33200CCC]/[80%] ${almarai.className} tml:text-[1.3rem] text-[1.5rem] font-medium leading-[2.2] text-center tracking-[0.02em] max-w-[701px]`}>We are thrilled to announce the launch of our Entrepreneur in
                            Residence Internship Program, a unique opportunity for
                            aspiring innovators & entrepreneurial minds to join us in
                            shaping the future of grad-tech.</p>
                    </div>
                </Revealcompo>
            </div>

            {/* cards */}

            <div className=' tml:px-2 tml:pb-28 btl:pt-20 btl:px-6 btl:pb-6 pt-10 lg:mx-auto bmLLL:px-[64px] bmLLL:pb-[64px]  px-16 pb-12 flex items-center flex-none h-min justify-center relative w-full '>
                <Revealcompo css={'flex flex-col bg-[#fff] rounded-[30px] flex-grow-[1] flex-shrink-0 basis-0 tml:h-auto gap-0 tml:min-h-0 min-h-[455px] justify-start md:pl-10 bmLLL:max-w-[1180px] items-center bmL4k:max-w-[1312px] max-w-[1640px] p-0 relative w-full'}>

                    <div className='flex flex-col tml:gap-40 md:gap-8 tml:justify-center w-full'>
                        <div className='md:max-w-[450px] af990:max-w-[620px] mb-4 relative tml:px-4 px-10 py-10 flex flex-col flex-shrink  border-4 border-r-[8px]  border-[#311F40] justify-between tml:self-center  rounded-[30px]'>
                            <div className={`text-black ${epilogue.className} text-[2.5rem] font-bold leading-[1.5] tracking-[0.02em] px-2 `}>01</div>
                            <div className={`${almarai.className} font-normal tracking-[.02em] leading-[2] text-[1.125rem] mt-8`}>
                                You will be responsible for building and maintaining strategic
                                partnerships with colleges/universities & their training and
                                placement cells. This includes initiating and cultivating
                                meaningful conversations with key stakeholders to develop
                                robust industry-academia partnerships
                            </div>

                            <div className={`${almarai.className} font-normal absolute tml:right-0 tml:top-[100%]   top-0 right-0 tml:translate-x-[0%] tml:translate-y-[0%] tml:h-min translate-x-[93%] translate-y-[36%] rotate-[5deg] tracking-[.02em] leading-[2] text-[.8rem] lg:text-[1rem] btl:max-w-[360px] rounded-[100px]  tml:w-[90%]   amLL:max-w-[504px] bg-[#ffecdc] px-10  z-[3] py-6`}>
                                You will also facilitate communication & collaboration
                                between our startup and university partners to drive
                                mutual growth and success
                            </div>

                        </div>


                        <div className='md:max-w-[450px] af990:max-w-[620px] relative tml:px-4 px-10  bg-[#CFFF92]  py-10 flex flex-col border-4 border-r-[8px]  border-[#311F40] justify-between tml:self-center  
                         tml:ml-0 amLL:ml-[80px] my-8 rounded-[30px]'>
                            <div className={`text-black ${epilogue.className} text-[2.5rem] font-bold leading-[1.5] tracking-[0.02em] px-2 `}>02</div>
                            <div className={`${almarai.className} font-normal tracking-[.02em] leading-[2] text-[1.125rem] mt-8`}>


                                You will play a pivotal role in launching innovative initiatives
                                aimed at enhancing student development, career readiness
                                and revolutionizing the startups hiring process. You will develop
                                programs & launch student societies that empower students to
                                take on leadership roles in various projects and initiatives,
                                fostering skills such as teamwork, strategic thinking, and
                                problem-solving alongside creating a true impact.

                            </div>

                            <div className={`${almarai.className} font-normal absolute tml:top-[100%] tml:left-[0%]   right-0 top-0  tml:translate-x-0 tml:translate-y-0 translate-x-[92%] translate-y-[108%] h-min rotate-[-5deg] tracking-[.01em] leading-[1.9] text-[#FFF9F3] text-[.8rem] amLL:text-[1rem]  rounded-[100px]  tml:w-[90%]  btl:max-w-[360px] max-w-[504px] bg-[#015840] px-10 z-[3] py-8`}>
                                <p className='max-w-[378px]'>

                                    Ultimately, you will contribute to a holistic approach
                                    to hiring that values leadership experience as a
                                    shortlisting criteria for new grad roles at startups
                                </p>
                            </div>

                        </div>

                        <div className='md:max-w-[450px] af990:max-w-[620px]  relative tml:px-4 px-10  bg-[#987DE1] py-10 flex flex-col border-4 border-r-[8px]  border-[#311F40] justify-between tml:self-center self-end  my-8 rounded-[30px]'>
                            <div className={`text-white ${epilogue.className} text-[2.5rem] font-bold leading-[1.5] tracking-[0.02em] px-2 `}>03</div>
                            <div className={`${almarai.className} font-normal text-white tracking-[.02em] leading-[2] text-[1.125rem] mt-8`}>
                                You will also be responsible for organizing placement drives,
                                hiring challenges, and hireathons. This includes planning,
                                organizing, scheduling dates, managing registrations,
                                communication with participants etc
                            </div>

                            <div className={`${almarai.className} font-normal absolute tml:top-[100%] tml:left-[0%] tml:translate-x-0 tml:translate-y-0 right-0 top-0 btl:translate-x-[-117%] btl:translate-y-[15%] translate-x-[-117%] translate-y-[15%] rotate-[5deg] tracking-[.02em] leading-[1.9] text-[#FFF9F3] text-[.8rem] amLL:text-[1rem]  rounded-[100px]  tml:w-[90%]  btl:max-w-[360px] max-w-[504px] bg-[#311F40] px-14 z-[3] py-8`}>
                                <p className='max-w-[378px]'>

                                    The intern will be responsible for leveraging
                                    LinkedIn Outreach to identify & engage with top
                                    tech talent for key roles at startups.
                                </p>
                            </div>

                        </div>

                    </div>
                </Revealcompo>

            </div>

            {/* buckel Up */}
            <div className=' tml:px-2 tml:pb-4 btl:pt-20 btl:px-6 btl:pb-6 pt-10 lg:mx-auto bmLLL:px-[16px] bmLLL:pb-[64px]  px-4 pb-12 flex items-center flex-none h-min justify-center relative w-full '>
                <Revealcompo css={'flex flex-col bg-[#fff] rounded-[30px] flex-grow-[1] flex-shrink-0 basis-0 tml:h-auto gap-0 tml:min-h-0 min-h-[455px] justify-start   items-center bmL4k:max-w-[1312px] max-w-[1640px] p-0 relative w-full'}>
                    <div className='flex flex-col mx-auto w-full text-center'>
                        <h2 className={`${epilogue.className} text-[#32200C] tml:text-[3rem] text-[2.5rem] font-medium leading-[1.1] tracking-[0.02em] px-2 `}>Buckle Up, Buttercup!</h2>
                        <p className={`${almarai.className} text-[#311F40] text-[1.5rem] font-normal tracking-[.02em] leading-[1.9] max-w-[568px] self-center mt-8`}>Your responsibilities are about to get a whole lot
                            more interesting as you take on the challenge of......</p>

                        <div className='flex tml:flex-col tml:items-center tml:max-w-none tml:w-full items-end justify-center amLL:ml-10      w-full mt-4 gap-8'>
                            <BuckleUpchildwrapper>

                                <p className={`${almarai.className} text-[#010032] text-[1rem] font-normal tracking-[.02em] text-left leading-[2]  max-w-[309px] `}>Fostering a culture of awareness &
                                    enthusiasm by optimizing student
                                    engagement and participation in
                                </p>

                                <h2 className={`${almarai.className} text-[#FEAE67] text-[1.5rem] font-bold leading-[1.7] tracking-[0.02em]  text-left `}>Placement Catalyst
                                    Workshops</h2>

                            </BuckleUpchildwrapper>

                            <BuckleUpchildwrapper>

                                <p className={`${almarai.className} text-[#010032] text-[1rem] font-normal tracking-[.02em] text-left leading-[2] max-w-[309px] `}>Recognizing & Nominating students
                                    students with exceptional leadership
                                    potential to form SIC comprising
                                    12 selected individuals
                                </p>


                            </BuckleUpchildwrapper>


                            <BuckleUpchildwrapper>
                                <p className={`${almarai.className} text-[#010032] text-[1rem] font-normal tracking-[.02em] text-left leading-[1.9] max-w-[309px] `}>Guiding students through the
                                    application process for the
                                </p>

                                <h2 className={`${almarai.className} text-[#752315] text-[1.5rem] font-bold leading-[1.7] tracking-[0.05em]  text-left `}>Student Personality
                                    Assessment Round</h2>

                                <p className={`${almarai.className} text-[#010032] text-[1rem] font-normal tracking-[.02em] text-left leading-[1.9] mt-2 max-w-[309px] `}>Monitor application submissions &
                                    follow up with students to ensure
                                    they complete their assessment on
                                    time
                                </p>

                            </BuckleUpchildwrapper>
                        </div>
                    </div>
                </Revealcompo>
            </div >

        </div >
    )
}

export default page



const BuckleUpchildwrapper = ({ children }) => {
    return (
        <div className='tml:max-w-none tml:w-full max-w-[350px] flex flex-col border-4 border-solid border-[#39333d] rounded-[20px]  bg-[#846AC1] p-4'>
            <div className='tml:max-w-none max-w-[309px] bg-white pt-6 pb-4 pr-6 pl-5 rounded-[20px]'>
                {children}
            </div>
        </div>
    )
}

export { page }
