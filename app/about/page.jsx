import { boldaeonikFont, mediumaeonikFont, regularaeonikFont } from '@/utils/font'
import React from 'react'
import Image from 'next/image'
import laughingstar from '@/public/about/laughingstar.png'
import ai from '@/public/about/Ai.png'
import assistant from '@/public/about/assistant.png'
import oncampus from '@/public/about/on-campus.png'
import drives from '@/public/about/drives.png'
import eyeemji from '@/public/about/eyeemoji.png'
import worryemoji from '@/public/about/worryemoji.png'
import happyemoji from '@/public/about/happyemoji.png'
import bgdesign from '@/public/about/bgdesign.png'
import cuebg from '@/public/about/star ladder.svg'
import headingstar from '@/public/about/heading star.svg'
import Revealcompo from '../components/Revealcompo'
const page = () => {
  return (
    <div className='min-h-screen w-auto overflow-hidden xl:overflow-visible  mx-auto flex flex-col items-center justify-start h-min p-0 relative'>

      {/* about cue */}
      <div className='tml:pt-[72px] tml:px-4 tml:pb-4 btl:pt-20 btl:px-6 btl:pb-6 bmLLL:pt-[116px] lg:mx-auto bmLLL:px-[64px] bmLLL:pb-[64px] pt-[116px] px-16 pb-12 flex items-center flex-none h-min justify-center relative w-full '>

        <Revealcompo css={'flex flex-col bg-[#cfff92] rounded-[20px] flex-grow-[1] flex-shrink-0 basis-0 tml:h-auto gap-0 tml:min-h-0 min-h-[600px] justify-start  items-center bmL4k:max-w-[1312px] max-w-[1640px] p-0 relative w-full'}>
          <div className=' bmLLL:p-[64px] bmL4k:p-[64px] tml:p-3 p-16 bmLLL:pt-0 bmL4k:pt-0 pt-0 tml:w-full bmLLL:w-full w-[75%] flex flex-col flex-none items-center justify-start gap-6 h-min relative'>
            <div className='flex justify-start flex-col flex-shrink-0 mt-20 flex-none h-auto relative whitespace-pre-wrap w-full'>
              <p className={`${boldaeonikFont.className} font-normal text-[#015840] text-[20px] tracking-normal leading-[2rem] text-center tml:p-2  m-0 p-0`}>About Cue</p>
            </div>
            <div className='flex-none h-auto relative flex justify-center mt-2  whitespace-pre-wrap w-full'>
              <h2 className={` ${mediumaeonikFont.className} font-medium text-[#015840]/[.85] text-[1.65rem]   tml:w-full btl:w-[80%] w-[70%]  tracking-[.02em] leading-[1em] md:leading-[2]  text-center `}>
                Our mission is to be the trusted AI partner for students,
                simplifying the on-campus placement process and
                helping them land their dream jobs
              </h2>
            </div>
          </div>
          <div className='bmLLL:h-auto   flex-none relative w-full  '>
            <div className='flex justify-center items-end'>
              <div className=' relative flex-grow  max-w-[150px] h-[150px] lg:max-w-[200px] lg:h-[200px]'>

                <Image src={laughingstar} alt='' fill={true} />
              </div>
              <div className=' relative flex-grow max-w-[80px] h-[80px] lg:max-w-[101px] -ml-3 lg:h-[100px]'>

                <Image src={ai} alt='' fill={true} />
              </div>
              <div className=' relative flex-grow max-w-[170px] h-[170px] lg:max-w-[281px] -mb-3  lg:mb-16 -ml-3 lg:-ml-5 lg:h-[114px]'>

                <Image src={assistant} alt='' width={170} height={70} className='lg:hidden absolute bottom-0' />
                <Image src={assistant} alt='' width={281} height={114} className='hidden lg:block' />
              </div>
              <div className=' relative flex-grow max-w-[170px] h-[70px] lg:max-w-[293px] -ml-3 lg:-ml-12 lg:h-[100px]'>

                <Image src={oncampus} alt='' fill={true} />
              </div>
              <div className=' relative flex-grow max-w-[50px] h-[180px] lg:max-w-[75px]  ml-2 -mb-16 lg:h-[294px]'>

                <Image src={drives} alt='' fill={true} />
              </div>
              <div className=' relative flex-grow max-w-[120px] h-[120px] lg:max-w-[180px]  ml-2  lg:h-[180px]'>

                <Image src={eyeemji} alt='' fill={true} />
              </div>
              {/* <div className='absolute  amLL:hidden  w-full h-full'>
              {/* <Image src={herosmall} alt='' fill={true} /> */}
              {/* </div> */}
            </div>
          </div>
        </Revealcompo>
      </div>

      {/* the problem */}

      <div className='w-full flex flex-none items-center justify-center h-min overflow-hidden tml:p-4  btl:pt-0 btl:px-6 btl:pb-6 bmLLL:pt-0 bmLLL:px-16 bmLLL:pb-16 py-16 px-0 relative'>

        <Revealcompo css={'bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex items-center rounded-[30px] flex-grow flex-shrink-0 basis-0 flex-col h-min justify-start overflow-hidden p-0 relative '}>
          <div className='w-full min-h-[710px]  bg-[#FFF9F3] flex flex-col  lg:flex-row justify-center mt-16 py-10 md:py-20 tml:px-2 px-10 lg:px-4 gap-4 md:gap-16 rounded-[20px]'>
            <div className=' relative flex-grow  max-w-[200px] h-[200px]'>

              <Image src={worryemoji} alt='' fill={true} />
            </div>
            <div className='flex flex-col gap-6 text-[#32200C]'>
              <h1 className={`${mediumaeonikFont.className} text-[2.625rem] font-bold leading-[1.9] mt-2 tracking-[.005em] `}>The Problem</h1>
              <p className={`${regularaeonikFont.className} font-normal text-[1.125rem] leading-[2] tracking-[.029em] max-w-[770px]`}>For many Indian students, the final year of college is marked by the stress of on-campus
                placements. The process can be overwhelming, with multiple companies visiting and each
                having different expectations. It’s difficult to know where to start—how to craft the perfect
                resume, what to focus on for interviews, and which skills are most important.</p>
              <p className={`${regularaeonikFont.className} font-normal text-[1.125rem] leading-[2] tracking-[.029em] max-w-[778px]`}>Students often struggle to stand out in a crowd of candidates, unsure of how to present
                themselves in the best possible way. Without clear guidance, they may find it challenging
                to match their preparation with what recruiters are looking for. This lack of direction can
                lead to missed opportunities, as students are unable to fully showcase their potential. What
                they need is a tool that offers personalized, actionable advice, helping them navigate the
                placement process with confidence and clarity.</p>
            </div>
          </div>
        </Revealcompo>
      </div>

      {/* solution */}

      <div className='w-full flex flex-none items-center justify-center h-min overflow-hidden tml:p-4 btl:pt-0 btl:px-6 btl:pb-6 bmLLL:pt-0 bmLLL:px-16 bmLLL:pb-16 py-16 px-0 relative'>

        <Revealcompo css={'bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex items-center rounded-[30px] flex-grow flex-shrink-0 basis-0 flex-col h-min justify-start overflow-hidden p-0 relative '}>
          <div className='w-full min-h-[623px] bg-[#FEAE67]/[.2] flex  flex-col lg:flex-row justify-center mt-10 items-center py-5 tml:px-2 px-8 rounded-[30px]'>
            <div className=' relative flex-grow lg:hidden  mt-5  w-[200px] lg:max-w-[200px] h-[200px]'>

              <Image src={happyemoji} alt='' fill={true} />
            </div>
            <div className='flex flex-col gap-3 md:gap-8  text-[#32200C]'>
              <h1 className={`${mediumaeonikFont.className} text-[2.625rem] font-bold leading-[1.9] mt-2 tracking-[.005em] `}>The Solution</h1>
              <p className={`${regularaeonikFont.className} font-normal text-[1.125rem] leading-[2] tracking-[.029em] max-w-[799px]`}>Our AI career assistant is the solution to these challenges. Designed specifically for Indian
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
      </div>

      {/* Cue */}

      <div className='mt-10 w-full flex flex-none items-center justify-center  overflow-hidden tml:p-4 btl:pt-0 btl:px-6 btl:pb-6  bmLLL:pt-0 bmLLL:px-16 bmLLL:pb-16 py-16 px-0 relative '>

        <Revealcompo css={'bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex items-center rounded-[30px] flex-grow flex-shrink-0 basis-0 flex-col h-min justify-start overflow-hidden p-0 relative '}>
          <div className='flex flex-none items-center rounded-[24px] h-[574px] btl:justify-center justify-end bg-[#005840] tml:p-6 p-11 py-28 relative w-full'>

            <div className=' absolute tml:hidden left-[-1px] flex-grow  hidden md:flex items-center flex-none h-min justify-center overflow-hidden top-[32%] w-min translate-y-[-50%] z-0 '>
              <div className='flex-none  [aspect-ratio:1/1] relative w-[448px]   h-full'>

                <Image src={cuebg} alt='' fill={true} />
              </div>
            </div>
            <div className='flex flex-col gap-5 tml:w-full  md:bottom-[95px] right-5 lg:right-12 tml:justify-start justify-end px-3 md:px-0 items-center md:items-end '>
              <h1 className={`${boldaeonikFont.className} font-bold  text-[10rem] lg:text-[12.5rem] leading-[1.3] tracking-[.029em] text-white`}>Cue</h1>
              <h3 className={`${mediumaeonikFont.className} font-medium  text-[1.2rem] lg:text-[2rem] leading[1.5] tracking-[.02em] text-white `}>Your ultimate AI wingman for campus placements</h3>
              <h3 className={`${mediumaeonikFont.className} font-medium text-[1.2rem] lg:text-[2rem] leading[1.5] tracking-[.02em] text-[#CFFF92] `}>—because landing your dream job shouldn't be a solo mission!</h3>
            </div>
          </div>
        </Revealcompo>
      </div>




      <div className='flex items-center justify-center flex-none flex-col h-min overflow-hidden tml:py-12 tml:px-4 p-16 relative w-full'>
        <div className='bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex flex-col tml:gap-12  gap-14 items-center flex-none w-full relative z-[1] p-0 justify-center '>
          <div className='h-min tml:w-full w-min relative '>
            <h2 className={`${mediumaeonikFont.className} text-[#311f40] text-[2.75rem] font-normal tracking-normal leading-[1.2] whitespace-nowrap`}>Our values</h2>
            <div className=' top-[50%] translate-y-[-50%] absolute h-[58px] w-[88px] tml:right-0 right-[-103px] z-[1] '>
              <Image src={headingstar} alt='' fill={true} />
            </div>
          </div>

          <div className='flex flex-none items-center flex-col gap-6  justify-center relative w-full '>

            <div className="  flex flex-col lg:flex-row flex-grow flex-shrink-0 basis-0 items-center tml:px-2 px-4 lg:px-0 gap-6 justify-center w-full relative ">

              <div className="flex flex-col tml:items-center btl:items-center items-start flex-grow flex-shrink-0 basis-0   p-8 relative  gap-3 bg-[#CFFF92]  rounded-[30px]  w-full  h-min">
                <div className='w-[60px] h-[60px] rounded-[30px] mb-5 flex justify-center items-center bg-[#987DE1] border-[3px] border-[#015840]'>
                  <h1 className={`${mediumaeonikFont.className} font-medium text-[2rem] leading-[1.8] tracking-wide text-[#CFFF92]`}>#1</h1>
                </div>
                <h2 className={`${boldaeonikFont.className} font-bold text-[1.4rem] xl:text-[2rem] leading-[1.5] tracking-[-.02em] text-[#311f40]`}>Student-First Rocket Fuel</h2>
                <p className={`${regularaeonikFont.className} font-normal max-w-[451px] text-[1.1rem] xl:text-[1.5rem] leading-[1.5] text-[#311f40] tracking-[-.03em]`}>Your success is our mission's  launch pad.</p>

              </div>


              <div className="flex flex-col tml:items-center btl:items-center items-start flex-grow flex-shrink-0 basis-0 h-mini  p-8 relative gap-3 bg-[#987DE1]  rounded-[30px]  w-full  ">
                <div className='w-[60px] h-[60px]  rounded-[30px] mb-5 flex justify-center items-center bg-[#FEAE67] border-[3px] border-[#015840]'>
                  <h1 className={`${mediumaeonikFont.className} font-medium  text-[2rem] leading-[1.8] tracking-wide text-[#32200C]`}>#2</h1>
                </div>
                <h2 className={`${boldaeonikFont.className} font-bold text-[1.4rem] xl:text-[2rem] leading-[1.5] tracking-[-.02em] text-[#311f40]`}>Fail Forward, Succeed Skyward</h2>
                <p className={`${regularaeonikFont.className} font-normal max-w-[496px] text-[1.1rem] xl:text-[1.5rem] leading-[1.5] text-[#311f40] tracking-[-.03em]`}>We learn from setbacks to reach new heights</p>
              </div>

            </div>



            <div className="  flex tml:px-2 px-4 lg:px-0  flex-col lg:flex-row items-start flex-grow flex-shrink-0 basis-0  justify-center w-full relative gap-6 ">

              <div className="flex tml:items-center btl:items-center flex-col items-start flex-grow flex-shrink-0 basis-0 h-min  p-8 relative gap-3 bg-[#ffae67]  rounded-[30px]   w-full ">
                <div className='w-[60px] h-[60px] rounded-[30px] mb-5 flex justify-center items-center bg-[#3e2751] border-[3px] border-[#015840]'>
                  <h1 className={`${mediumaeonikFont.className} font-medium text-[2rem] leading-[1.8] tracking-wide text-[#CFFF92]`}>#3</h1>
                </div>
                <h2 className={`${boldaeonikFont.className} font-bold text-[1.4rem] xl:text-[2rem] leading-[1.5] tracking-[-.02em] text-[#311f40]`}>Curiosity on Steroids</h2>
                <p className={`${regularaeonikFont.className} font-normal max-w-[451px] text-[1.1rem] xl:text-[1.5rem] leading-[1.5] text-[#311f40] tracking-[-.03em]`}>We ask "why" more often than a toddler</p>
              </div>


              <div className="flex tml:items-center btl:items-center flex-col items-start flex-grow flex-shrink-0 basis-0 h-min  p-8 relative gap-3 bg-[#3e2757]  rounded-[30px]   w-full">
                <div className='w-[60px] h-[60px] rounded-[30px] mb-5 flex justify-center items-center bg-[#cfff92] border-[3px] border-[#015840]'>
                  <h1 className={`${mediumaeonikFont.className} font-medium text-[2rem] leading-[1.8] tracking-wide text-[#311f40]`}>#4</h1>
                </div>
                <h2 className={`${boldaeonikFont.className} font-bold text-[1.4rem] xl:text-[2rem] leading-[1.5] tracking-[-.02em] text-[#311f40] max-w-[394px]`}>Innovation is Our Caffeine</h2>
                <p className={`${regularaeonikFont.className} font-normal max-w-[496px] text-[1.1rem] xl:text-[1.5rem] leading-[1.5] text-[#311f40] tracking-[-.03em]`}>We're always brewing  fresh ideas</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className=' tml:p-4 btl:pt-0 btl:px-6 btl:pb-6 bmLLL:pt-0 bmLLL:px-16 bmLLL:pb-16 flex items-center justify-center h-min flex-none overflow-hidden py-16 px-0 relative w-full'>
        <div className='bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex items-center justify-start flex-grow flex-shrink-0 basis-0 overflow-hidden relative'>
          <div className='flex items-start flex-none h-min gap-6 justify-start relative w-full '>
            <div className='flex items-start bg-[#ffae67] rounded-[24px] flex-col flex-grow flex-shrink-0 basis-0 h-min justify-start overflow-hidden tml:p-4 p-11 relative'>
              <div className='flex flex-col gap-6 h-min flex-none relative w-full justify-start items-start'>
                <div className='flex justify-center items-center bg-[#cfff92] rounded-[100px] flex-none h-min py-2 px-4 w-min'>
                  <p className={`${mediumaeonikFont.className} tml:text-[1.5rem] text-[1rem] font-normal leading-[1.3] text-[#311f40] tracking-normal whitespace-nowrap text-start `}>Our promise</p>
                </div>
                <div className='border-[#cfff92] border-l-8 border-solid flex items-center flex-none w-full justify-start h-min py-0 tml:px-2 px-8 relative '>
                  <div className='h-auto flex-grow flex-shrink-0 basis-0 relative '>
                    <h3 className={`text-[2rem] ${mediumaeonikFont.className} bmL4k:text-[2rem] font-normal tracking-[-.02em] text-start text-[#311f40] leading-[1.2]`}>“We make the job search enjoyable for new grads, the institutions that educated them, and the employers that are about to hire them — ensuring that no one has to job hunt alone.”</h3>
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
