import React from 'react';

export const CommonHeading = ({ heading, className }) => {
  return (

    <h2
      className={`${className} capitalize font-semibold font-montserrat text-center lg:text-start text-4xl md:text-5xl xl:text-6xxl !leading-md text-darkblue`}
    >
      {heading}
    </h2 >
  );
};
export const CommonsubHeading = ({ subheading, className }) => {
  return (

    <p
      className={`${className} uppercase font-poppins text-darkblue !text-center font-bold sm:text-xl text-sm !leading-normal sm:mb-3`}
    >
      {subheading}
    </p>
  );
};



