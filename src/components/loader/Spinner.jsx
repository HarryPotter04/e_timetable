import React from 'react';

const Spinner = ({ size, color, dark, className, ...rest }) => {
    const spinnerClasses = `animate-spin inline-block border-[3px] border-current border-t-transparent rounded-full ${color} ${dark ? 'dark:' : ''} ${className}`;

    return (
        <div
            className={spinnerClasses}
            style={{ width: size, height: size }}
            role="status"
            aria-label="loading"
            {...rest}
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;
