const CommonButton = ({ btnName, className }) => {
    return (
        <div>
            <button
                className={`${className} sm:py-[14px] py-3 sm:px-[30px] px-7 bg-sky rounded-[69px] text-white font-semibold sm:text-base text-sm leading-normal`}
      >
            {btnName}
        </button>
    </div >
  );
};

export default CommonButton;