import React from 'react';
import PropTypes from 'prop-types';

const Profileicon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 14 15"
        fill='none'
        className={className}
    >
        <path d="M7.09349 6.84116C7.03516 6.83533 6.96516 6.83533 6.90099 6.84116C5.51266 6.79449 4.41016 5.65699 4.41016 4.25699C4.41016 2.82783 5.56516 1.66699 7.00016 1.66699C8.42932 1.66699 9.59016 2.82783 9.59016 4.25699C9.58432 5.65699 8.48182 6.79449 7.09349 6.84116Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.17691 8.99301C2.76525 9.93801 2.76525 11.478 4.17691 12.4172C5.78108 13.4905 8.41191 13.4905 10.0161 12.4172C11.4277 11.4722 11.4277 9.93217 10.0161 8.99301C8.41775 7.92551 5.78691 7.92551 4.17691 8.99301Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



Profileicon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Profileicon.defaultProps = {
    color: "#FFF",
    width: "14",
    height: "15",
};

export default Profileicon;
