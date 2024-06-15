import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react'

const DashboardSearch = ({ setSearch }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    };

    useEffect(() => {
        const typingTimeout = setTimeout(() => {
            setSearch((prevSearchCriteria) => ({
                ...prevSearchCriteria,
                search: searchQuery,
            }));
        }, 500);
        return () => clearTimeout(typingTimeout);
    }, [searchQuery, setSearch]);


    return (
            <div className="flex sm:items-center justify-end flex-wrap gap-x-5 gap-y-3">

                <div className="relative flex-grow sm:flex-1">
                    <input type="search" className="form-control border-border_color py-2 pl-10" placeholder='Search' value={searchQuery} onChange={handleSearchChange} />
                    <div className="absolute top-[13px] left-3"> <MagnifyingGlassIcon  className='w-4 h-4' color='#586283' /> </div>
                </div>

            </div>
    )
}

export default DashboardSearch
