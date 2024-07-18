import React, { useState } from "react";
import AddFaculty from "./AddFaculty";
import DeleteModal from "../DeleteModal";

const FacultyEntry = ({ data }) => {
  const [openDel, setOpenDel] = useState(false);
  const [openFt, setOpenFt] = useState(false);
  return (
    <tr>
      <td className="px-6 py-3 whitespace-nowrap">
        <span className="block text-xs pb-0 mb-0 text-dark">{data.name}</span>
      </td>
      <td className="px-6 py-3 whitespace-nowrap">
        <div className="">
          <span className="block text-xs text-textColor">{data.acronym}</span>
        </div>
      </td>
      <td className="relative px-6 py-3 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => setOpenFt(true)}
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
      <AddFaculty open={openFt} data={data} setOpen={setOpenFt} />
      <DeleteModal
        data={data}
        openDel={openDel}
        setOpenDel={setOpenDel}
        name="faculty"
      />
    </tr>
  );
};

export default FacultyEntry;
