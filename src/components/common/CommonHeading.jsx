import React from 'react';

export const CommonHeading = ({ heading, className }) => {
  return (

    <h2
      className={`${className} capitalize font-semibold font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xxl leading-md text-darkblue`}
    >
      {heading}
    </h2 >
  );
};
export default CommonHeading;

