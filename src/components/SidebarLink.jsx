import React from 'react'
import { Link } from 'react-router-dom';

const SidebarLink = ({ href, icon, activeIcon, text, isActive, onClick }) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <Link to={href} className={`text-xs my-0 flex items-center font-medium whitespace-nowrap rounded-lg px-2 text-white tracking-tight transition-all mb-1 ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <div className="stroke-none text-lg flex items-center justify-center p-2.5 text-center">
                {!isActive ? icon : activeIcon}
            </div>
            <span className="ml-1 duration-300 opacity-100 pointer-events-none text-xs ease-soft">{text}</span>
        </Link>
    )
};

export default SidebarLink