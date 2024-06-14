import React from 'react';
import PropTypes from 'prop-types';

const InsightIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill='none'
        className={className}
    >
        <path d="M4.58691 12.5863V11.2063" stroke={color} strokeLinecap="round" />
        <path d="M8 12.5864V9.82642" stroke={color} strokeLinecap="round" />
        <path d="M11.4131 12.5864V8.4397" stroke={color} strokeLinecap="round" />
        <path d="M11.4136 4.38623L11.1069 4.74623C9.40691 6.7329 7.12691 8.13956 4.58691 8.7729" stroke={color} strokeLinecap="round" />
        <path d="M9.45996 4.38623H11.4133V6.3329" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.99967 15.1529H9.99967C13.333 15.1529 14.6663 13.8196 14.6663 10.4862V6.48625C14.6663 3.15291 13.333 1.81958 9.99967 1.81958H5.99967C2.66634 1.81958 1.33301 3.15291 1.33301 6.48625V10.4862C1.33301 13.8196 2.66634 15.1529 5.99967 15.1529Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



InsightIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InsightIcon.defaultProps = {
    color: "#FFF",
    width: "16",
    height: "17",
};

export default InsightIcon;
