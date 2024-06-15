import React from 'react';
import PropTypes from 'prop-types';

const LogoutIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 13 13"
        fill='none'
        className={className}
    >
        <path d="M9.21973 7.79633L10.4997 6.51633L9.21973 5.23633" stroke={color} strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.37988 6.51636H10.4649" stroke={color} strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.37988 10.4863C4.16988 10.4863 2.37988 8.98633 2.37988 6.48633C2.37988 3.98633 4.16988 2.48633 6.37988 2.48633" stroke={color} strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


LogoutIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LogoutIcon.defaultProps = {
    color: "#FFF",
    width: "13",
    height: "13",
};

export default LogoutIcon;
