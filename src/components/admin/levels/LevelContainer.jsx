import TableSkeletonLoader from '../../skeleton/TableSkeletonLoader'
import LevelTable from './LevelTable'
import { useSelector } from 'react-redux'
import { levelState } from '../../../features/slices/timetable/levelSlice'

const LevelContainer = () => {

    const { loading, levels } = useSelector(levelState)

    return (
        <div className='mb-7'>

            <h2 className="text-sm tracking-tight font-semibold mb-5">Levels</h2>

            <div className="bg-white px-2 py-3 rounded-lg mt-4">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <LevelTable datas={levels} />

                )}

            </div>

        </div>
    )
}

export default LevelContainer
