import React from 'react';
import PropTypes from 'prop-types';

const PeopleIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill='none'
        className={className}
    >
        <path d="M6.10671 7.24659C6.04004 7.23992 5.96004 7.23992 5.88671 7.24659C4.30004 7.19325 3.04004 5.89325 3.04004 4.29325C3.04004 2.65992 4.36004 1.33325 6.00004 1.33325C7.63337 1.33325 8.96004 2.65992 8.96004 4.29325C8.95337 5.89325 7.69337 7.19325 6.10671 7.24659Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.9402 2.66675C12.2335 2.66675 13.2735 3.71341 13.2735 5.00008C13.2735 6.26008 12.2735 7.28675 11.0268 7.33341C10.9735 7.32675 10.9135 7.32675 10.8535 7.33341" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.77348 9.70675C1.16014 10.7867 1.16014 12.5467 2.77348 13.6201C4.60681 14.8467 7.61348 14.8467 9.44681 13.6201C11.0601 12.5401 11.0601 10.7801 9.44681 9.70675C7.62014 8.48675 4.61348 8.48675 2.77348 9.70675Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.2266 13.3333C12.7066 13.2333 13.1599 13.0399 13.5332 12.7533C14.5732 11.9733 14.5732 10.6866 13.5332 9.90659C13.1666 9.62659 12.7199 9.43992 12.2466 9.33325" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


PeopleIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PeopleIcon.defaultProps = {
    color: "#1D2329",
    width: "16",
    height: "16",
};

export default PeopleIcon;
