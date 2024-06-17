import React from "react";

const CommonHeading = ({ heading, className }) => {
    return (
        <h2
            className={`${className} capitalize font-semibold font-montserrat text-6xxl leading-md text-darkblue`}
    >
    { heading }
    </h2 >
  );
};

export default CommonHeading;