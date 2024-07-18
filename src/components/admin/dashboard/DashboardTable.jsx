import React from "react";
import { EachElement } from "./../../../utils/Each";
import TableEntry from "./TableEntry";

const DashboardTable = ({ datas }) => {
  const getTableHeading = datas[0];
  
  return (
    <div className="mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto scrollbar-thin">
          <div className="p-1.5 min-w-full inline-block align-middle">
            {datas?.length === 0 ? (
              <div className="text-center py-5">
                <span className="text-lg font-semibold text-gray-600">
                  No data found
                </span>
              </div>
            ) : (
              <>
                <h1 className="font-semibold text-xl mb-5 p-3">
                  {getTableHeading.faculty.acronym}{" "}
                  {getTableHeading.department.name} {getTableHeading.level.name}{" "}
                  {getTableHeading.semester.name}{" "}
                  {getTableHeading.session.years_name} Course Timetable
                </h1>

                <div className="space-y-10 ">
                  <div className="flex items-center space-x-4 border-b border-slate-300 pb-6">
                    <h1 className="px-6 py-3 text-dark font-semibold w-28"> 
                      Monday
                    </h1>

                    <EachElement
                      of={datas}
                      render={(data, index) =>
                        data?.day?.name === "Monday" && (
                          <TableEntry data={data} key={index} />
                        )
                      }
                    />
                  </div>

                  <div className="flex items-center space-x-4 border-b border-slate-300 pb-6">
                    <h1 className="px-6 py-3 text-dark font-semibold w-28">
                      Tuesday
                    </h1>

                    <EachElement
                      of={datas}
                      render={(data, index) =>
                        data?.day?.name === "Tuesday" && (
                          <TableEntry data={data} key={index} />
                        )
                      }
                    />
                  </div>

                  <div className="flex items-center space-x-4 border-b border-slate-300 pb-6">
                    <h1 className="px-6 py-3 text-dark font-semibold w-28">
                      Wednesday
                    </h1>

                    <EachElement
                      of={datas}
                      render={(data, index) =>
                        data?.day?.name === "Wednesday" && (
                          <TableEntry data={data} key={index} />
                        )
                      }
                    />
                  </div>
                  <div className="flex items-center space-x-4 border-b border-slate-300 pb-6">
                    <h1 className="px-6 py-3 text-dark font-semibold w-28">
                      Thursday
                    </h1>

                    <EachElement
                      of={datas}
                      render={(data, index) =>
                        data?.day?.name === "Thursday" && (
                          <TableEntry data={data} key={index} />
                        )
                      }
                    />
                  </div>
                  <div className="flex items-center space-x-4 border-b border-slate-300 pb-6">
                    <h1 className="px-6 py-3 text-dark font-semibold w-28">
                      Friday
                    </h1>

                    <EachElement
                      of={datas}
                      render={(data, index) =>
                        data?.day?.name === "Friday" && (
                          <TableEntry data={data} key={index} />
                        )
                      }
                    />
                  </div>
                  <div className="flex items-center space-x-4  border-b border-slate-300 pb-6">
                    <h1 className="px-6 py-3 text-dark font-semibold w-28">
                      Saturday
                    </h1>

                    <EachElement
                      of={datas}
                      render={(data, index) =>
                        data?.day?.name === "Saturday" && (
                          <TableEntry data={data} key={index} />
                        )
                      }
                    />
                  </div>
                  <div className="flex items-center space-x-4 border-b border-slate-300 pb-6">
                    <h1 className="px-6 py-3 text-dark font-semibold w-28">
                      Sunday
                    </h1>

                    <EachElement
                      of={datas}
                      render={(data, index) =>
                        data?.day?.name === "Sunday" && (
                          <TableEntry data={data} key={index} />
                        )
                      }
                    />
                  </div>
                </div>

              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
