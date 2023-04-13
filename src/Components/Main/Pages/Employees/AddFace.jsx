import faceIO from "@faceio/fiojs";
import { useState, useEffect } from "react";
import EmployeeServices from "../../../../Services/Employee";
const AddFace = () => {
    const [employeesList, setEmployeesList] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState("");

    const handleChooseEmployee = (e) => {
        const { value } = e.target;
        console.log(value);
        setSelectedEmployee(value);
    };
    
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

    return (
        <>
            <div className="form-control">
                <label className="input-group">
                    <span className="w-40">Nhân viên</span>
                    <select type="text" className="input input-bordered w-full ">
                        <option>-</option>
                        {employeesList ? (
                            employeesList.map((employee) => (
                                <option
                                    key={employee.IDEmployee}
                                    value={employee.IDEmployee}
                                    onClick={handleChooseEmployee}
                                >{`${employee.firstName} ${employee.lastName}`}</option>
                            ))
                        ) : (
                            <h1>Loading</h1>
                        )}
                    </select>
                </label>
                <button className="btn mt-5" onClick={() => enrollNewUser()}>
                    Thêm
                </button>
            </div>
        </>
    );
};

export default AddFace;
