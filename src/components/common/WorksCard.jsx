const WorksCard = (props) => {
    return (
        <div
            className={`${props.className} sm:pt-[26.83px] lg:max-w-[366px] xl:h-[383px] w-full h-full sm:px-[26.81px] sm:pb-[43.91px] rounded-[6px] p-6 border border-solid border-transparent hover:border-darkpurple hover:scale-105 transition-all ease-linear duration-300 `}
        >
            <div
                className={`sm:mb-[27px] mb-5 sm:w-[85.27px] sm:h-[85.27px] w-[75px] h-[75px] rounded-[6.94px] shadow-[0px_10px_20px_0px_#4B17E62B] flex justify-center items-center ${props.svgBox ? "shadow-[0px_11.57px_23.15px_0px_#05D5FB29]" : ""
                    }`}
            >
                {props.worksvg}
            </div>
            <h3 className="text-darkblue font-semibold font-poppins sm:text-2xl text-xl !leading-normal mb-2 pr-1">
                {props.title}
            </h3>
            <p className="text-darkblue opacity-70 sm:text-base text-sm font-poppins font-normal !leading-normal">
                {props.description}
            </p>
        </div>
    );
};

export default WorksCard;