import TableSkeletonLoader from '../../skeleton/TableSkeletonLoader'
import SessionTable from './SessionTable'
import { useSelector } from 'react-redux'
import { sessionState } from '../../../features/slices/timetable/sessionSlice'

const SessionContainer = () => {
    const { sessions, loading } = useSelector(sessionState)

 
    return (
        <div className='mb-7'>

            <h2 className="text-sm tracking-tight font-semibold mb-5">Session</h2>

            <div className="bg-white px-2 py-3 rounded-lg mt-4">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <SessionTable datas={sessions} />

                )}

            </div>

        </div>
    )
}

export default SessionContainer
