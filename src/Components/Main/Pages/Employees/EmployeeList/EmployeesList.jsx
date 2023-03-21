import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "./Search/Search";
import EmployeeServices from "../../../../../Services/Employee";
const EmployeesList = () => {
    const navigator = useNavigate();
    const [employeesList, setEmployeesList] = useState(null);

    const handleEdit = (employee) => {
        navigator(`/chinh-sua-thong-tin/${employee._id}`);
    };

    useEffect(() => {
        const loadData = async () => {
            const employees = await EmployeeServices.getAllEmployees();
            setEmployeesList(employees);
        };
        loadData();
    }, []);
    return (
        <>
            <Search />
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Mã NV</th>
                            <th>Họ và tên</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>Vị Trí</th>
                            <th>Lương CB</th>
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
                                    <td>20000</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>Không có nhân viên</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EmployeesList;
