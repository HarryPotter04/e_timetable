import Counter from "../Counter"
import FacilityIcon from "../icons/FacilityIcon"
import PeopleIcon from "../icons/PeopleIcon"
import ReportIcon from "../icons/ReportIcon"

const Overview = () => {

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <ReportIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Departments</h2>
                </div>

                <h2 className='text-2xl font-medium'> <Counter value={234} /> </h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <ReportIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Faculty</h2>
                </div>

                <h2 className='text-2xl font-medium'> <Counter value={2324} /> </h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white  rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <FacilityIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Schools</h2>
                </div>

                <h2 className='text-2xl font-medium'> <Counter value={2345} /> </h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white  rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <PeopleIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Staffs</h2>
                </div>

                <h2 className='text-2xl font-medium'> <Counter value={123} /> </h2>

            </div>

        </div>
    )
}

export default Overview