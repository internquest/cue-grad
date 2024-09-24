import React from 'react'
import MobileIndividual from './MobileIndividual'

const MobileOptions = ({ facilities }) => {



    return (
        <div className='flex flex-col flex-none h-min duration-1000 items-center justify-center w-full'>
            {
                facilities.map((facility, index) => <MobileIndividual key={index} indexed={index} title={facility.title} desc={facility.desc} />)
            }
        </div>
    )
}

export default MobileOptions
