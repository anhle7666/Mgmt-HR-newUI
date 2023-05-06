import faceIO from "@faceio/fiojs";
import { useState, useEffect } from "react";
import EmployeeServices from "../../../../Services/Employee";
const AddFace = () => {
    const [employeesList, setEmployeesList] = useState([]);

    const [selectedEmployee, setSelectedEmployee] = useState("");

    useEffect(() => {
        const loadData = async () => {
            const list = await EmployeeServices.getAllEmployees();
            setEmployeesList(list);
        };
        loadData();
    }, []);

    const faceio = new faceIO("fioaf245");
    const enrollNewUser = async () => {
        const userInfo = await faceio.enroll({
            payload: {
                IDEmployee: selectedEmployee,
            },
        });
        console.log(userInfo);
        window.location.reload();
    };

    const addingFace = () => {
        if (selectedEmployee) enrollNewUser();
        else {
            alert("Vui lòng chọn một nhân viên!");
        }
    };

    return (
        <>
            <div className="form-control">
                <label className="input-group">
                    <span className="w-40">Nhân viên</span>
                    <select
                        type="text"
                        className="input input-bordered w-full "
                        onChange={(e) => setSelectedEmployee(e.target.value)}
                    >
                        <option>-</option>
                        {employeesList ? (
                            employeesList.map((employee) => (
                                <option
                                    key={employee.IDEmployee}
                                    value={employee.IDEmployee}
                                    // onClick={() => setSelectedEmployee(employee.IDEmployee)}
                                >{`${employee.firstName} ${employee.lastName}`}</option>
                            ))
                        ) : (
                            <h1>Loading</h1>
                        )}
                    </select>
                </label>
                <button className="btn mt-5" onClick={() => addingFace()}>
                    Thêm
                </button>
            </div>
        </>
    );
};

export default AddFace;
