import React from 'react'
import { portfolioData } from '../common/Helper'
const Portfoliocards = () => {
    return (
        <>
            {portfolioData.map(item => (
                <div key={item.id} className='lg:w-1/3 w-full sm:w-1/2 px-3 mb-6'>
                    <div className='border-[1px] border-solid border-[#0000001A] rounded-md p-[15px_17px] max-w-[364px] mx-auto lg:mx-0'>
                        <img src={item.image} alt={item.name} className='max-w-[330px] max-h-[311px] w-full h-full' />
                        <p className='mt-3 font-poppins font-bold text-base sm:text-lg md:text-xl leading-[150%] text-darkblue'>{item.name}</p>
                        <p className='mt-[10px] font-poppins font-normal text-base text-darkblue opacity-70 leading-[150%]'>{item.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Portfoliocards