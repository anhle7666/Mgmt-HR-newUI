import { useEffect, useState } from "react";
import EmployeeServices from "../../../../../Services/Employee";

const Training = () => {
    const [selected, setSelected] = useState({
        firstName: "",
        lastName: "",
    });

    const [employeesList, setEmployeesList] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const employeesList = await EmployeeServices.getAllEmployees();
            setEmployeesList(employeesList);
        };

        loadData();
    }, []);

    const loadNameFromId = () => {
        if (!selected);
        const fullName = `${selected.firstName} ${selected.lastName}`;
        return fullName;
    };

    const convertFormToJson = (form) => {
        const data = new FormData(form);
        const json = Object.fromEntries(data.entries());
        return json;
    };

    const handleSumbitForm = (e) => {
        const form = document.querySelector("#employeeForm");
        e.preventDefault();
        const json = convertFormToJson(form);
        console.log(json);
    };
    return (
        <div className="min-h-screen bg-base-300">
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="mt-5 md:col-span-1 md:mt-0 py-5 bg-base-300">
                        <div className="overflow-hidden shadow sm:rounded-md ">
                            <form id="employeeForm" className="bg-base-300 px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                                        <label
                                            htmlFor="IDEmployee"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Mã nhân viên
                                        </label>
                                        <select
                                            type="text"
                                            name="IDEmployee"
                                            id="IDEmployee"
                                            autoComplete="IDEmployee"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        >
                                            {employeesList
                                                ? employeesList.map((employee) => (
                                                      <option
                                                          key={employee.IDEmployee}
                                                          onClick={() => {
                                                              setSelected(employee);
                                                          }}
                                                      >
                                                          {employee.IDEmployee}
                                                      </option>
                                                  ))
                                                : ""}
                                        </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Tên nhân viên
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            value={loadNameFromId()}
                                            autoComplete="fullName"
                                            readOnly
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                                        <label
                                            htmlFor="IDCourse"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Mã khóa đào tạo
                                        </label>
                                        <input
                                            type="text"
                                            name="IDCourse"
                                            id="IDCourse"
                                            autoComplete="IDCourse"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label
                                            htmlFor="nameCourse"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Tên khóa đào tạo
                                        </label>
                                        <input
                                            type="text"
                                            name="nameCourse"
                                            id="nameCourse"
                                            autoComplete="nameCourse"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label
                                            htmlFor="startCourse"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Ngày bắt đầu
                                        </label>
                                        <input
                                            type="date"
                                            name="startCourse"
                                            id="startCourse"
                                            autoComplete="startCourse"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label
                                            htmlFor="durationCourse"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Thời gian đào tạo
                                        </label>
                                        <input
                                            type="text"
                                            name="durationCourse"
                                            id="durationCourse"
                                            autoComplete="durationCourse"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label
                                            htmlFor="trainingContent"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Nội dung đào tạo
                                        </label>
                                        <input
                                            type="text"
                                            name="trainingContent"
                                            id="trainingContent"
                                            autoComplete="trainingContent"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </form>

                            <div className="bg-base-300 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md bg-base-content py-2 px-3 text-sm font-semibold text-base-300 shadow-sm hover:text-base-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    onClick={handleSumbitForm}
                                >
                                    Lưu thông tin
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;
