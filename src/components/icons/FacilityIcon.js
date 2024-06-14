import React from 'react';
import PropTypes from 'prop-types';

const FacilityIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill='none'
        className={className}
    >
            <path d="M1.33301 15.1531H14.6663" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.3333 1.81958H4.66667C2.66667 1.81958 2 3.01291 2 4.48625V15.1529H14V4.48625C14 3.01291 13.3333 1.81958 11.3333 1.81958Z" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.37316 10.4863H6.61982C6.27982 10.4863 5.99316 10.7663 5.99316 11.113V15.153H9.99316V11.113C9.99983 10.7663 9.71983 10.4863 9.37316 10.4863Z" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 4.48633V7.81966" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.33301 6.15308H9.66634" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



FacilityIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FacilityIcon.defaultProps = {
    color: "#FFF",
    width: "16",
    height: "17",
};

export default FacilityIcon;
