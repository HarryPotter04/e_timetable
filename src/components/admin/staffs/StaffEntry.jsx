import React, { useState } from 'react'
import AddStaffModal from './AddStaffModal'
import DeleteModal from '../departments/DeleteModal'

const StaffEntry = ({data}) => {
    const [open, setOpen] = useState(false)
    const [openDel, setOpenDel] = useState(false)
  return (
    <tr>
    <td className="px-6 py-3 whitespace-nowrap">
        <span className="block text-xs pb-0 mb-0 text-dark capitalize">
            {data.fullname}
        </span>
    </td>
    <td className="px-6 py-3 whitespace-nowrap">
            <span className="block text-xs text-textColor">
                {data.username}
            </span>
    </td>
    <td className="px-6 py-3 whitespace-nowrap">
            <span className="block text-xs text-textColor">
                {data.email}
            </span>
    </td>
    <td className="relative px-6 py-3 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
            <button onClick={()=> setOpen(true)} className="btn btn-primary py-1.5 rounded-full text-xs">Edit</button>
            <button onClick={()=> setOpenDel(true)} className="btn bg-danger py-1.5 text-white rounded-full text-xs">Delete</button>
        </div>
    </td>

    <AddStaffModal open={open} setOpen={setOpen} data={data} />
    <DeleteModal openDel={openDel} setOpenDel={setOpenDel} data={data} name={"staff"} />
</tr>
  )
}

export default StaffEntry