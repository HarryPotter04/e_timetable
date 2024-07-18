import React from "react";
import { EachElement } from "../../../../utils/Each";

import FacultyEntry from "./FacultyEntry";

const FacultyTable = ({ datas }) => {



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
                            <table className="min-w-full divide-y divide-border_color">
                                <thead className="bg-white rounded-t-xl text-dark">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Name
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Acronym
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Action
                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border_color">
                                    <EachElement
                                        of={datas}
                                        render={(data, index) => (
                                           <FacultyEntry data={data} key={index} />
                                            
                                        )}
                                    />
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyTable;
