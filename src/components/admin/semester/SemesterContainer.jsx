import TableSkeletonLoader from '../../skeleton/TableSkeletonLoader'
import SemesterTable from './SemesterTable'
import { useSelector } from 'react-redux'
import { semesterState } from '../../../features/slices/timetable/semesterSlice'

const SemesterContainer = () => {

    const {loading, semesters} = useSelector(semesterState)

    return (
        <div className='mb-7'>

            <h2 className="text-sm tracking-tight font-semibold mb-5">Semesters</h2>

            <div className="bg-white px-2 py-3 rounded-lg mt-4">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <SemesterTable datas={semesters} />

                )}

            </div>

        </div>
    )
}

export default SemesterContainer
