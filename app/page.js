'use client'
import { useInView } from 'framer-motion'
import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { almarai, boldaeonikFont, epilogue, mediumaeonikFont, regularaeonikFont } from "@/utils/font";
import Image from "next/image";
import c from '@/public/c_logo.png'
import sdebackend from '@/public/sde-1backend.png'
import aifeedback from '@/public/aifeedback.png'
import tailoredToeach from '@/public/tailered.png'
import Imagecomponet from "./components/Imagecomponet";
import Meetndlearn from '@/app/components/Meetndlearn'
import Faq from "./components/Faq";
import Revealcompo from './components/Revealcompo';
import Loading from './components/Loading';
import Hero from './components/Home/Hero';

export default function Home() {


  return (
    <>
      <Loading />
      <div className=" flex flex-col bg-white min-h-screen w-auto h-min justify-start p-0 relative ">
        <Hero />

        {/* meet cuegrad */}

        <div className="   overflow-hidden flex relative w-full tml:px-2 tml:pb-4  btl:px-6 btl:pb-6 bmLLL:px-16 bmLLL:pb-16   px-16 flex-none h-min justify-center flex-col items-center">

          <Revealcompo css={"bg-[#FDF3EA] bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex items-center tml:p-3 tml:p-10 p-16 rounded-[30px]  text-[#F9576E] flex-grow flex-shrink-0 basis-0 flex-col   w-full"}>

            <h1 className={`${epilogue.className} font-semibold tml:text-[2rem] text-[2rem] md:text-[3.25rem] leading-[1] tracking-[-.5px]`}>Meet Cue</h1>
            <p className={`${almarai.className} font-normal mt-2  af990:mt-4 max-w-[600px] lg:max-w-[717px] text-center tml:text-[1.1rem] text-[1.5rem] md:text-[1.75rem] leading-[2] tml: tracking-[0px]`}>your personalized assistant designed to help you excel
              in on-campus placement drives</p>
          </Revealcompo>

        </div>

        {/* students have to say about Cuegrad */}

        <div className="bmLLL:pt-0 bmLLL:px-16 bmLLL:pb-16 flex items-center flex-none w-full h-min justify-center overflow-hidden relative btl:pt-0 btl:px-6 btl:pb-6 btl:py-0 tml:p-4 tml:px-2 py-16 px-0">

          <Revealcompo css={'items-center rounded-[30px]  flex-grow flex-shrink-0 basis-0 flex-col h-min max-w-[1640px] overflow-hidden relative bmL4k:max-w-[1312px]'}>
            <div className="bg-[#977DE0] rounded-[30px] tml:pt-8 tml:px-6 tml:pb-6 tml:gap-8 pt-10 px-11 pb-11 w-full flex  flex-col gap-12 h-min  items-center justify-start overflow-hidden ">
              <h2 className={`${epilogue.className}  font-medium tml:text-balance text-center text-[1.5rem] lg:text-[2rem] mt-3 leading-[1.8] text-white tml:tracking-normal tracking-[-.0px]`}>Here’s what students have to say about Cue</h2>
              <div className={`${almarai.className} flex flex-col lg:flex-row lg:items-stretch gap-2 lg:gap-4 tml:px-0 px-2 `}>
                <div className={` bg-black lg:w-[33%]    rounded-[10px] px-4 lg:px-7 lg:pr-9 py-10`}>
                  <p className={` font-normal  text-white/[.9] text-[1rem] lg:text-[1.13rem] leading-[2] tracking-[.001em]`}>This AI assistant sounds like a
                    fantastic idea! Having personalized
                    advice and support throughout the
                    on-campus placement process
                    could be incredibly helpful.</p>
                </div>
                <div className="bg-black  lg:w-[33%]   rounded-[10px] px-4 lg:px-7 lg:pr-9 py-10">
                  <p className={` font-normal  text-white/[.9] text-[1rem] lg:text-[1.13rem] leading-[2] tracking-[.001em]`}>I’m really impressed by this AI career
                    assistant idea. The thought of having
                    interactive AI tools for on-campus
                    placement prep is fantastic. It seems
                    like a great way to stay prepared &
                    competitive during the placement
                    season</p>
                </div>
                <div className="bg-black  lg:w-[33%]  md:h-min rounded-[10px] px-4 lg:px-7 lg:pr-5 py-10">
                  <p className={` font-normal   text-white/[.9] text-[1rem] lg:text-[1.13rem] leading-[2] tracking-[.001em]`}>This AI-powered on-campus placement
                    assistant sounds like it could be a
                    game-changer for placements. The
                    idea of having a tool that tracks
                    applications, answer questions related
                    to ongoing placement drives & provides
                    targeted advice is fantastic. It could
                    make the entire placement process
                    more manageable and less stressful.</p>
                </div>
              </div>
            </div>
          </Revealcompo>

        </div>

        {/* oncampus placemnt assistant */}

        <div className="bg-white flex flex-none w-full relative overflow-hidden justify-center items-center h-min bmLLL:py-[64px] bmLLL:pr-0 tml:pt-16 tml:px-2 tml:pr-2 tml:pb-4 btl:py-[48px]  py-16 px-0 ">
          <div className="flex flex-grow flex-shrink-0 basis-0 flex-col h-min justify-start max-w-[1640px] bmL4k:max-w-[1312px] overflow-hidden p-0 relative ">

            <div className="flex flex-col flex-none w-full relative items-center justify-start tml:gap-10 gap-[64px] h-min p-2 pl-0 tml:pl-2 pr-0 tml:pr-2">

              <Revealcompo css={"flex flex-col items-center flex-none p-0 w-full gap-3 h-min justify-start "} >
                <h1 className={`font-medium tml:text-start text-[1.7rem] md:text-[2.25rem] mx-auto text-center text-black leading-[1.7] tracking-[-.5px] max-w-[580px]  ${epilogue.className}`}>On-Campus Placements Assistant to
                  help you get placed</h1>
                <p className={`${epilogue.className} font-normal  text-center text-[1.125rem] md:text-[1.25rem] leading-[2] tracking-[0px] tml:text-start max-w-[550px]  text-[#2C2C2C]/[.9]`}>CueGrad is your AI-powered co-pilot, guiding you through
                  every step of the on-campus placement process.  </p>
              </Revealcompo>


              <div className="flex flex-col items-center flex-none tml:gap-10 gap-[64px] h-min justify-start p-0 relative w-full mx-auto ">


                <Revealcompo css={"flex  flex-row tml:flex-col tml:pl-0 pl-4  tml:gap-5 gap-5 md:gap-24 p-0 w-full h-min relative flex-none justify-center  items-center"}>
                  <div className={`${epilogue.className} flex tml:flex-none tml:w-full bmLLL:pl-16 pr-4 items-start flex-col flex-grow flex-shrink-0 basis-0 gap-5 h-min justify-start p-0 relative `}>
                    <h2 className="text-[#977DE0] text-[1.2rem] lg:text-[1.625rem]  font-medium leading-[2] tracking-[-.5px]">Personalized Skill Gap Analyzer</h2>
                    <p className={`${almarai.className} font-normal   text-[1rem] lg:text-[1.25rem] leading-[1.9] tracking-[.005em]`}>Evaluate your skills against the job requirements of
                      companies participating in the placement drive. Identify
                      specific skill gaps to focus on the most critical areas for
                      improvement</p>
                  </div>

                  <div className=" overflow-hidden tml:hidden flex flex-col justify-center items-center  h-[582px]  tml:flex-none tml:w-full tml:mx-4 flex-grow flex-shrink basis-0 px-4 rounded-[25px] bg-cover bg-[url('https://ik.imagekit.io/ysp4xwrz9/website/Group%201471.svg')] border-t-[6px] border-r-[10px] border-b-[6px] border-l-[6px] border-[#311f40] relative">
                    {/* <Image src={sdebackend} alt="" fill={true} className="w-full h-full" /> */}
                    {/* <Imagecomponet image={'https://ik.imagekit.io/ysp4xwrz9/website/Group%201442.svg'} /> */}
                    {/* <Image src={sdebackend} alt="" fill={true} sizes="max((min(max(100vw - 128px, 1px), 1640px) - 96px) / 2, 1px)" /> */}
                    <div className='bg-white h-[476px]  max-w-[500px] self-center flex flex-col gap-10 rounded-[10px] tml:px-4 px-6 pl-14 text-[#4242be] py-16'>
                      <p className={`text-[1.5rem] tracking-[-.1px] text-balance ${almarai.className} leading-[2]`}>
                        Practice the following leetcode questions for the upcoming OA
                      </p>
                      <div className='rounded-[20px] bg-[#8d8de2]/[.2] h-[25px] w-[287px] '></div>
                      <div className='rounded-[20px] bg-[#8d8de2]/[.2] h-[25px] w-[287px] '></div>
                      <div className='rounded-[20px] bg-[#8d8de2]/[.2] h-[25px] w-[287px] '></div>
                    </div>
                  </div>


                  <div className=" overflow-hidden tml:flex  hidden  justify-center items-center tml:p-6 tml:h-auto  h-[582px]   tml:basis-auto tml:w-full tml:mx-4 flex-grow flex-shrink basis-0 tml:px-2 px-4 rounded-[20px] bg-[#A18AE3] border-t-[6px] border-r-[10px] border-b-[6px] border-l-[6px] border-[#311f40] relative">
                    {/* <Image src={sdebackend} alt="" fill={true} className="w-full h-full" /> */}
                    {/* <Imagecomponet image={'https://ik.imagekit.io/ysp4xwrz9/website/Group%201442.svg'} /> */}
                    {/* <Image src={sdebackend} alt="" fill={true} sizes="max((min(max(100vw - 128px, 1px), 1640px) - 96px) / 2, 1px)" /> */}
                    <div className='bg-white mx-auto tml:h-auto h-[476px]  max-w-[500px] self-center flex flex-col gap-10 rounded-[10px] tml:p-4 px-6 pl-14 text-[#4242be] py-16'>
                      <p className={`text-[1.5rem] tracking-[-.1px] text-balance ${almarai.className} leading-[2]`}>
                        Practice the following leetcode questions for the upcoming OA
                      </p>
                      <div className='rounded-[20px] bg-[#8d8de2]/[.2] h-[25px] w-[287px] '></div>
                      <div className='rounded-[20px] bg-[#8d8de2]/[.2] h-[25px] w-[287px] '></div>
                      <div className='rounded-[20px] bg-[#8d8de2]/[.2] h-[25px] w-[287px] '></div>
                    </div>
                  </div>
                </Revealcompo>



                <Revealcompo css={"flex flex-row  tml:flex-col tml:gap-5 gap-5 md:gap-24 p-0  w-full h-min relative flex-none justify-center  items-center"}>
                  <div className=" tml:hidden  rounded-[25px] h-[582px]  tml:flex-none tml:w-full flex-grow tml:order-1 flex-shrink basis-0 px-4 bg-no-repeat bg-[url('https://ik.imagekit.io/ysp4xwrz9/website/Group%201472.svg')] flex border-t-[6px] border-r-[10px] border-b-[6px] border-l-[6px] border-[#311f40]  items-center justify-center relative">
                    <div className='bg-white h-[476px]  max-w-[500px]   flex flex-col gap-5 rounded-[20px]  px-5 tml:pr-1  py-6'>
                      <h3 className={`${almarai.className} text-[1.125rem] text-[#3A472E]/[.8] font-semibold leading-[1.3] tracking-[-.5px]`}>AI FEEDBACK</h3>
                      <div className={`${almarai.className} text-[1.25rem] font-normal leading-[2.1] bg-[#CFFF92]/[.3] p-8 pt-12 pr-16 rounded-[20px] tml:pr-1 tracking-[-.3px]`}>
                        Consider adding some projects in Golang.
                        Including projects with expertise
                        demonstrated in building microservices
                        using Golang & any other tech stack might
                        significantly increase your chances to get
                        shortlisted for the further rounds of coding
                        interviews
                      </div>
                    </div>
                    {/* <Image src={sdebackend} alt="" fill={true} className="w-full h-full" /> */}
                    {/* <Imagecomponet image={'https://ik.imagekit.io/ysp4xwrz9/website/Group%201468.svg'} /> */}
                  </div>


                  <div className=" tml:flex hidden rounded-[20px] tml:p-6 tml:h-auto h-[582px]  tml:flex-none tml:w-full flex-grow tml:order-1 flex-shrink basis-0 tml:px-2 px-4 bg-[#BAF484]  items-center justify-center border-t-[6px] border-r-[10px] border-b-[6px] border-l-[6px] border-[#311f40] relative">
                    <div className='bg-white tml:h-auto h-[476px]  max-w-[500px]   flex flex-col gap-5 rounded-[20px]  px-5 tml:pr-5  py-6'>
                      <h3 className={`${almarai.className} text-[1.125rem] text-[#3A472E]/[.8] font-semibold leading-[1.3] tracking-[-.5px]`}>AI FEEDBACK</h3>
                      <div className={`${almarai.className} text-[1.25rem] font-normal leading-[2.1] bg-[#CFFF92]/[.3] p-8 tml:p-4  pt-12 pr-16 rounded-[20px] tml:pr-4 tracking-[-.3px]`}>
                        Consider adding some projects in Golang.
                        Including projects with expertise
                        demonstrated in building microservices
                        using Golang & any other tech stack might
                        significantly increase your chances to get
                        shortlisted for the further rounds of coding
                        interviews
                      </div>
                    </div>
                    {/* <Image src={sdebackend} alt="" fill={true} className="w-full h-full" /> */}
                    {/* <Imagecomponet image={'https://ik.imagekit.io/ysp4xwrz9/website/Group%201468.svg'} /> */}
                  </div>

                  <div className={`${epilogue.className} tml:order-0 text-[#2C2C2C]  flex items-start  flex-grow  pr-2 flex-shrink-0 tml:flex-none tml:w-full btl:pl-[35px] bmLLL:pl-[90px] basis-0 flex-col justify-start    gap-2`}>
                    <h2 className="text-[#3111f40] text-[1.2rem] lg:text-[1.625rem]  font-medium leading-[2] tracking-[-.5px]">AI feedback</h2>
                    <p className={`${almarai.className} font-normal   pt-0 text-[1rem] lg:text-[1.125rem] leading-[1.9] tracking-[.005em]`}>When a company announces an on-campus placement drive,
                      it’s not just another opportunity—it’s your chance to shine. But
                      how can you make sure you’re standing out from the crowd?
                    </p>
                    <p className={`${almarai.className} font-normal mt-1 md:mt-5  text-[1rem] lg:text-[1.125rem] leading-[1.9] tracking-[.005em]`}>
                      Cue gives you immediate feedback on what you can do to
                      increase your chances of getting shortlisted, providing you with
                      the precise actions needed to catch recruiters’ attention</p>
                  </div>

                </Revealcompo>


                <Revealcompo css={"flex flex-row  tml:flex-col tml:pl-0 pl-4 tml:gap-5  gap-5 md:gap-24 p-0  w-full h-min relative flex-none justify-center  items-center"}>
                  <div className={`${epilogue.className} tml:flex-none tml:w-full bmLLL:pl-16 text-[#2C2C2C] pr-4 flex items-start flex-grow flex-shrink-0 basis-0 flex-col justify-start   gap-2 `}>
                    <h2 className="text-[#F9576E] text-[1.2rem] lg:text-[1.625rem]  font-medium leading-[2] tracking-[-.5px]">Tailored to Each Company</h2>
                    <p className={`${almarai.className} font-normal   text-[1rem] lg:text-[1.125rem] leading-[1.9] tracking-[.005em]`}>Every company looks for something different in their ideal candidates.
                      Our platform analyzes the specific requirements and preferences of
                      each company visiting your campus, then compares them with your
                      profile.</p>
                    <p className={`${almarai.className} font-normal mt-4  text-[1rem] lg:text-[1.125rem] leading-[2] tracking-[.005em]`}>You’ll receive personalized recommendations on how to align your
                      skills, experiences, and resume with what the company is looking for
                      —ensuring that you’re presenting yourself in the best possible light.</p>
                  </div>
                  <div className="   tml:self-start rounded-[20px] tml:p-6 tml:h-auto h-[582px] tml:max-w-full max-w-[630px] border-t-[6px] border-r-[10px] px-4 border-b-[6px] border-l-[6px] border-[#311f40]   flex justify-center items-center tml:flex-none tml:w-full flex-grow tml:order-1 flex-shrink-0 basis-0  bg-[#F9677C]  relative">
                    <div className='max-w-[501px] tml:h-auto  h-[476px] bg-white tml:py-4 flex items-start flex-col justify-center   rounded-[20px] text-[#F9576E] p-6 '>
                      <div className='bg-[#FDF3EA]/[0.5] pl-14 tml:pl-6 tml:pr-3 pr-28 py-14 rounded-[20px]'>
                        <p className='text-[1.375rem] '>Hi Cue,</p>
                        <p className='text-[1.4rem] mt-10 tracking-[-.1px] leading-[2] '>Can you anazlyze the
                          requirements for CultFit
                          Campus Drive & give
                          personalized recommendations</p>
                      </div>
                    </div>
                    {/* <Image src={sdebackend} alt="" fill={true} className="w-full h-full" /> */}
                    {/* <Imagecomponet image={'https://ik.imagekit.io/ysp4xwrz9/website/Group%201469.svg'} /> */}
                  </div>
                </Revealcompo>

              </div>

            </div>
          </div>
        </div>

        {/* new feature  */}

        {/* <div className="flex items-center flex-none h-min justify-center overflow-hidden btl:pt-0 btl:px-6 btl:pb-6 bmLLL:pt-0 tml:pt-6 tml:px-2 tml:pb-2 bmLLL:px-16 bmLLL:pb-16 py-16 px-0 relative w-full">

          <Revealcompo css={" bmL4k:max-w-[1312px]  max-w-[1640px] flex items-center rounded-3xl flex-grow flex-shrink-0 basis-0 flex-col justify-start overflow-hidden p-0 relative"}>
            <div className="bg-[#977DE0]   rounded-[5px] tml:gap-6 tml:pt-16 tml:px-4 tml:pb-4 btl:pt-16 btl:px-6 btl:pb-11 pt-16 px-11 pb-20 md:rounded-[24px] overflow-hidden w-full flex flex-col  gap-3 md:gap-16 justify-center items-center h-min ">

              <div className="flex flex-col flex-none items-center justify-start gap-2 h-min w-full p-0 relative">
                <div className="flex items-center justify-center bg-[#cfff92] rounded-[100px] h-min py-2 px-4 relative w-min">
                  <div className="flex justify-start flex-col flex-shrink-0 flex-none relative whitespace-pre w-auto h-auto">
                    <p className={`${epilogue.className} text-[1rem] font-normal tracking-[-.5px] leading[1.3] text-[#015840]`}>New feature</p>
                  </div>
                </div>
                <div className={`flex flex-col bmLLL:w-[60%]  flex-none items-center justify-start gap-3 h-min relative w-full p-0 `}>
                  <div className="flex  flex-none w-full whitespace-pre-wrap h-auto relative ">
                    <h2 className={`tml:text-[2.375rem] btl:text-[2.5rem] bmLLL:text-[2.75rem] bmL4k:text-[2.75rem] text-[3.5rem] w-full ${epilogue.className} bmLLL:font-normal tracking-[-.5px] leading-[1.2] text-center text-white  `}>
                      Personalized support with the help of AI
                    </h2>
                  </div>
                  <div className="`bmLLL:text-[2.75rem] bmLLL:font-normal tracking-[-.02em] leading-[1.2] text-white ">
                    <p className={`text-white ${epilogue.className} text-[1.3rem] font-normal tracking-[-.5px] leading-[1.5] text-center`}>Get the helpfulness of a human coach without the $500 price tag.</p>
                  </div>
                </div>
              </div>

              <div className="flex tml:flex-col btl:flex-col  flex-none gap-6 h-min justify-start p-0 relative w-full">

                <div className="flex tml:flex-none tml:w-full flex-col btl:flex-none btl:w-full flex-grow flex-shrink-0 basis-0 h-min items-start justify-start overflow-hidden relative p-0 gap-5 lg:gap-6">

                  <Revealcompo css={"bg-[#CFFF92] border-black border-4 rounded-[20px] flex flex-col justify-center items-start p-8 gap-6  h-min"}>
                    <h2 className={`${epilogue.className} text-[#2C2C2C]/[.8] font-semibold text-[1.125rem] lg:text-2xl leading-[1.9] tracking-[-.5px]`}>AI-Driven Conversation Prompts</h2>
                    <p className={`${almarai.className} text-black font-normal  text-[1rem] lg:text-[1.125rem] leading-[1.8] tracking-[.01em]`}>Have questions you wanna ask recruiters? Use Cue to
                      generate question prompts to seem professional in
                      your conversations with recruiters</p>
                  </Revealcompo>
                  <Revealcompo css={"bg-[#CFFF92] border-black border-4 rounded-[20px] flex flex-col justify-start items-start p-8 gap-6  h-min"}>
                    <h2 className={`${epilogue.className} text-[#2C2C2C]/[.8] font-semibold
                     text-[1.125rem] lg:text-2xl leading-[1.9] tracking-[-.5px]`}>Placement Season Stress Manager</h2>
                    <p className={`${almarai.className} text-black font-normal  text-[1rem] lg:text-[1.125rem] leading-[1.8] tracking-[.01em]`}>Cue provides personalized stress management
                      techniques based on the student's emotional state
                      throughout the placement process.</p>
                  </Revealcompo>
                </div>

                <div className="flex tml:flex-none tml:w-full flex-col btl:flex-none btl:w-full flex-grow flex-shrink-0 basis-0 h-min items-center xl:-mb-10  justify-end  overflow-hidden relative p-0 gap-5 lg:gap-6">

                  <Revealcompo css={"bg-[#CFFF92] border-black border-4 rounded-[20px] flex flex-col justify-start items-start  p-8 gap-6  h-min"}>


                    <h2 className={`${epilogue.className} text-[#2C2C2C]/[.8] font-semibold text-[1.125rem] lg:text-2xl leading-[1.9] tracking-[-.5px]`}>Post-Drive Reflection Tool</h2>
                    <p className={`${almarai.className} text-black text-[#2C2C2C]/[.8] font-normal  text-[1rem] lg:text-[1.125rem] leading-[1.8] tracking-[.01em]`}>After each on-campus drive, quickly log your impressions
                      and receive AI-generated suggestions for follow-up
                      actions</p>
                  </Revealcompo>

                  <Revealcompo css={"bg-[#CFFF92] border-black border-4 rounded-[20px] flex flex-col justify-start items-start  p-8 gap-6  h-min"}>


                    <h2 className={`${epilogue.className}  text-[#2C2C2C]/[.8] font-semibold text-[1.125rem] lg:text-2xl leading-[1.9] tracking-[-.5px]`}>Interview Wardrobe Advisor</h2>
                    <p className={`${almarai.className} text-black font-normal  text-[1rem] lg:text-[1.125rem] leading-[1.8] tracking-[.01em]`}>Cue suggests appropriate interview attire based on the
                      company culture, role, and current fashion trends</p>
                  </Revealcompo>
                </div>

              </div>

            </div>
          </Revealcompo>

        </div> */}


        {/* take control of your placement journey with Cuegrad */}

        <div className=" flex items-center flex-none h-min justify-center overflow-hidden btl:pt-0 btl:px-6 btl:pb-16 bmLLL:pt-0 tml:pt-16 tml:px-2 tml:pb-4 bmLLL:px-16 bmLLL:pb-16 py-16 px-0 relative w-full">


          <Revealcompo css={"bmLLL:max-w-[1180px] bmL4k:max-w-[1312px]  max-w-[1640px] flex items-center rounded-[30px] flex-grow flex-shrink-0 basis-0 flex-col justify-start overflow-hidden p-0 relative "}>
            <div className="bg-[#FFAE67] text-[#015840]  rounded-[30px]  items-center flex flex-col h-min justify-center  btl:pt-[60px] xl:pt-[40px] tml:p-6 tml:pb-0 btl:px-[150px] px-[209px] relative gap-8 w-full flex-none ">
              <h2 className={`${epilogue.className}   text-center mx-auto font-normal text-[1.5rem] md:text-[2rem] leading-[1.9] tracking-[-.5px] `}>Take control of your placement journey with</h2>

              <h1 className={`max-w-[594px] ${epilogue.className} font-extrabold tml:mb-[-25px] btl:mb-[-45px] mb-[-55px] tml:text-[9rem] text-[13rem] tml:text-start text-center xl:text-[18.75rem] tracking-[-.5px] mx-auto leading-[1]`}>CUE</h1>
            </div>
          </Revealcompo>

        </div>

        <Meetndlearn />
        <Faq />
      </div >
    </>
  );
}