import { useEffect, useState } from "react";
import { utils, writeFile } from "xlsx";
import EmployeeServices from "../../../../Services/Employee";
import ScheduleServices from "../../../../Services/Schedule";
const TimeKeeping = () => {
    const [List, setList] = useState([]);
    const [timekeeping, setTimeKeeping] = useState([]);
    const [filter, setFilter] = useState([]);
    const result = timekeeping.reduce((acc, curr) => {
        const existing = acc.find(
            (item) =>
                item.IDEmployee === curr.IDEmployee && item.date === new Date(curr.time).toISOString().slice(0, 10),
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

    function selectTime(month) {
        let fromDate, toDate;
        if (month) {
            fromDate = new Date(month.getFullYear(), month.getMonth(), 1).toISOString();
            toDate = new Date(month.getFullYear(), month.getMonth() + 1, 0).toISOString();
        } else {
            fromDate = document.getElementById("fromDate").value;
            toDate = document.getElementById("toDate").value;
            if (fromDate && toDate) {
                if (toDate < fromDate) {
                    alert("Vui lòng chọn ngày trễ hơn");
                    toDate = "";
                }
            }
        }

        const filteredTimekeeping = result.filter((time) => {
            return time.date >= fromDate && time.date <= toDate;
        });

        setFilter(filteredTimekeeping);
    }

    function exportExcel() {
        const data = filter.map((item) => ({
            Date: item.date,
            FullName: findName(item.IDEmployee),
            StartTime: formatTime(item.startTime),
            EndTime: formatTime(item.endTime),
            HourWorking: getHourWorking(item),
        }));

        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Sheet1");
        const file = `${new Date().toISOString()}.xlsx`;
        writeFile(workbook, file);
    }

    function formatTime(time) {
        const newTime = new Date(time);
        const hours = newTime.getHours().toString().padStart(2, "0");
        const minutes = newTime.getMinutes().toString().padStart(2, "0");
        const seconds = newTime.getSeconds().toString().padStart(2, "0");
        const date = newTime.getDate().toString().padStart(2, "0");
        const month = (newTime.getMonth() + 1).toString().padStart(2, "0");
        const year = newTime.getFullYear().toString();
        const formattedTime = `${hours}:${minutes}:${seconds} ${date}/${month}/${year}`;
        return formattedTime;
    }

    function findName(idEmployee) {
        const employee = List.find((item) => item.IDEmployee === idEmployee);
        return employee ? `${employee.firstName} ${employee.lastName}` : "-";
    }

    function getHourWorking(timegroup) {
        const hours = new Date(timegroup.endTime) - new Date(timegroup.startTime);
        return (hours / 3600000.0).toFixed(1);
    }


    useEffect(() => {
        async function loadData() {
            const Employees = await EmployeeServices.getAllEmployees();
            const Timekeep = await ScheduleServices.getAllTimeKeep();
            setList(Employees);
            setTimeKeeping(Timekeep);
        }
        loadData();
    }, []);

    return (
        <>
            <div className="bg-base-300 h-16 flex py-10 pb-14">
                <div className="form-control self-center flex-end mx-10 ">
                    <div>Từ</div>
                    <div className="input-group">
                        <input
                            type="date"
                            id="fromDate"
                            onChange={() => {
                                selectTime();
                            }}
                            className="input  w-96 placeholder:text-base-content "
                        />
                    </div>
                </div>
                <div className="form-control self-center flex-end ">
                    Đến
                    <div className="input-group">
                        <input
                            type="date"
                            id="toDate"
                            onChange={() => {
                                selectTime();
                            }}
                            className="input w-96 placeholder:text-base-content "
                        />
                    </div>
                </div>
                <div className="form-control self-center flex-end mx-14">
                    <br />
                    <button
                        className="btn"
                        onClick={() => {
                            selectTime(new Date());
                        }}
                    >
                        Tháng
                    </button>
                </div>
                <div className="form-control self-center flex-end mx-14">
                    <br />
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            exportExcel();
                        }}
                    >
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

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Ngày</th>
                            <th>Mã NV</th>
                            <th>Họ và tên</th>
                            <th>Giờ vào</th>
                            <th>Giờ ra</th>
                            <th>Tổng giờ công</th>
                            <th colSpan={3}>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timekeeping
                            ? filter.map((item, i) => (
                                  <tr key={i}>
                                      <th>{item.date}</th>
                                      <th>{item.IDEmployee}</th>
                                      <td>{List ? findName(item.IDEmployee) : ""}</td>
                                      <td>{formatTime(item.startTime)}</td>
                                      <td>
                                          {formatTime(item.startTime) !== formatTime(item.endTime)
                                              ? formatTime(item.endTime)
                                              : "----"}
                                      </td>
                                      <td>{getHourWorking(item)}</td>
                                      <td>
                                          {getHourWorking(item) >= 6
                                              ? `Tăng ca ${getHourWorking(item) - 6} giờ`
                                              : "Thiếu giờ"}
                                      </td>
                                      <td>{item.startTime === item.endTime ? "Chưa bấm ra" : ""}</td>
                                  </tr>
                              ))
                            : ""}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TimeKeeping;
