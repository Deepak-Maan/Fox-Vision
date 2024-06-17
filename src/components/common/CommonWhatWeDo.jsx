import React from 'react'
import CommonBtn from './CommonBtn'
import { Arrow, Logo } from './Icon';

const CommonWhatWeDo = ({CommonWhatWeDosubheading ,CommonWhatWeDoimg , CommonWhatWeDoheading , CommonWhatWeDotext1 ,CommonWhatWeDotext2 , CommonWhatWeDotext3}) => {
  return (
<>
<p className='font-poppins font-bold sm:text-xl text-sm leading-lg text-darkblue text-center lg:text-start'>{CommonWhatWeDosubheading}</p>
            <div className='flex-row flex flex-wrap -mx-3 md:mt-3 relative'>
                <span className='absolute left-0 lg:left-[38%] top-[-18%] lg:top-[1%]'><Arrow/></span>
                <div className='w-full lg:w-1/2 px-3'>
                    <h2 className='font-semibold font-montserrat text-4xl md:text-6xxl leading-md text-darkblue text-center lg:text-start'>{CommonWhatWeDoheading}</h2>
                    <img src={CommonWhatWeDoimg} alt="displayAvatar" className='max-w-[590.5px] mx-auto w-full xl:w-auto max-h-[378.96px] mt-4 sm:mt-6 lg:mt-12 lg:-mx-3' />
                </div>
                <div className='w-full lg:w-1/2 px-3 flex flex-col lg:items-end mt-5 lg:mt-0'>
                    <div className='lg:max-w-[512px]'>
                    <span className='flex justify-center lg:justify-end'>
                        <Logo />
                    </span>
                    <p className='font-normal font-poppins text-base sm:text-lg md:text-xl !leading-lg opacity-70 text-darkblue mt-3 lg:mt-5 text-center lg:text-start'>{CommonWhatWeDotext1} <span className=' text-purple'>{CommonWhatWeDotext2}</span> {CommonWhatWeDotext3}</p>
                    <div className='pt-5 lg:pt-10 text-center lg:text-start'><CommonBtn btnName='Contact' /></div>
                </div>
                </div>
            </div>
</>
  )
}

export default CommonWhatWeDo