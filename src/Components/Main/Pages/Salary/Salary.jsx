import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import EmployeeServices from "../../../../Services/Employee";
import ScheduleServices from "../../../../Services/Schedule";
import RobotoFont from "../../../../assets/fonts/Roboto-Regular.ttf";

const Salary = () => {
    const currentMonth = new Date().getMonth() + 1;
    const [filter, setFilter] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [timekeep, setTimekeep] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);

    useEffect(() => {
        const loadData = async () => {
            const listEmployees = await EmployeeServices.getAllEmployees();
            const listTimekeep = await ScheduleServices.getAllTimeKeep();
            setTimekeep(listTimekeep);
            setEmployee(listEmployees);
        };
        loadData();
    }, []);

    useEffect(() => {
        const filteredTimeKeep = timekeep.filter((timeObj) => {
            const date = new Date(timeObj.time);
            return date.getMonth() === selectedMonth - 1; // Lọc các thời gian trong tháng 5 (tháng 4 trong JavaScript vì tháng đếm từ 0)
        });

        setFilter(filteredTimeKeep);
    }, [selectedMonth, timekeep]);

    const formatHours = (timeInMillis) => {
        const hours = timeInMillis / 3600000;
        return Math.round(hours * 10) / 10; // Làm tròn đến 1 chữ số thập phân
    };

    const getTotalTime = (IDEmployee) => {
        const employeeTimeKeep = filter.filter((data) => data.IDEmployee === IDEmployee);

        const totalWorkingTime = employeeTimeKeep.reduce((total, data, index, arr) => {
            if (index % 2 !== 0) {
                const startTime = new Date(arr[index - 1].time);
                const endTime = new Date(data.time);
                const workingTime = endTime - startTime;
                total += workingTime;
            }
            return total;
        }, 0);
        return totalWorkingTime;
    };

    const formatMoney = (money) => {
        if (!money) {
            return "0 đ";
        }
        let value = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        return value + " đ";
    };

    const countSalary = (totalTime, salary) => {
        const workingHours = totalTime / 3600000;
        const totalSalary = workingHours * salary;

        return Math.floor(totalSalary);
    };

    const exportSalaryBoard = () => {
        const orientation = "landscape";
        const unit = "pt";
        const size = "A4";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        doc.addFont(RobotoFont, "Roboto", "normal", undefined);
        doc.setFont("Roboto");
        doc.text(`Bảng lương tháng ${selectedMonth}.`, marginLeft, 40);
        doc.text(`LOTTE CINEMA NINH KIỀU`, marginLeft, 60);

        const tableColumn = [
            "ID",
            "Name",
            "Position",
            "Base Salary",
            "Total Hours",
            "Gross Pay",
            "Tax",
            "Net Pay",
            "Account No.",
            "Bank",
        ];
        const tableRows = employee.map((item) => [
            item.IDEmployee,
            `${item.firstName} ${item.lastName}`,
            item.position,
            item.salary ? formatMoney(item.salary) : "20.150 đ",
            formatHours(getTotalTime(item.IDEmployee)),
            item.salary
                ? formatMoney(countSalary(getTotalTime(item.IDEmployee), item.salary))
                : formatMoney(countSalary(getTotalTime(item.IDEmployee))),
            item.position === "Supervisor" ? "10.5%" : "0%",
            item.salary
                ? formatMoney(countSalary(getTotalTime(item.IDEmployee), item.salary))
                : formatMoney(countSalary(getTotalTime(item.IDEmployee))),
            item.accountNumber,
            item.bank,
        ]);

        doc.autoTable({
            theme: "grid",
            startY: 70,
            head: [tableColumn],
            body: tableRows,
            styles: { font: "Roboto", style: "normal" },
        });

        // doc.save("salary-report.pdf");
        doc.save(`Bang-luong-thang-${selectedMonth}.pdf`);
    };

    return (
        <>
            <div className="bg-base-300 h-16 flex py-10 pb-14 w-screen">
                <div className="form-control self-center flex-start mx-6 w-2/3">
                    <br />
                    <div className="input-group">
                        <select
                            type="date"
                            id="now"
                            onChange={(e) => setSelectedMonth(e.target.value)}
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
                        <button className="btn" onClick={() => setSelectedMonth(currentMonth)}>
                            Tháng hiện tại
                        </button>
                    </div>
                </div>
                <div>
                    <button className="btn btn-success" onClick={() => exportSalaryBoard()}>
                        Bảng lương nhân viên
                    </button>
                    {/* <button className="btn btn-success">Bảng lương nhân viên</button> */}
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
                            <th>Lương thanh toán (5)</th>
                            <th>TK nhận lương</th>
                            <th>Ngân hàng</th>
                            <th>Tình trạng thanh toán</th>
                            <th>Ngày thanh toán</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map((item, i) => (
                            <tr key={item.IDEmployee}>
                                <th>{item.IDEmployee}</th>
                                <td>{`${item.firstName} ${item.lastName}`}</td>
                                <td>{item.position}</td>
                                <td>{item.salary ? formatMoney(item.salary) : "20.150 đ"}</td>
                                <td>{formatHours(getTotalTime(item.IDEmployee))}</td>
                                <td>
                                    {item.salary
                                        ? formatMoney(countSalary(getTotalTime(item.IDEmployee), item.salary))
                                        : formatMoney(countSalary(getTotalTime(item.IDEmployee)))}
                                </td>
                                <td>{item.position === "Supervisor" ? "10.5%" : "0%"}</td>
                                <td>
                                    {item.salary
                                        ? formatMoney(countSalary(getTotalTime(item.IDEmployee), item.salary))
                                        : formatMoney(countSalary(getTotalTime(item.IDEmployee)))}
                                </td>
                                <td>{item.accountNumber}</td>
                                <td>{item.bank}</td>
                                <td> - </td>
                                <td> - </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Salary;
