import React from 'react';

const Avatar = ({ name, size = 'h-10 w-10', bgColor = 'bg-white', textColor = 'text-black', fontSize = 'text-xs', className }) => {
    
    const getInitials = (name) => {
        const nameArray = name?.split(' ');
        const initials = nameArray?.map(word => word.charAt(0))?.join('')?.toUpperCase();
        return initials;
    };

    return (
        <span className={`rounded-full font-semibold p-3 ${size} ${bgColor} ${textColor} ${fontSize} ${className} flex items-center justify-center`}>
            {getInitials(name)}
        </span>
    );
};

export default Avatar;
