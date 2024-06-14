import React from 'react';
import PropTypes from 'prop-types';

const DashboardIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 22 22"
        fill={color}
        className={className}
    >
        <path
            d="M16.3082 20.8542H5.69315C3.18148 20.8542 1.14648 18.81 1.14648 16.2984V9.50585C1.14648 8.25918 1.91648 6.69168 2.90648 5.92168L7.84732 2.07168C9.33232 0.916684 11.7065 0.861684 13.2465 1.94335L18.9115 5.91252C20.0023 6.67335 20.8548 8.30502 20.8548 9.63418V16.3075C20.8548 18.81 18.8198 20.8542 16.3082 20.8542ZM8.69065 3.15335L3.74982 7.00335C3.09898 7.51668 2.52148 8.68085 2.52148 9.50585V16.2984C2.52148 18.0492 3.94232 19.4792 5.69315 19.4792H16.3082C18.059 19.4792 19.4798 18.0584 19.4798 16.3075V9.63418C19.4798 8.75418 18.8473 7.53502 18.1231 7.04002L12.4582 3.07085C11.4132 2.33752 9.68982 2.37418 8.69065 3.15335Z"
            fill={color}
        />
        <path
            d="M11 17.1875C10.6242 17.1875 10.3125 16.8758 10.3125 16.5V13.75C10.3125 13.3742 10.6242 13.0625 11 13.0625C11.3758 13.0625 11.6875 13.3742 11.6875 13.75V16.5C11.6875 16.8758 11.3758 17.1875 11 17.1875Z"
            fill={color}
        />
    </svg>
);

DashboardIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DashboardIcon.defaultProps = {
    color: "#A3AED0",
    width: "22",
    height: "22",
};

export default DashboardIcon;
