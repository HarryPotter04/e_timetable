
import React, { useState } from 'react'
import DashboardSearch from '../../DashboardSearch'
import TableSkeletonLoader from '../../skeleton/TableSkeletonLoader'
import LevelDatas from '../../../json/level.json'
import LevelTable from './LevelTable'

const LevelContainer = () => {

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

            <h2 className="text-sm tracking-tight font-semibold mb-5">Levels</h2>

            <DashboardSearch search={search} setSearch={setSearch} />

            <div className="bg-white px-2 py-3 rounded-lg mt-4">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <LevelTable datas={LevelDatas} />

                )}

            </div>

        </div>
    )
}

export default LevelContainer
