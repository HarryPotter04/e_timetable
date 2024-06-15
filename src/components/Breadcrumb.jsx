import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ segments }) => {

    return (
        <div className="flex items-center flex-wrap gap-x-1.5">

            {segments.map((segment, index) => (
                <React.Fragment key={index}>
                    {index > 0 && (
                        <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.67818 0.840908L1.39693 13.0312H0.323065L3.60431 0.840908H4.67818Z" fill="#A3A3A3" />
                        </svg>
                    )}
                    {segment.link ? (
                        <Link to={segment.link} className="text-[#A3A3A3] text-xs font-medium">
                            {segment.title}
                        </Link>
                    ) : (
                        <p className="text-primary text-xs">{segment.title}</p>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default BreadCrumb;
