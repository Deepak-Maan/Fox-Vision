import React, { useState, useEffect } from 'react';
import CommonBtn from '../common/CommonBtn';
import { portfolioData } from '../common/Helper';

const PortfolioCardSection = () => {
    const [btnName, setBtnName] = useState('See more');
    const [showAll, setShowAll] = useState(false);
    const [initialCardsToShow, setInitialCardsToShow] = useState(11);
    const [additionalCardsToShow, setAdditionalCardsToShow] = useState(15);

    useEffect(() => {
        const updateCardCount = () => {
            if (window.innerWidth <= 640) { // Small screen threshold
                setInitialCardsToShow(5);
                setAdditionalCardsToShow(portfolioData.length); // Show all remaining cards when "See more" is clicked
            } else {
                setInitialCardsToShow(11);
                setAdditionalCardsToShow(portfolioData.length); // Show all remaining cards when "See more" is clicked
            }
        };

        // Set initial values based on the current screen size
        updateCardCount();

        // Update values on resize
        window.addEventListener('resize', updateCardCount);
        
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateCardCount);
        };
    }, []);

    const handleButtonClick = () => {
        setBtnName((prevName) => (prevName === 'See more' ? 'See less' : 'See more'));
        setShowAll((prevShowAll) => !prevShowAll);
    };

    return (
        <div className='max-w-[1164px] mx-auto px-3 mt-[123px]'>
            <div className='flex flex-wrap flex-row -mx-3'>
                {portfolioData.slice(0, showAll ? portfolioData.length : initialCardsToShow).map(item => (
                    <div key={item.id} className='lg:w-1/3 w-full sm:w-1/2 px-3 mb-4 md:mb-6'>
                        <div className='border-[1px] border-solid border-[#0000001A] rounded-md p-[10px] sm:p-[15px_17px] h-full max-w-[364px] mx-auto lg:mx-0'>
                            <img src={item.image} alt={item.name} className='max-w-[330px] max-h-[200px] sm:max-h-[311px] w-full h-full rounded-md' />
                            <p className='mt-2 sm:mt-3 font-poppins font-bold text-base sm:text-lg md:text-xl leading-[150%] text-darkblue'>{item.name}</p>
                            <p className='mt-1 sm:mt-[10px] font-poppins font-normal text-[14px] sm:text-base text-darkblue opacity-70 leading-[150%]'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-[26px] text-center'>
                <CommonBtn btnName={btnName} onClick={handleButtonClick} />
            </div>
        </div>
    );
};

export default PortfolioCardSection;
