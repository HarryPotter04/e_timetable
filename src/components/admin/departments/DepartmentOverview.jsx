import { useSelector } from "react-redux";
import { departmentState } from "../../../features/slices/timetable/departmentSlice";
import { facultyState } from "../../../features/slices/timetable/facultySlice";
import Counter from "../../Counter"
import ReportIcon from "../../icons/ReportIcon"

const DepartmentOverview = () => {
    const { departments } = useSelector(departmentState);
    const { facultys } = useSelector(facultyState);

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <ReportIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Departments</h2>
                </div>

                <h2 className='text-2xl font-medium'> <Counter value={departments.length} /> </h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <ReportIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Faculty</h2>
                </div>

                <h2 className='text-2xl font-medium'> <Counter value={facultys.length} /> </h2>

            </div>

        </div>
    )
}

export default DepartmentOverview