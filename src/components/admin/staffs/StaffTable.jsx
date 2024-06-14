import React from "react";
import { EachElement } from "../../../utils/Each";

const StaffTable = ({ datas }) => {

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
                                                    Role
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Actions
                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border_color">
                                    <EachElement
                                        of={datas}
                                        render={(data, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <span className="block text-xs pb-0 mb-0 text-dark">
                                                        {data.name}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            {data.role}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="relative px-6 py-3 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <button className="btn btn-primary py-1.5 rounded-full text-xs">Edit</button>
                                                        <button className="btn bg-danger py-1.5 text-white rounded-full text-xs">Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
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

export default StaffTable;
