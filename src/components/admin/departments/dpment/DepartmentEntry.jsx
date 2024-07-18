import React, { useState } from "react";
import AddDepartment from "./AddDepartment";
import DeleteModal from "../DeleteModal";

const DepartmentEntry = ({ data }) => {
  const [openDel, setOpenDel] = useState(false);
  const [openDt, setOpenDt] = useState(false);
  return (
    <tr>
      <td className="px-6 py-3 whitespace-nowrap">
        <span className="block text-xs pb-0 mb-0 text-dark">{data?.name}</span>
      </td>
      <td className="px-6 py-3 whitespace-nowrap">
      <span className="block text-xs pb-0 mb-0 text-dark">{data?.faculty.name} ({data?.faculty.acronym})</span>
      </td>
      <td className="relative px-6 py-3 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => setOpenDt(true)}
            className="btn btn-primary py-1.5 rounded-full text-xs"
          >
            Edit
          </button>
          <button
            onClick={() => setOpenDel(true)}
            className="btn bg-danger py-1.5 text-white rounded-full text-xs"
          >
            Delete
          </button>
        </div>
      </td>
      <AddDepartment open={openDt} data={data} setOpen={setOpenDt} />
      <DeleteModal data={data} openDel={openDel} setOpenDel={setOpenDel} name="department" />
    </tr>
  );
};

export default DepartmentEntry;
