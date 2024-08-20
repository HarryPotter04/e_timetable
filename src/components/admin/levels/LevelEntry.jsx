import { useState } from "react";
import DeleteModal from "../departments/DeleteModal";

const LevelEntry = ({data}) => {
  const [openDel, setOpenDel] = useState(false);
  return (
    <tr className="flex">
      <td className="px-6 py-3 whitespace-nowrap flex-1">
        <span className="block text-xs pb-0 mb-0 text-dark">{data?.name}</span>
      </td>
      <td className="relative px-6 py-3 whitespace-nowrap flex-shrink-0 text-right">
        <div className="flex items-center gap-x-2 justify-end">
          <button
            onClick={() => setOpenDel(true)}
            className="btn bg-danger py-1.5 text-white rounded-full text-xs"
          >
            Delete
          </button>
        </div>
      </td>

      <DeleteModal
        openDel={openDel}
        setOpenDel={setOpenDel}
        data={data}
        name={"level"}
      />
    </tr>
  );
};

export default LevelEntry;
