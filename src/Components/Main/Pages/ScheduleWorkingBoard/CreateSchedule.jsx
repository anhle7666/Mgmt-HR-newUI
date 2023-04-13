import { useEffect, useState } from "react";
import employeeServices from "../../../../Services/Employee";
const CreateSchedule = () => {
    const [list, setList] = useState([]);
    const [selectedDept, setSelectedDept] = useState("");
    const [selectedStartTime, setSelectedStartTime] = useState("");
    const [selectedEndTime, setSelectedEndTime] = useState("");

    const calculateHours = (startTime, endTime) => {
        const start = new Date(`01/01/2000 ${startTime}`);
        const end = new Date(`01/01/2000 ${endTime}`);
        const hours = (end - start) / 1000 / 60 / 60;
        return hours;
    };

    const convertFormToJson = (form) => {
        const data = new FormData(form);
        const json = Object.fromEntries(data.entries());
        return json;
    };

    const handleSumbitForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const Shifts = convertFormToJson(form);
        await employeeServices.addNewShift(Shifts);
        const updatedList = await employeeServices.getListShifts();
        setList(updatedList);
    };

    useEffect(() => {
        const getShiftsList = async () => {
            const shiftsList = await employeeServices.getListShifts();
            setList(shiftsList);
        };
        getShiftsList();
    }, [list]);
    
    const sortedList = list.sort((a, b) => {
        const timeA = new Date(`2000-01-01T${a.startTime}`);
        const timeB = new Date(`2000-01-01T${b.startTime}`);
        return timeA - timeB;
    });

    return (
        <>
            <form action="" onSubmit={handleSumbitForm}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                        <label htmlFor="IDShifts" className="block text-sm font-medium leading-6 text-base-content">
                            Mã Ca
                        </label>
                        <input
                            type="text"
                            name="IDShifts"
                            id="IDShifts"
                            autoComplete="IDShifts"
                            readOnly
                            value={`${selectedDept}_${selectedStartTime}_${calculateHours(
                                selectedStartTime,
                                selectedEndTime,
                            )}H`}
                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                        <label htmlFor="dept" className="block text-sm font-medium leading-6 text-base-content">
                            Bộ phận
                        </label>
                        <select
                            type="time"
                            name="dept"
                            id="dept"
                            autoComplete="dept"
                            value={selectedDept}
                            onChange={(e) => setSelectedDept(e.target.value)}
                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                        >
                            <option>Sales</option>
                            <option>Canteen</option>
                            <option>Checker</option>
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                        <label htmlFor="startTime" className="block text-sm font-medium leading-6 text-base-content">
                            Giờ Vào Ca
                        </label>
                        <input
                            type="time"
                            name="startTime"
                            id="startTime"
                            autoComplete="startTime"
                            value={selectedStartTime}
                            onChange={(e) => setSelectedStartTime(e.target.value)}
                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                        <label htmlFor="endTime" className="block text-sm font-medium leading-6 text-base-content">
                            Giờ Ra Ca
                        </label>
                        <input
                            type="time"
                            name="endTime"
                            id="endTime"
                            autoComplete="endTime"
                            value={selectedEndTime}
                            onChange={(e) => setSelectedEndTime(e.target.value)}
                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="py-5">
                        <button type="submit" className="btn ">
                            Thêm
                        </button>
                    </div>
                </div>
            </form>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>Thứ tự</th>
                        <th>Ca làm</th>
                        <th>Giờ vào ca</th>
                        <th>Giờ hết ca</th>
                        <th>Bộ phận</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedList.map((shift, index) => (
                        <tr key={shift.IDShifts}>
                            <td>{index + 1}</td>
                            <td>{shift.IDShifts}</td>
                            <td>{shift.startTime}</td>
                            <td>{shift.endTime}</td>
                            <td>{shift.dept}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};

export default CreateSchedule;
