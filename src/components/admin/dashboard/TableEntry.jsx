import { useState } from "react";
import AddTimetable from "../timetable/AddTimetable";
import DeleteModal from "../departments/DeleteModal";

const TableEntry = ({ data, isStudent }) => {
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  return (
    <div className="min-w-48">
      <span className="block text-xs text-textColor">
        <h2 className="font-semibold">
          {data.start_time} - {data.end_time}
        </h2>
        <p>
          {data.course} ({data.course_code})
        </p>
        <p>{data.instructor}</p>
        <p>{data.room}</p>

        {!isStudent && (
          <span className="flex items-center space-x-2">
            <p
              onClick={() => setOpen(true)}
              className="text-primary cursor-pointer"
            >
              Edit
            </p>
            <p
              onClick={() => setOpenDel(true)}
              className="text-danger cursor-pointer"
            >
              Delete
            </p>
          </span>
        )}
      </span>

      {!isStudent && (
        <>
          <AddTimetable data={data} open={open} setOpen={setOpen} />
          <DeleteModal
            data={data}
            openDel={openDel}
            setOpenDel={setOpenDel}
            name="timetable entry"
          />
        </>
      )}
    </div>
  );
};

export default TableEntry;
