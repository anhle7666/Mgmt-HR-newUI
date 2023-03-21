import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "./Search/Search";
const EmployeesList = () => {
    const navigator = useNavigate();
    const [employeesList, setEmployeesList] = useState(null);
    
    const handleEdit = (employee) => {
        navigator(`/chinh-sua-thong-tin/${employee.IDEmployee}`);
    };

    useEffect(() => {
        const employees = [
            {
                IDEmployee: "PT_20260",
                accountNumber: "123456789",
                bank: "Vietinbank",
                city: "Cần Thơ",
                country: "Việt Nam",
                districts: "Ninh Kiều",
                emailAddress: "anhle7666@gmail.com",
                firstName: "Lê",
                gender: "Nam",
                graduationYear: "2023",
                lastName: "Phúc Anh",
                birthday: "2001-01-26",
                literacy: "Cao đẳng",
                position: "Dreamie",
                streetAddress: "4 Nguyễn Văn Linh",
                tax: "124568",
                university: "Đại học Cần Thơ",
                ward: "An Khánh",
            },
            {
                IDEmployee: "PT_20261",
                accountNumber: "123456789",
                bank: "Vietinbank",
                city: "Cần Thơ",
                country: "Việt Nam",
                districts: "Ninh Kiều",
                emailAddress: "anhle7666@gmail.com",
                firstName: "Lê",
                gender: "Nam",
                graduationYear: "2023",
                lastName: "Phúc Anh",
                birthday: "2001-01-26",
                literacy: "Cao đẳng",
                position: "Dreamie",
                streetAddress: "4 Nguyễn Văn Linh",
                tax: "124568",
                university: "Đại học Cần Thơ",
                ward: "An Khánh",
            },
            {
                IDEmployee: "PT_20262",
                accountNumber: "123456789",
                bank: "Vietinbank",
                city: "Cần Thơ",
                country: "Việt Nam",
                districts: "Ninh Kiều",
                emailAddress: "anhle7666@gmail.com",
                firstName: "Lê",
                gender: "Nam",
                graduationYear: "2023",
                lastName: "Phúc Anh",
                birthday: "2001-01-26",
                literacy: "Cao đẳng",
                position: "Dreamie",
                streetAddress: "4 Nguyễn Văn Linh",
                tax: "124568",
                university: "Đại học Cần Thơ",
                ward: "An Khánh",
            },
            {
                IDEmployee: "PT_20263",
                accountNumber: "123456789",
                bank: "Vietinbank",
                city: "Cần Thơ",
                country: "Việt Nam",
                districts: "Ninh Kiều",
                emailAddress: "anhle7666@gmail.com",
                firstName: "Lê",
                gender: "Nam",
                graduationYear: "2023",
                lastName: "Phúc Anh",
                birthday: "2001-01-26",
                literacy: "Cao đẳng",
                position: "Dreamie",
                streetAddress: "4 Nguyễn Văn Linh",
                tax: "124568",
                university: "Đại học Cần Thơ",
                ward: "An Khánh",
            },
        ];
        const loadData = () => {
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
