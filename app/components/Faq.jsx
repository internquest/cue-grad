import React from 'react'
import FaqIndividual from './FaqIndividual'
import { boldaeonikFont, mediumaeonikFont } from '@/utils/font'

const Faq = () => {

    const faqs = [
        {
            question: 'Who is Prentus best for?',
            solution: `Prentus is built to make job searching simple and fun for everyone. But it's especially useful if you haven't ran a formal job search before and you're looking for a white collar job where things like your LinkedIn matter. If you're a bootcamp grad, recent college grad, or someone learning new skills on your own, Prentus can guide you to your dream job.`,
            default: true
        },
        {
            question: 'Is Prentus a job board?',
            solution: 'NO! The Job Board today consists of AI-filtered, junior tech roles that we scrape from the web - think LinkedIn, Indeed, etc. We filter out those fake junior roles and only add entry-level jobs that require 0-3 years of experience. Jobs are there for convenience but are just a bonus to add to our toolkit and community.',
            default: false
        },
        {
            question: 'Does Prentus offer group licenses for bootcamps, universities, or other workforce orgs?',
            solution: 'Yes! Not only that, our all-in-one career success platform will simplify your life by bringing together every component you need to get people hired. If you want to see how you can save coaches 25 hours per week while delighting your students, schedule a demo.',
            default: false
        },
        {
            question: 'Can I try Prentus out?',
            solution: `Yes, you can start a 7-day trial of our Plus or Pro plan to see what it's like job searching with a community that has your back.`,
            default: false
        }
    ]

    return (
        <div className='tml:py-12 tml:px-4 py-[64px] px-0 flex items-center justify-center overflow-hidden flex-none h-min w-full relative '>
            <div className='flex flex-col items-center flex-grow-[1] flex-shrink-0 basis-0 tml:gap-6 gap-16 h-min justify-start bmL4k:max-w-[1312px] max-w-[1640px] p-0 relative'>
                <div className='flex flex-col justify-start flex-shrink-0  flex-none w-full relative h-auto whitespace-pre-wrap '>
                    <h2 className={`${mediumaeonikFont.className} font-normal text-[#311f40] text-[2.8rem] tracking-tight leading-[1.2]  text-center  m-0 p-0`}>Your questions <span className='text-[#987de1]'>answered</span></h2>
                </div>
                <div className='flex flex-col gap-2 flex-none items-center justify-center h-min overflow-hidden p-0 w-full relative'>
                    <div className='contents'>
                        {
                            faqs.map((faq, index) => <FaqIndividual defaultstate={faq.default} question={faq.question} solution={faq.solution} indexed={index} />)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
