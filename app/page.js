import { boldaeonikFont, mediumaeonikFont, regularaeonikFont } from "@/utils/font";
import Image from "next/image";
import c from '@/public/c_logo.png'
import sdebackend from '@/public/sde-1backend.png'
import aifeedback from '@/public/aifeedback.png'
import tailoredToeach from '@/public/tailered.png'
import Imagecomponet from "./components/Imagecomponet";
import Meetndlearn from '@/app/components/Meetndlearn'
import Faq from "./components/Faq";
export default function Home() {
  return (
    <div className="  flex flex-col bg-white min-h-screen w-auto h-min justify-start p-0 relative ">
      <div className="   overflow-hidden flex relative w-full btl:pt-[80px] btl:px-6 btl:pb-6 bmLLL:pt-[116px] bmLLL:px-16 bmLLL:pb-16 tml:pt-[116px] tml:px-4 tml:pb-4 pt-[116px] px-16 pb-16 flex-none h-min justify-center flex-col items-center">
        <div className="bg-[#CFFF92]  bmL4k:max-w-[1312px]  max-w-[1640px] flex tml:items-start items-center tml:justify-start rounded-[30px]  flex-grow flex-shrink-0 basis-0 flex-col h-auto tml:pb-4 px-2 w-full ">
          <h2 className={`w-full   mt-20 lg:mt-36 ${mediumaeonikFont.className} font-medium tml:text-[3rem] tml:text-start text-[2rem] md:text-[3rem] tml:leading-[1.3] leading-[1.7] tml:tracking-tight tracking-[.005em] text-center`}>
            <span className="inline-block ">
              Your Smart Companion for
            </span>
            <br /><span className="inline-block ml-1">

              On-Campus Placement Success
            </span>
          </h2>
          {/* <h2 className={`w-full px-2  md:hidden  mt-16 ${mediumaeonikFont.className} font-medium text-[2.2rem]  leading-[1.7] tracking-[.005em] text-center`}>
            <span className="inline-block -ml-3">
              Your Smart Companion for  On-Campus Placement Success
            </span>

          </h2> */}

          <p className={`px-2 ${regularaeonikFont.className} font-normal max-w-[659px]  xl:w-[70%] text-[1.1rem] md:text-[1.375rem] leading-[2] tracking-normal tml:text-start text-center text-[#2C2C2C] mt-6`}>
            Transform your on-campus placement experience with cutting-
            edge AI solutions designed to guide, support, and empower you
            every step of the way.
          </p>

          <div className="w-full md:max-w-[519px] h-[672px] bg-white border-[10px] mt-12 flex flex-col  pr-5 rounded-t-[40px] border-[#CFFF92]/[.5]">

            <Image src={c} alt="" width={40} height={42} className="mt-14 ml-5" />
            <div className={`bg-[#CFFF92]/[.2] w-[80%] md:max-w-[412px] h-[288px] ml-5 mt-3 rounded-[10px] flex flex-col gap-5 py-5 px-5 text-[#000000]/[.8] ${regularaeonikFont.className}`} >
              <p className=" text-[1rem] md:text-[1.25rem] leading-[2] font-normal tracking-wide">
                Hello
              </p>
              <p className=" max-w-[344px] tracking-normal text-[.9rem] md:text-[1.125rem] font-normal leading-[2]">I’m your helpful AI assistant to navigate
                on-campus placements like a pro. Let
                me know what you need help with to get
                started!</p>
            </div>
            <div className={`bg-[#E2FFBD] w-[80%] px-1 md:max-w-[341px]  mt-12 mr-2 pl-5 py-5     rounded-[10px] font-normal text-[.9rem]  md:text-[1.125rem] leading-[1.8] tracking-normal  self-end  ${regularaeonikFont.className}  `}>
              I was just wondering on what to
              prepare for upcoming Stripe OA.
            </div>
            <div className="mt-8 ml-5 flex gap-5 items-center">

              <Image src={c} alt="" width={40} height={42} className="" />
              <div className="bg-[#CFFF92]/[.2] rounded-[10px] w-[56px] h-[24px] "></div>
            </div>

          </div>
        </div>
      </div>

      {/* meet cuegrad */}

      <div className="   overflow-hidden flex relative w-full tml:px-4 tml:pb-4  btl:px-6 btl:pb-6 bmLLL:px-16 bmLLL:pb-16 pb-10  px-16 flex-none h-min justify-center flex-col items-center">
        <div className="bg-[#FDF3EA] bmLLL:max-w-[1180px] bmL4k:max-w-[1312px] max-w-[1640px] flex items-center tml:p-3 p-16 rounded-[30px]  text-[#F9576E] flex-grow flex-shrink-0 basis-0 flex-col w-full">

          <h1 className={`${mediumaeonikFont.className} font-medium tml:text-[1.3rem] text-[2rem] md:text-[3.25rem] leading-[2] tracking-normal`}>Meet CueGrad</h1>
          <p className={`${regularaeonikFont.className} font-normal max-w-[600px] lg:max-w-[717px] text-center tml:text-[1.1rem] text-[1.5rem] md:text-[1.75rem] leading-[2] tracking-wide`}>your personalized assistant designed to help you excel
            in on-campus placement drives</p>
        </div>
      </div>

      {/* students have to say about Cuegrad */}

      <div className="bmLLL:pt-0 bmLLL:px-16 bmLLL:pb-16 flex items-center flex-none w-full h-min justify-center overflow-hidden relative btl:pt-0 btl:px-6 btl:pb-6 btl:py-0 tml:p-4 py-16 px-0">
        <div className="items-center rounded-[30px]  flex-grow flex-shrink-0 basis-0 flex-col h-min max-w-[1640px] overflow-hidden relative bmL4k:max-w-[1312px] ">
          <div className="bg-[#977DE0] rounded-[30px] tml:pt-12 tml:px-4 tml:pb-6 tml:gap-11 pt-16 px-11 pb-11 w-full flex  flex-col gap-16 h-min  items-center justify-start overflow-hidden ">
            <h2 className={`${mediumaeonikFont.className} font-medium tml:text-start text-center text-[1.5rem] lg:text-[2rem] mt-3 leading-[1.8] text-white tracking-normal`}>Here’s what students have to say about Cuegrad</h2>
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-2 lg:gap-4 px-2 ">
              <div className="bg-black lg:w-[33%]    rounded-[10px] px-4 lg:px-7 lg:pr-9 py-10">
                <p className={`${regularaeonikFont.className} font-medium  text-white/[.9] text-[1rem] lg:text-[1.13rem] leading-[2] tracking-[.005em]`}>This AI assistant sounds like a
                  fantastic idea! Having personalized
                  advice and support throughout the
                  on-campus placement process
                  could be incredibly helpful.</p>
              </div>
              <div className="bg-black  lg:w-[33%]   rounded-[10px] px-4 lg:px-7 lg:pr-9 py-10">
                <p className={`${regularaeonikFont.className} font-medium  text-white/[.9] text-[1rem] lg:text-[1.13rem] leading-[2] tracking-[.005em]`}>I’m really impressed by this AI career
                  assistant idea. The thought of having
                  interactive AI tools for on-campus
                  placement prep is fantastic. It seems
                  like a great way to stay prepared &
                  competitive during the placement
                  season</p>
              </div>
              <div className="bg-black  lg:w-[33%]  md:h-min rounded-[10px] px-4 lg:px-7 lg:pr-5 py-10">
                <p className={`${regularaeonikFont.className} font-medium   text-white/[.9] text-[1rem] lg:text-[1.13rem] leading-[2] tracking-[.02em]`}>This AI-powered on-campus placement
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
        </div>
      </div>

      {/* oncampus placemnt assistant */}

      <div className="bg-white flex flex-none w-full relative overflow-hidden justify-center items-center h-min bmLLL:p-[64px] tml:pt-16 tml:px-4 tml:pb-4 btl:py-[48px] btl:px-6 py-16 px-0 ">
        <div className="flex flex-grow flex-shrink-0 basis-0 flex-col h-min justify-start max-w-[1640px] bmL4k:max-w-[1312px] overflow-hidden p-0 relative ">

          <div className="flex flex-col flex-none w-full relative items-center justify-start tml:gap-10 gap-[64px] h-min p-0">
            <div className="flex flex-col items-center flex-none p-0 w-full gap-3 h-min justify-start ">
              <h1 className={`font-medium tml:text-start text-[1.7rem] md:text-[2.25rem] mx-auto text-center text-black leading-[1.7] tracking-normal max-w-[619px] ${mediumaeonikFont.className}`}>On-Campus Placements Assistant to
                help you get placed</h1>
              <p className={`${regularaeonikFont.className} font-normal  text-center text-[1rem] md:text-[1.25rem] leading-[2] tracking-normal tml:text-start max-w-[532px] text-[#2C2C2C]/[.9]`}>CueGrad is your AI-powered co-pilot, guiding you through
                every step of the on-campus placement process.  </p>
            </div>

            <div className="flex flex-col items-center flex-none tml:gap-10 gap-[64px] h-min justify-start p-0 relative w-full mx-auto ">

              <div className="flex flex-row tml:flex-col tml:gap-5 gap-5 md:gap-24 p-0 w-full h-min relative flex-none justify-center  items-center">

                <div className={`${mediumaeonikFont.className} flex tml:flex-none tml:w-full items-start flex-col flex-grow flex-shrink-0 basis-0 gap-5 h-min justify-start p-0 relative `}>
                  <h2 className="text-[#977DE0] text-[1.2rem] lg:text-[1.625rem]  font-medium leading-[1.1] tracking-normal">Personalized Skill Gap Analyzer</h2>
                  <p className={`${regularaeonikFont.className} font-normal   text-[1rem] lg:text-[1.25rem] leading-[1.5] tracking-[.02em]`}>Evaluate your skills against the job requirements of
                    companies participating in the placement drive. Identify
                    specific skill gaps to focus on the most critical areas for
                    improvement</p>
                </div>

                <div className="h-auto tml:flex-none tml:w-full flex-grow flex-shrink-0 basis-0 tml:aspect-[1.2807692307692307/1] aspect-[1.2846563453485/1] relative">
                  {/* <Image src={sdebackend} alt="" fill={true} className="w-full h-full" /> */}
                  <Imagecomponet image={sdebackend} />
                  {/* <Image src={sdebackend} alt="" fill={true} sizes="max((min(max(100vw - 128px, 1px), 1640px) - 96px) / 2, 1px)" /> */}
                </div>

              </div>

              <div className="flex flex-row  tml:flex-col tml:gap-5 gap-5 md:gap-24 p-0  w-full h-min relative flex-none justify-center  items-center">

                <div className=" h-auto tml:flex-none tml:w-full flex-grow tml:order-1 flex-shrink-0 basis-0 tml:aspect-[1.2807692307692307/1] aspect-[1.2846563453485/1] relative">
                  {/* <Image src={sdebackend} alt="" fill={true} className="w-full h-full" /> */}
                  <Imagecomponet image={aifeedback} />
                </div>
                <div className={`${mediumaeonikFont.className} tml:order-0 text-[#2C2C2C]  flex items-start flex-grow flex-shrink-0 tml:flex-none tml:w-full basis-0 flex-col justify-start   gap-2`}>
                  <h2 className="text-[#3111f40] text-[1.2rem] lg:text-[1.625rem]  font-medium leading-[2] tracking-normal">AI feedback</h2>
                  <p className={`${regularaeonikFont.className} font-normal   pt-0 text-[1rem] lg:text-[1.125rem] leading-[1.9] tracking-normal`}>When a company announces an on-campus placement drive,
                    it’s not just another opportunity—it’s your chance to shine. But
                    how can you make sure you’re standing out from the crowd?
                  </p>
                  <p className={`${regularaeonikFont.className} font-normal mt-1 md:mt-5  text-[1rem] lg:text-[1.125rem] leading-[1.9] tracking-normal`}>
                    Cue gives you immediate feedback on what you can do to
                    increase your chances of getting shortlisted, providing you with
                    the precise actions needed to catch recruiters’ attention</p>
                </div>

              </div>

              <div className="flex flex-row  tml:flex-col tml:gap-5 gap-5 md:gap-24 p-0  w-full h-min relative flex-none justify-center  items-center">
                <div className={`${mediumaeonikFont.className} tml:flex-none tml:w-full text-[#2C2C2C]  flex items-start flex-grow flex-shrink-0 basis-0 flex-col justify-start   gap-2 `}>
                  <h2 className="text-[#F9576E] text-[1.2rem] lg:text-[1.625rem]  font-medium leading-[2] tracking-normal">Tailored to Each Company</h2>
                  <p className={`${regularaeonikFont.className} font-normal   text-[1rem] lg:text-[1.125rem] leading-[1.9] tracking-[.005em]`}>Every company looks for something different in their ideal candidates.
                    Our platform analyzes the specific requirements and preferences of
                    each company visiting your campus, then compares them with your
                    profile.</p>
                  <p className={`${regularaeonikFont.className} font-normal mt-4  text-[1rem] lg:text-[1.125rem] leading-[2] tracking-[.005em]`}>You’ll receive personalized recommendations on how to align your
                    skills, experiences, and resume with what the company is looking for
                    —ensuring that you’re presenting yourself in the best possible light.</p>
                </div>
                <div className="h-auto tml:flex-none tml:w-full flex-grow flex-shrink-0 basis-0 tml:aspect-[1.2807692307692307/1] aspect-[1.2846563453485/1] relative">
                  {/* <Image src={sdebackend} alt="" fill={true} className="w-full h-full" /> */}
                  <Imagecomponet image={tailoredToeach} />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* new feature  */}

      <div className="flex items-center flex-none h-min justify-center overflow-hidden btl:pt-0 btl:px-6 btl:pb-6 bmLLL:pt-0 tml:pt-6 tml:px-4 tml:pb-4 bmLLL:px-16 bmLLL:pb-16 py-16 px-0 relative w-full">
        <div className=" bmL4k:max-w-[1312px]  max-w-[1640px] flex items-center rounded-3xl flex-grow flex-shrink-0 basis-0 flex-col justify-start overflow-hidden p-0 relative">
          <div className="bg-[#977DE0]   rounded-[5px] tml:gap-6 tml:pt-16 tml:px-4 tml:pb-4 btl:pt-16 btl:px-6 btl:pb-11 pt-16 px-11 pb-20 md:rounded-[24px] overflow-hidden w-full flex flex-col  gap-3 md:gap-16 justify-center items-center h-min ">

            <div className="flex flex-col flex-none items-center justify-start gap-2 h-min w-full p-0 relative">
              <div className="flex items-center justify-center bg-[#cfff92] rounded-[100px] h-min py-2 px-4 relative w-min">
                <div className="flex justify-start flex-col flex-shrink-0 flex-none relative whitespace-pre w-auto h-auto">
                  <p className={`${mediumaeonikFont.className} text-[1rem] font-normal tracking-normal leading[1.3] text-[#015840]`}>New feature</p>
                </div>
              </div>
              <div className={`flex flex-col bmLLL:w-[60%]  flex-none items-center justify-start gap-3 h-min relative w-full p-0 `}>
                <div className="flex  flex-none w-full whitespace-pre-wrap h-auto relative ">
                  <h2 className={`tml:text-[2.375rem] btl:text-[2.5rem] bmLLL:text-[2.75rem] bmL4k:text-[2.75rem] text-[3.5rem] w-full ${mediumaeonikFont.className} bmLLL:font-normal tracking-[-.02em] leading-[1.2] text-center text-white  `}>
                    Personalized support with the help of AI
                  </h2>
                </div>
                <div className="`bmLLL:text-[2.75rem] bmLLL:font-normal tracking-[-.02em] leading-[1.2] text-white ">
                  <p className={`text-white ${regularaeonikFont.className} text-[1.3rem] font-normal tracking-[-.02em] leading-[1.5] text-center`}>Get the helpfulness of a human coach without the $500 price tag.</p>
                </div>
              </div>
            </div>

            <div className="flex tml:flex-col btl:flex-col  flex-none gap-6 h-min justify-start p-0 relative w-full">

              <div className="flex tml:flex-none tml:w-full flex-col btl:flex-none btl:w-full flex-grow flex-shrink-0 basis-0 h-min items-start justify-start overflow-hidden relative p-0 gap-5 lg:gap-6">
                <div className="bg-[#CFFF92] border-black border-4 rounded-[20px] flex flex-col justify-center items-start p-8 gap-6  h-min">
                  <h2 className={`${mediumaeonikFont.className} text-[#2C2C2C]/[.8] font-bold text-[1.125rem] lg:text-2xl leading-[1.9] tracking-[.005em]`}>AI-Driven Conversation Prompts</h2>
                  <p className={`${regularaeonikFont.className} text-black font-normal  text-[1rem] lg:text-[1.125rem] leading-[1.8] tracking-[.01em]`}>Have questions you wanna ask recruiters? Use Cue to
                    generate question prompts to seem professional in
                    your conversations with recruiters</p>
                </div>
                <div className="bg-[#CFFF92] border-black border-4 rounded-[20px] flex flex-col justify-start items-start p-8 gap-6  h-min">
                  <h2 className={`${mediumaeonikFont.className} text-[#2C2C2C]/[.8] font-bold text-[1.125rem] lg:text-2xl leading-[1.9] tracking-[.005em]`}>Placement Season Stress Manager</h2>
                  <p className={`${regularaeonikFont.className} text-black font-normal  text-[1rem] lg:text-[1.125rem] leading-[1.8] tracking-[.01em]`}>Cue provides personalized stress management
                    techniques based on the student's emotional state
                    throughout the placement process.</p>
                </div>
              </div>

              <div className="flex tml:flex-none tml:w-full flex-col btl:flex-none btl:w-full flex-grow flex-shrink-0 basis-0 h-min items-center xl:-mb-10  justify-end  overflow-hidden relative p-0 gap-5 lg:gap-6">
                <div className="bg-[#CFFF92] border-black border-4 rounded-[20px] flex flex-col justify-start items-start  p-8 gap-6  h-min">
                  <h2 className={`${mediumaeonikFont.className} text-[#2C2C2C]/[.8] font-bold text-[1.125rem] lg:text-2xl leading-[1.9] tracking-[.005em]`}>Post-Drive Reflection Tool</h2>
                  <p className={`${regularaeonikFont.className} text-black text-[#2C2C2C]/[.8] font-normal  text-[1rem] lg:text-[1.125rem] leading-[1.8] tracking-[.01em]`}>After each on-campus drive, quickly log your impressions
                    and receive AI-generated suggestions for follow-up
                    actions</p>
                </div>
                <div className="bg-[#CFFF92] border-black border-4 rounded-[20px] flex flex-col justify-start items-start  p-8 gap-6  h-min">
                  <h2 className={`${mediumaeonikFont.className}  text-[#2C2C2C]/[.8] font-bold text-[1.125rem] lg:text-2xl leading-[1.9] tracking-[.005em]`}>Interview Wardrobe Advisor</h2>
                  <p className={`${regularaeonikFont.className} text-black font-normal  text-[1rem] lg:text-[1.125rem] leading-[1.8] tracking-[.01em]`}>Cue suggests appropriate interview attire based on the
                    company culture, role, and current fashion trends</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* take control of your placement journey with Cuegrad */}

      <div className=" flex items-center flex-none h-min justify-center overflow-hidden btl:pt-0 btl:px-6 btl:pb-6 bmLLL:pt-0 tml:pt-16 tml:px-4 tml:pb-4 bmLLL:px-16 bmLLL:pb-16 py-16 px-0 relative w-full">
        <div className="bmLLL:max-w-[1180px] bmL4k:max-w-[1312px]  max-w-[1640px] flex items-center rounded-[30px] flex-grow flex-shrink-0 basis-0 flex-col justify-start overflow-hidden p-0 relative ">
          <div className="bg-[#FFAE67] text-[#015840]  rounded-[30px]  items-center flex flex-col h-min justify-center  btl:pt-[60px] xl:pt-[100px] tml:p-6 btl:px-[150px] px-[209px] relative w-full flex-none ">
            <h2 className={`${regularaeonikFont.className} tml:text-start  text-center mx-auto font-normal text-[1.5rem] md:text-[2rem] leading-[1.9] tracking-normal `}>Take control of your placement journey with</h2>

            <h1 className={`max-w-[594px] ${boldaeonikFont.className} tml:text-[6rem] text-[13rem] tml:text-start text-center xl:text-[18.75rem] mx-auto leading-[.8]`}>CUE</h1>
          </div>
        </div>
      </div>

      <Meetndlearn />
      <Faq />
    </div>
  );
}
