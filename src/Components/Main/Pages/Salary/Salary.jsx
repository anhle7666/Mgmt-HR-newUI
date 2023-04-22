import { useEffect, useState } from "react";
import EmployeeServices from "../../../../Services/Employee";
import ScheduleServices from "../../../../Services/Schedule";
import { utils, writeFile } from "xlsx";

const Salary = () => {
    let totalHoursWorking = 0;
    const [filter, setFilter] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

    const selectTime = (array) => {
        const month = parseInt(document.getElementById("now").value);
        const now = new Date();
        now.setMonth(month - 1);
        const fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
        const toDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

        const filteredTimekeeping = array.filter((date) => {
            const time = new Date(date.date);
            return time >= fromDate && time <= toDate;
        });
        if (filter) setFilter(filteredTimekeeping);
        return filteredTimekeeping;
    };
    const selectCurrentMonth = () => {
        const currMonth = new Date().getMonth();
        selectMonth(currMonth + 1);
    };

    function selectMonth(month) {
        setSelectedMonth(month);
        console.log(month);
        selectTime();
    }

    const getHourWorking = (timegroup) => {
        const hours = new Date(timegroup.endTime) - new Date(timegroup.startTime);
        return (hours / 3600000.0).toFixed(1);
    };

    const getTotalTime = (IDEmployee) => {
        const employee = filter.filter((item) => item.IDEmployee === IDEmployee);
        let TotalHours = 0;
        employee.forEach((item) => {
            TotalHours += parseFloat(getHourWorking(item));
        });
        return TotalHours;
    };

    const formatMoney = (number) => {
        return number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
    };

    const formatTime = (time) => {
        const newTime = new Date(time);
        const date = newTime.getDate().toString().padStart(2, "0");
        const month = (newTime.getMonth() + 1).toString().padStart(2, "0");
        const year = newTime.getFullYear().toString();
        const formattedTime = `${date}/${month}/${year}`;
        return formattedTime;
    };
    const countSalary = (hours, basicSalary = 20000) => {
        totalHoursWorking += hours;
        const tax = hours > 210 ? 10.5 : 0;
        const salary = hours * basicSalary;
        const finalSalary = salary - (salary * tax) / 100;
        return formatMoney(finalSalary);
    };

    const paymentSalary = () => {
        const data = employee.map((item) => ({
            ID: item.IDEmployee,
            FullName: `${item.firstName} ${item.lastName}`,
            TaxCode: item.tax,
            Tax: item.salary ? "10.5%" : "0%",
            Bank: item.bank,
            BankAccount: item.accountNumber,
            Payment: item.salary
                ? countSalary(getTotalTime(item.IDEmployee), item.salary, 10.5)
                : countSalary(getTotalTime(item.IDEmployee)),
            PaymentDate: formatTime(new Date()),
        }));

        console.log(data);
        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Sheet1");
        const file = `Payment - ${new Date().toISOString()}.xlsx`;
        writeFile(workbook, file);
    };

    const exportExcel = () => {
        const data = employee.map((item) => ({
            ID: item.IDEmployee,
            FullName: `${item.firstName} ${item.lastName}`,
            Position: item.position,
            Salary: item.salary || formatMoney(20000),
            TotalHours: getTotalTime(item.IDEmployee),
            TotalSalary: item.salary
                ? countSalary(getTotalTime(item.IDEmployee), item.salary)
                : countSalary(getTotalTime(item.IDEmployee)),
            Tax: item.salary ? "10.5%" : "0%",
            Payment: item.salary
                ? countSalary(getTotalTime(item.IDEmployee), item.salary, 10.5)
                : countSalary(getTotalTime(item.IDEmployee)),
            Status: "Đã thanh toán",
            PaymentDate: "10/03/2023",
        }));

        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Sheet1");
        const file = `Salary - ${new Date().toISOString()}.xlsx`;
        writeFile(workbook, file);
    };

    useEffect(() => {
        const loadData = async () => {
            const listEmployees = await EmployeeServices.getAllEmployees();
            const listShifts = await ScheduleServices.getAllTimeKeep();
            const result = listShifts.reduce((acc, curr) => {
                const existing = acc.find(
                    (item) =>
                        item.IDEmployee === curr.IDEmployee &&
                        item.date === new Date(curr.time).toISOString().slice(0, 10),
                );

                if (existing) {
                    existing.endTime = curr.time;
                } else {
                    acc.push({
                        IDEmployee: curr.IDEmployee,
                        date: new Date(curr.time).toISOString().slice(0, 10),
                        startTime: curr.time,
                        endTime: curr.time,
                    });
                }
                return acc;
            }, []);
            selectTime(result, selectedMonth);
            setEmployee(listEmployees);
        };
        loadData();
    }, [selectedMonth]);

    return (
        <>
            <div className="bg-base-300 h-16 flex py-10 pb-14 w-screen">
                <div className="form-control self-center flex-start mx-6 w-2/3">
                    <br />
                    <div className="input-group">
                        <select
                            type="date"
                            id="now"
                            onChange={(e) => selectMonth(e.target.value)}
                            value={selectedMonth}
                            className="input w-96 placeholder:text-base-content "
                        >
                            {Array.from({ length: 12 }, (_, i) => {
                                const month = i + 1;
                                return (
                                    <option key={month} value={month}>
                                        Tháng {month}
                                    </option>
                                );
                            })}
                        </select>
                        <button className="btn" onClick={selectCurrentMonth}>
                            Tháng hiện tại
                        </button>
                    </div>
                </div>

                <div className="form-control self-center mx-14">
                    <br />
                    <button className="btn btn-accent" onClick={() => paymentSalary()}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                        >
                            <path d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 16 C 2 17.105 2.895 18 4 18 L 16 18 C 17.105 18 18 17.105 18 16 L 18 4 C 18 2.895 17.105 2 16 2 L 4 2 z M 13.585938 6 L 15 7.4140625 L 9 13.414062 L 5 9.4140625 L 6.4140625 8 L 9 10.585938 L 13.585938 6 z M 20 6 L 20 20 L 6 20 L 6 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 6 L 20 6 z"></path>
                        </svg>

                        <span className="mx-2">Thanh toán</span>
                    </button>
                </div>
                <div className="form-control self-center flex-end mx-4">
                    <br />
                    <button className="btn btn-success" onClick={() => exportExcel()}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="32"
                            height="32"
                            viewBox="0 0 48 48"
                        >
                            <path d="M 23.576172 4.0664062 C 23.314218 4.0591207 23.047263 4.0824054 22.779297 4.1386719 L 8.5722656 7.1308594 C 6.4998481 7.5683366 5 9.4137099 5 11.533203 L 5 36.466797 C 5 38.585784 6.4983909 40.43285 8.5722656 40.869141 L 22.779297 43.859375 C 24.923297 44.311288 27 42.626019 27 40.435547 L 27 7.5644531 C 27 5.6477898 25.409849 4.117405 23.576172 4.0664062 z M 30 8 L 30 9.5 L 30 11 L 30 38 L 30 39.5 L 30 41 L 38.5 41 C 40.967501 41 43 38.967501 43 36.5 L 43 12.5 C 43 10.032499 40.967501 8 38.5 8 L 30 8 z M 34.5 15 L 37.5 15 C 38.328 15 39 15.671 39 16.5 C 39 17.329 38.328 18 37.5 18 L 34.5 18 C 33.672 18 33 17.329 33 16.5 C 33 15.671 33.672 15 34.5 15 z M 12.537109 16.998047 C 13.02002 17.010742 13.488281 17.251953 13.769531 17.689453 L 16 21.210938 L 18.230469 17.689453 C 18.680469 16.989453 19.610547 16.790469 20.310547 17.230469 C 21.000547 17.680469 21.209531 18.610547 20.769531 19.310547 L 17.779297 24 L 20.769531 28.689453 C 21.209531 29.389453 21.000547 30.319531 20.310547 30.769531 C 20.060547 30.919531 19.78 31 19.5 31 C 19.01 31 18.520469 30.750547 18.230469 30.310547 L 16 26.789062 L 13.769531 30.310547 C 13.479531 30.750547 12.99 31 12.5 31 C 12.22 31 11.939453 30.919531 11.689453 30.769531 C 10.999453 30.319531 10.790469 29.389453 11.230469 28.689453 L 14.220703 24 L 11.230469 19.310547 C 10.790469 18.610547 10.999453 17.680469 11.689453 17.230469 C 11.951953 17.065469 12.247363 16.99043 12.537109 16.998047 z M 34.5 23 L 37.5 23 C 38.328 23 39 23.671 39 24.5 C 39 25.329 38.328 26 37.5 26 L 34.5 26 C 33.672 26 33 25.329 33 24.5 C 33 23.671 33.672 23 34.5 23 z M 34.5 31 L 37.5 31 C 38.328 31 39 31.671 39 32.5 C 39 33.329 38.328 34 37.5 34 L 34.5 34 C 33.672 34 33 33.329 33 32.5 C 33 31.671 33.672 31 34.5 31 z"></path>
                        </svg>

                        <span className="mx-2">Xuất Excel</span>
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto px-5 py-5">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Mã NV</th>
                            <th>Họ và Tên</th>
                            <th>Vị trí</th>
                            <th>Lương CB (1)</th>
                            <th>Tổng giờ làm (2)</th>
                            <th>Tổng Lương (3)</th>
                            <th>Thuế (4)</th>
                            <th>Bảo hiểm (5)</th>
                            <th>Lương thanh toán (6)</th>
                            <th>Tình trạng thanh toán</th>
                            <th>Ngày thanh toán</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filter[0] ? (
                            employee.map((item, i) => (
                                <tr key={item.IDEmployee}>
                                    <th>{item.IDEmployee}</th>
                                    <td>{`${item.firstName} ${item.lastName}`}</td>
                                    <td>{item.position}</td>
                                    <td>{item.salary ? formatMoney(item.salary) : "20.000 đ"}</td>
                                    <td>{getTotalTime(item.IDEmployee)}</td>
                                    <td>
                                        {item.salary
                                            ? countSalary(getTotalTime(item.IDEmployee), item.salary)
                                            : countSalary(getTotalTime(item.IDEmployee))}
                                    </td>
                                    <td>0%</td>
                                    <td>0</td>
                                    <td>
                                        {item.salary
                                            ? countSalary(getTotalTime(item.IDEmployee), item.salary)
                                            : countSalary(getTotalTime(item.IDEmployee))}
                                    </td>
                                    <td>Đã thanh toán</td>
                                    <td>10/03/2023</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Salary;
