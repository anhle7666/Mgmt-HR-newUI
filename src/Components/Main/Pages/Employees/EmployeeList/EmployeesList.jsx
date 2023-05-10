import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "./Search/Search";
import Loadding from "../../Loadding";
import EmployeeServices from "../../../../../Services/Employee";
const EmployeesList = () => {
    const navigator = useNavigate();
    const [employeesList, setEmployeesList] = useState(null);
    const [filter, setFilter] = useState("");

    const handleEdit = (employee) => {
        navigator(`/chinh-sua-thong-tin/${employee._id}`);
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        console.log(value);
        setFilter(value);
    };

    useEffect(() => {
        const loadData = async () => {
            const employees = await EmployeeServices.getAllEmployees();
            if (filter) {
                const newList = employees.filter((e) => {
                    const name = `${e.firstName} ${e.lastName}`;
                    return name.toLowerCase().includes(filter.toLowerCase());
                });

                setEmployeesList(newList);
            } else {
                setEmployeesList(employees);
            }
        };
        loadData();
    }, [filter]);

    return (
        <>
            <div className="bg-base-300 h-16 flex">
                <div className="form-control self-center flex-end">
                    <div className="input-group mx-10">
                        <input
                            type="text"
                            placeholder="Search…"
                            onChange={(e) => handleSearch(e)}
                            className="input input- w-96 placeholder:text-base-content "
                        />
                        <button className="btn btn-square">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Mã NV</th>
                            <th>Họ và tên</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>Vị Trí</th>
                            <th>Lương CB</th>
                            <th>CMND</th>
                            <th>Địa chỉ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeesList ? (
                            employeesList.map((employee) => (
                                <tr
                                    className="hover cursor-pointer"
                                    key={employee.IDEmployee}
                                    onClick={() => handleEdit(employee)}
                                >
                                    <td>{employee.IDEmployee}</td>
                                    <td>{`${employee.firstName} ${employee.lastName}`}</td>
                                    <td>{employee.birthday}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.position}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.cmnd}</td>
                                    <td>{`${employee.districts}, ${employee.city}`}</td>
                                </tr>
                            ))
                        ) : (
                            <Loadding />
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EmployeesList;
