
import React, { useState } from 'react'
import DashboardSearch from '../../DashboardSearch'
import TableSkeletonLoader from '../../skeleton/TableSkeletonLoader'
import sessionData from '../../../json/session.json'
import SessionTable from './SessionTable'

const SessionContainer = () => {

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1000);

    const initialFormData = {
        search: '',
    };

    const [search, setSearch] = useState(initialFormData);

    return (
        <div className='mb-7'>

            <h2 className="text-sm tracking-tight font-semibold mb-5">Session</h2>

            <DashboardSearch search={search} setSearch={setSearch} />

            <div className="bg-white px-2 py-3 rounded-lg mt-4">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <SessionTable datas={sessionData} />

                )}

            </div>

        </div>
    )
}

export default SessionContainer
