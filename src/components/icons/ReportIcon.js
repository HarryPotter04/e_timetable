import React from 'react';
import PropTypes from 'prop-types';

const ReportIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill='none'
        className={className}
    >
        <path d="M14.6663 7.15291V10.4862C14.6663 13.8196 13.333 15.1529 9.99967 15.1529H5.99967C2.66634 15.1529 1.33301 13.8196 1.33301 10.4862V6.48625C1.33301 3.15291 2.66634 1.81958 5.99967 1.81958H9.33301" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.6663 7.15291H11.9997C9.99967 7.15291 9.33301 6.48625 9.33301 4.48625V1.81958L14.6663 7.15291Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.66699 9.15308H8.66699" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.66699 11.8196H7.33366" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

ReportIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ReportIcon.defaultProps = {
    color: "#FFF",
    width: "16",
    height: "17",
};

export default ReportIcon;
