import React from 'react'
import CommonButton from '../common/CommonBtn'

const ProjectStarten = () => {
    return (
        <div className='bg-darkpurple'>
            <div className='container mx-auto xl:max-w-[1164px] px-3'>
                <div className='bg-sky w-full h-[200px] sm:h-[253px] rounded-[10px] p-[25px] sm:p-[36px] relative z-[1] translate-y-20 md:translate-y-28'>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='sm:max-w-[713px] max-w-[400px] text-2xl sm:text-4xl lg:text-4xxl text-center font-semibold text-white mb-[29px] !leading-3md'>Möchten Sie ein Projekt starten? Wir freuen uns.</h3>
                        <CommonButton className='border bordr-solid border-white !py-[13px] !px-[30px]' btnName='Kontakt' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectStarten;