import { almarai, boldaeonikFont, epilogue, mediumaeonikFont, regularaeonikFont } from '@/utils/font'
import React from 'react'
import Image from 'next/image'

import cuebg from '@/public/about/star ladder.svg'
import headingstar from '@/public/about/heading star.svg'
import Revealcompo from '../components/Revealcompo'
import About from '../components/About/About'
const page = () => {
  return (
    <div className='min-h-screen w-auto overflow-hidden xl:overflow-visible  mx-auto flex flex-col items-center justify-start h-min p-0 relative'>

      {/* about cue */}
      <About />

      {/* the problem */}

      <div className='w-full flex flex-none items-center justify-center h-min overflow-hidden tml:p-2 tml:pt-[116px]  btl:px-6 btl:pb-6 pt-[116px] bmLLL:px-16 bmLLL:pb-16 py-16 px-0 relative'>

        <Revealcompo css={'bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex items-center  flex-grow flex-shrink-0 basis-0 flex-col h-min justify-start  p-0 relative '}>
          {/* <div className='w-full min-h-[710px]  bg-[#FFF9F3] flex flex-col  lg:flex-row justify-center mt-16 py-10 md:py-20 tml:px-2 px-10 lg:px-4 gap-4 md:gap-16 rounded-[20px]'> */}
          {/* <div className=' relative flex-grow tml:max-w-[100px] tml:h-[100px] max-w-[200px] h-[200px]'>

              <Image src={worryemoji} alt='' fill={true} />
            </div> */}
          <div className='flex flex-col gap-6 text-[#32200C] tml:px-5 p-10 py-14 rounded-[20px] btl:self-center self-start border-4 border-r-8  border-[#010032] bg-[#FFF9F3] relative'>
            <h1 className={`${epilogue.className} tml:text-[1.5rem] whitespace-nowrap tml:px-6 text-[2.625rem] absolute  right-[50%] amLL:right-[-17%] top-[-60px] bg-[#ffecdc] rounded-[100px] px-9 py-3 font-medium rotate-[3.79deg] leading-[1.9] mt-2 tracking-[-.5px] `}>The Problem</h1>
            <p className={`${almarai.className} font-normal text-[1.125rem] leading-[2] tracking-[.02em] max-w-[770px]`}>For many Indian students, the final year of college is marked by the stress of on-campus
              placements. The process can be overwhelming, with multiple companies visiting and each
              having different expectations. It’s difficult to know where to start—how to craft the perfect
              resume, what to focus on for interviews, and which skills are most important.</p>
            <p className={`${almarai.className} font-normal text-[1.125rem] leading-[2] tracking-[.02em] max-w-[778px]`}>Students often struggle to stand out in a crowd of candidates, unsure of how to present
              themselves in the best possible way. Without clear guidance, they may find it challenging
              to match their preparation with what recruiters are looking for. This lack of direction can
              lead to missed opportunities, as students are unable to fully showcase their potential. What
              they need is a tool that offers personalized, actionable advice, helping them navigate the
              placement process with confidence and clarity.</p>
          </div>
          {/* </div> */}
        </Revealcompo>
      </div>

      {/* solution */}

      <div className='w-full flex flex-none items-center justify-center h-min overflow-hidden tml:p-2  tml:pt-[116px] btl:px-6 btl:pb-6 pt-[116px] bmLLL:px-16 bmLLL:pb-16 py-16 px-0 relative'>

        <Revealcompo css={'bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex items-center  flex-grow flex-shrink-0 basis-0 flex-col h-min justify-start  p-0 relative '}>
          {/* <div className='w-full min-h-[710px]  bg-[#FFF9F3] flex flex-col  lg:flex-row justify-center mt-16 py-10 md:py-20 tml:px-2 px-10 lg:px-4 gap-4 md:gap-16 rounded-[20px]'> */}
          {/* <div className=' relative flex-grow tml:max-w-[100px] tml:h-[100px] max-w-[200px] h-[200px]'>

      <Image src={worryemoji} alt='' fill={true} />
    </div> */}
          <div className='flex flex-col gap-6 text-white tml:px-5 p-10 py-14 rounded-[20px] btl:self-center self-end border-4 border-r-8  border-[#010032] bg-[#987de1] relative'>
            <h1 className={`${epilogue.className} tml:text-[1.5rem] whitespace-nowrap tml:px-6 text-[2.625rem] absolute left-[50%] amLL:left-[-6%] text-[#fff9f3] top-[-60px] bg-[#311F40] rounded-[100px] px-9 py-3 font-medium rotate-[-1.41deg] leading-[1.9] mt-2 tracking-[-.5px] `}>The Solution</h1>
            {/* <p className={`${almarai.className} font-normal text-[1.125rem] leading-[2] tracking-[.02em] max-w-[770px]`}>For many Indian students, the final year of college is marked by the stress of on-campus
              placements. The process can be overwhelming, with multiple companies visiting and each
              having different expectations. It’s difficult to know where to start—how to craft the perfect
              resume, what to focus on for interviews, and which skills are most important.</p> */}
            <p className={`${almarai.className} font-normal text-[1.125rem] pt-16 leading-[2] tracking-[.02em] max-w-[778px]`}>Our AI career assistant is the solution to these challenges. Designed specifically for Indian
              students facing on-campus placements, this platform combines advanced technology with
              practical insights to guide you through every stage of the placement process. Whether
              you’re refining your resume, preparing for interviews, or identifying which skills to sharpen,
              our AI provides personalized advice that’s easy to understand and act upon. It’s like having
              a mentor who knows exactly what each company is looking for and how you can match up
              to their expectations. With this tool, you’ll not only feel more confident but also be better
              prepared to showcase your true potential.</p>
          </div>
          {/* </div> */}
        </Revealcompo>
      </div>

      {/* <div className='w-full flex flex-none items-center justify-center h-min overflow-hidden tml:p-2 btl:pt-0 btl:px-6 btl:pb-6 bmLLL:pt-0 bmLLL:px-16 bmLLL:pb-16 py-16 px-0 relative'>

        <Revealcompo css={'bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex items-center rounded-[30px] flex-grow flex-shrink-0 basis-0 flex-col h-min justify-start overflow-hidden p-0 relative '}>
          <div className='w-full min-h-[623px] bg-[#FEAE67]/[.2] flex  flex-col lg:flex-row justify-center mt-10 items-center py-5 tml:px-2 px-8 rounded-[30px]'>
            <div className=' relative flex-grow lg:hidden  mt-5  tml:w-[100px] tml:h-[100px] max-w-[200px] h-[200px]'>

              <Image src={happyemoji} alt='' fill={true} />
            </div>
            <div className='flex flex-col gap-3 md:gap-8 px-2 text-[#32200C]'>
              <h1 className={`${epilogue.className} text-[2.625rem] font-bold leading-[1.9] mt-2 tracking-[.005em] `}>The Solution</h1>
              <p className={`${almarai.className} font-normal text-[1.125rem] leading-[2]  tracking-[.029em] max-w-[799px]`}>Our AI career assistant is the solution to these challenges. Designed specifically for Indian
                students facing on-campus placements, this platform combines advanced technology with
                practical insights to guide you through every stage of the placement process. Whether you’re
                refining your resume, preparing for interviews, or identifying which skills to sharpen, our AI
                provides personalized advice that’s easy to understand and act upon. It’s like having a mentor
                who knows exactly what each company is looking for and how you can match up to their
                expectations. With this tool, you’ll not only feel more confident but also be better prepared to
                showcase your true potential.</p>
            </div>
            <div className=' relative flex-grow hidden lg:block self-start mt-5  max-w-[200px] h-[200px]'>

              <Image src={happyemoji} alt='' fill={true} />
            </div>
          </div>
        </Revealcompo>
      </div> */}

      {/* Cue */}

      <div className='mt-10 w-full flex flex-none items-center justify-center  overflow-hidden tml:p-4 btl:pt-0 btl:px-6 btl:pb-6  bmLLL:pt-0 bmLLL:px-16 bmLLL:pb-16 py-16 px-0 relative '>

        <Revealcompo css={'bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex items-center rounded-[30px] flex-grow flex-shrink-0 basis-0 flex-col h-min justify-start overflow-hidden p-0 relative '}>
          <div className='flex tml:flex-col flex-none items-center rounded-[24px] tml:h-min h-[574px] btl:justify-center justify-end bg-[#005840] tml:p-6 p-11 py-28 relative w-full'>

            <div className=' tml:relative absolute tml:left-[0%] left-[-1px] flex-grow   flex items-center flex-none h-min justify-center overflow-hidden tml:top-auto top-[32%] w-min tml:translate-y-0 translate-y-[-50%] z-0 '>
              <div className='flex-none tml:aspect-auto  [aspect-ratio:1/1] relative tml:w-[600px] tml:h-[300px] w-[448px]   h-full'>

                <Image src={cuebg} alt='' fill={true} className='object-cover' />
              </div>
            </div>
            <div className='flex flex-col gap-5 tml:w-full  md:bottom-[95px] right-5 lg:right-12 tml:justify-start justify-end px-3 md:px-0 items-center md:items-end '>
              <h1 className={`${epilogue.className} font-bold  text-[10rem] lg:text-[12.5rem] leading-[1.3] tracking-[-.5px] text-white`}>Cue</h1>
              <h3 className={`${almarai.className} font-medium  text-[1.2rem] lg:text-[2rem] leading[1.5] tracking-[.02em] text-white `}>Your ultimate AI wingman for campus placements</h3>
              <h3 className={`${almarai.className} font-medium text-[1.2rem] lg:text-[2rem] leading[1.5] tracking-[.02em] text-[#CFFF92] `}>—because landing your dream job shouldn't be a solo mission!</h3>
            </div>
          </div>
        </Revealcompo>
      </div>


      {/* our values */}

      <div className='flex items-center justify-center flex-none flex-col h-min overflow-hidden tml:py-12 tml:px-2 p-16 relative w-full'>
        <div className='bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex flex-col tml:gap-12  gap-14 items-center flex-none w-full relative z-[1] p-0 justify-center '>
          <div className='h-min tml:w-full w-min relative '>
            <h2 className={`${epilogue.className} text-[#311f40] text-[2.75rem] font-semibold tracking-[-.5px] leading-[1.2] whitespace-nowrap`}>Our values</h2>
            <div className=' top-[50%] translate-y-[-50%] absolute h-[58px] w-[88px] tml:right-0 right-[-103px] z-[1] '>
              <Image src={headingstar} alt='' fill={true} />
            </div>
          </div>

          <div className='flex flex-none items-center flex-col gap-6  justify-center relative w-full '>

            <div className="  flex flex-col lg:flex-row flex-grow flex-shrink-0 basis-0 items-center tml:px-0 px-4 lg:px-0 gap-6 justify-center w-full relative ">

              <div className="flex flex-col tml:items-center btl:items-center items-start flex-grow flex-shrink-0 basis-0   p-8 relative  gap-3 bg-[#CFFF92]  rounded-[30px]  w-full  h-min">
                <div className='w-[60px] h-[60px] rounded-[30px] mb-5 flex justify-center items-center bg-[#987DE1] border-[3px] border-[#015840]'>
                  <h1 className={`${epilogue.className} font-medium text-[2rem] leading-[1.8] tracking-[-.5px] text-[#CFFF92]`}>#1</h1>
                </div>
                <h2 className={`${epilogue.className} font-bold text-[1.4rem] xl:text-[2rem] leading-[1.5] tracking-[-.5px] text-[#311f40]`}>Student-First Rocket Fuel</h2>
                <p className={`${almarai.className} font-normal max-w-[451px] text-[1.1rem] xl:text-[1.5rem] leading-[1.5] text-[#311f40] tracking-[-.03em]`}>Your success is our mission's  launch pad.</p>

              </div>


              <div className="flex flex-col tml:items-center btl:items-center items-start flex-grow flex-shrink-0 basis-0 h-mini  p-8 relative gap-3 bg-[#987DE1]  rounded-[30px]  w-full  ">
                <div className='w-[60px] h-[60px]  rounded-[30px] mb-5 flex justify-center items-center bg-[#FEAE67] border-[3px] border-[#015840]'>
                  <h1 className={`${epilogue.className} font-medium  text-[2rem] leading-[1.8] tracking-[-.5px] text-[#32200C]`}>#2</h1>
                </div>
                <h2 className={`${epilogue.className} font-bold text-[1.4rem] xl:text-[2rem] leading-[1.5] tracking-[-.5px] text-[#311f40]`}>Fail Forward, Succeed Skyward</h2>
                <p className={`${almarai.className} font-normal max-w-[496px] text-[1.1rem] xl:text-[1.5rem] leading-[1.5] text-[#311f40] tracking-[-.03em]`}>We learn from setbacks to reach new heights</p>
              </div>

            </div>



            <div className="  flex tml:px-0 px-4 lg:px-0  flex-col lg:flex-row items-start flex-grow flex-shrink-0 basis-0  justify-center w-full relative gap-6 ">

              <div className="flex tml:items-center btl:items-center flex-col items-start flex-grow flex-shrink-0 basis-0 h-min  p-8 relative gap-3 bg-[#ffae67]  rounded-[30px]   w-full ">
                <div className='w-[60px] h-[60px] rounded-[30px] mb-5 flex justify-center items-center bg-[#3e2751] border-[3px] border-[#015840]'>
                  <h1 className={`${epilogue.className} font-medium text-[2rem] leading-[1.8] tracking-[-.5px] text-[#CFFF92]`}>#3</h1>
                </div>
                <h2 className={`${epilogue.className} font-bold text-[1.4rem] xl:text-[2rem] leading-[1.5] tracking-[-.5px] text-[#311f40]`}>Curiosity on Steroids</h2>
                <p className={`${almarai.className} font-normal max-w-[451px] text-[1.1rem] xl:text-[1.5rem] leading-[1.5] text-[#311f40] tracking-[-.03em]`}>We ask "why" more often than a toddler</p>
              </div>


              <div className="flex tml:items-center btl:items-center flex-col items-start flex-grow flex-shrink-0 basis-0 h-min  p-8 relative gap-3 bg-[#3e2757]  rounded-[30px]   w-full">
                <div className='w-[60px] h-[60px] rounded-[30px] mb-5 flex justify-center items-center bg-[#cfff92] border-[3px] border-[#015840]'>
                  <h1 className={`${epilogue.className} font-medium text-[2rem] leading-[1.8] tracking-[-.5px] text-[#311f40]`}>#4</h1>
                </div>
                <h2 className={`${epilogue.className} font-bold text-[1.4rem] xl:text-[2rem] leading-[1.5] tracking-[-.5px] text-[#311f40] `}>Innovation is Our Caffeine</h2>
                <p className={`${almarai.className} font-normal max-w-[496px] text-[1.1rem] xl:text-[1.5rem] leading-[1.5] text-[#311f40] tracking-[-.03em]`}>We're always brewing  fresh ideas</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* our promise */}

      <div className=' tml:p-2 btl:pt-0 btl:px-6 btl:pb-6 bmLLL:pt-0 bmLLL:px-16 bmLLL:pb-16 flex items-center justify-center h-min flex-none overflow-hidden py-16 px-0 relative w-full'>
        <div className='bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex items-center justify-start flex-grow flex-shrink-0 basis-0 overflow-hidden relative'>
          <div className='flex items-start flex-none h-min gap-6 justify-start relative w-full '>
            <div className='flex items-start bg-[#ffae67] rounded-[24px] flex-col flex-grow flex-shrink-0 basis-0 h-min justify-start overflow-hidden tml:p-4 p-11 relative'>
              <div className='flex flex-col gap-6 h-min flex-none relative w-full justify-start items-start'>
                <div className='flex justify-center items-center bg-[#cfff92] rounded-[100px] flex-none h-min py-2 px-4 w-min'>
                  <p className={`${epilogue.className} tml:text-[1.5rem] text-[1rem] font-normal leading-[1.3] text-[#311f40] tracking-[-.5px] whitespace-nowrap text-start `}>Our promise</p>
                </div>
                <div className='border-[#cfff92] border-l-8 border-solid flex items-center flex-none w-full justify-start h-min py-0 tml:px-2 px-8 relative '>
                  <div className='h-auto flex-grow flex-shrink-0 basis-0 relative '>
                    <h3 className={`text-[2rem] ${almarai.className} bmL4k:text-[2rem] font-normal tracking-[-.02em] text-start text-[#311f40] leading-[1.2]`}>“We make the job search enjoyable for new grads, the institutions that educated them, and the employers that are about to hire them — ensuring that no one has to job hunt alone.”</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className='bmL4k:w-[320px] self-stretch rounded-[24px] flex-none h-auto relative tml:hidden btl:hidden bmLLL:hidden w-[279px] bg-[#cfff92]'></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
