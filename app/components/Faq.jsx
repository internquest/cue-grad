import React from 'react'
import FaqIndividual from './FaqIndividual'
import { boldaeonikFont, epilogue, mediumaeonikFont } from '@/utils/font'
import Revealcompo from './Revealcompo'

const Faq = () => {

    const faqs = [
        {
            question: 'What is Cue?',
            solution: `Cue is an AI powered intelligent placement guide designed to assist students during on-campus placement drives`,
            default: true
        },
        {
            question: 'How do I access Cue?',
            solution: 'If your college or university is affiliated with Cue, you can simply get started by signing up with your student ID',
            default: false
        },
        {
            question: 'Is Cue simply another career assistant built on top of existing AI models like ChatGPT or Claude?',
            solution: `
Cue is not built on top of existing AI models like ChatGPT or Claude. Our team has been developing a proprietary AI model trained exclusively on data related to on-campus placement drives at our partnered colleges. This allows Cue to deeply understand the unique context and requirements of the on-campus hiring ecosystem at different colleges, enabling us to provide significantly more relevant and actionable assistance to students of respective colleges`,
            default: false
        },
        {
            question: `What if Cue can't help me with my question?`,
            solution: `While Cue is trained to answer a wide range of questions, we understand that some queries might fall outside its current knowledge base. In such cases, Cue will politely inform you and promptly directs the query to training & placement team, ensuring your question is answered`,
            default: false
        }
    ]

    return (
        <div className='tml:py-12 tml:px-2 py-[64px] px-0 flex items-center justify-center overflow-hidden flex-none h-min w-full relative '>

            <Revealcompo css={'flex flex-col items-center flex-grow-[1] flex-shrink-0 basis-0 tml:gap-6 gap-16 h-min justify-start bmL4k:max-w-[1312px] max-w-[1640px] p-0 relative'}>
                <div className='flex flex-col justify-start flex-shrink-0  flex-none w-full relative h-auto whitespace-pre-wrap '>
                    <h2 className={`${epilogue.className} font-semibold text-[#311f40] tml:text-[1.875rem] text-[2.8rem] tracking-[-.5px] leading-[1.2]  text-center  m-0 p-0`}>Your questions <span className='text-[#987de1]'>answered</span></h2>
                </div>
                <div className='flex flex-col gap-2 flex-none items-center justify-center h-min overflow-hidden p-0 w-full relative'>
                    <div className='contents'>
                        {
                            faqs.map((faq, index) => <FaqIndividual defaultstate={faq.default} question={faq.question} solution={faq.solution} indexed={index} />)
                        }

                    </div>
                </div>
            </Revealcompo>

        </div>
    )
}

export default Faq
