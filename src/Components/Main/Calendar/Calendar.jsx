import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../../assets/scss/style.scss";
import EmployeeServices from "../../../Services/Employee";
import ScheduleServices from "../../../Services/Schedule";

const localizer = momentLocalizer(moment);
const MyCalendar = () => {
    const colors = ["#F44336", "#FFC107", "#3F51B5", "#2196F3", "#673AB7", "#009688", "#4CAF50", "#FF5722", "#795548"];

    const [events, setEvents] = useState([]);
    const [start, setStart] = useState(new Date());
    const [Open, setOpen] = useState(false);

    const [schedule, setSchedule] = useState({
        IDEmployee: "",
        event: {},
    });
    const [listShifts, setListShifts] = useState([]);
    const [listEmployees, setListEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState("");
    const [selectedShift, setSelectedShift] = useState(null);

    const handleSelectSlot = (slotInfo) => {
        const { start } = slotInfo;
        setStart(start);
        setOpen(true);
    };
    const handleChooseEmployee = (e) => {
        const value = e.target.value;
        setSelectedEmployee(value);
    };
    const handleChooseShift = (e) => {
        const value = e.target.value;
        setSelectedShift(value);
    };

    const setTime = (date, time) => {
        const [hours, minutes] = time.split(":");
        const newDate = new Date(date);
        newDate.setHours(parseInt(hours, 10));
        newDate.setMinutes(parseInt(minutes, 10));
        return newDate;
    };
    const setEndTime = (date, time, endHours) => {
        const [hours, minutes] = time.split(":");
        const newDate = new Date(date);
        newDate.setHours(parseInt(hours, 10) + endHours);
        newDate.setMinutes(parseInt(minutes, 10));
        return newDate;
    };

    const getTimeStart = (IDShifts) => {
        const shift = listShifts.find((s) => s.IDShifts === IDShifts);
        console.log(shift.startTime);
        return shift.startTime;
    };

    const getFullName = (ID) => {
        const employee = listEmployees.find((e) => e.IDEmployee === ID);
        const fullName = `${employee.firstName} ${employee.lastName}`;
        return fullName;
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (selectedEmployee && selectedShift) {
            const startDateTime = setTime(start, getTimeStart(selectedShift));
            const endDateTime = setEndTime(start, getTimeStart(selectedShift), 6);
            const newEvent = {
                title: `${getFullName(selectedEmployee)} - ${selectedShift}`,
                start: startDateTime,
                end: endDateTime,
            };

            const existingEvent = events.find((e) => e.title === newEvent.title && e.start === newEvent.start);

            if (!existingEvent) console.log("Event chưa có nè");
            setSchedule({
                IDEmployee: selectedEmployee,
                event: newEvent,
            });
        }
        setOpen(false);
    };

    const handleResetForm = () => {
        setOpen(false);
    };
    const eventPropGetter = (event) => {
        const index = event.start.getHours() % colors.length;
        const color = colors[index];
        return { style: { backgroundColor: color } };
    };

    useEffect(() => {
        const loadShift = async () => {
            const list = await EmployeeServices.getListShifts();
            setListShifts(list);
        };
        const loadEmployees = async () => {
            const list = await EmployeeServices.getAllEmployees();
            setListEmployees(list);
        };
        loadShift();
        loadEmployees();

        const loadSchedule = async () => {
            const list = await ScheduleServices.getSchedule();
            let newList = [];
            list.forEach((item) => {
                item.start = new Date(item.start);
                item.end = new Date(item.end);
                newList.push(item);
            });
            setEvents(newList);
        };

        loadSchedule();
        if (schedule.IDEmployee) {
            ScheduleServices.addSchedule(schedule).then((data) => {
                loadSchedule();
            });
        }
    }, [schedule]);

    return (
        <div style={{ position: "relative" }}>
            {Open ? (
                <div className="bg-base-200 py-5 px-5">
                    <h1 className="font-bold">Thêm lịch làm ngày {moment(start).format("DD/MM/YYYY")}</h1>
                    <form onSubmit={handleSubmitForm} onReset={handleResetForm}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                                <label
                                    htmlFor="IDShifts"
                                    className="block text-sm font-medium leading-6 text-base-content"
                                >
                                    Mã Ca
                                </label>
                                <select
                                    type="text"
                                    name="IDShifts"
                                    id="IDShifts"
                                    autoComplete="IDShifts"
                                    className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                    onChange={handleChooseShift}
                                >
                                    <option value="">-</option>
                                    {listShifts.map((shift) => (
                                        <option key={shift.IDShifts} value={shift.IDShifts}>
                                            {shift.IDShifts}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                                <label
                                    htmlFor="IDShifts"
                                    className="block text-sm font-medium leading-6 text-base-content"
                                >
                                    Nhân viên
                                </label>
                                <select
                                    type="text"
                                    name="IDShifts"
                                    id="IDShifts"
                                    autoComplete="IDShifts"
                                    className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                    onChange={handleChooseEmployee}
                                >
                                    <option value="">-</option>
                                    {listEmployees.map((employee) => (
                                        <option
                                            key={employee.IDEmployee}
                                            value={`${employee.IDEmployee}`}
                                        >{`${employee.IDEmployee}_${employee.firstName} ${employee.lastName}`}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline mt-10 mx-5">
                            Lưu
                        </button>
                        <button type="reset" className="btn btn-outline btn-error">
                            Đóng
                        </button>
                    </form>
                </div>
            ) : null}
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                className="bg-base-300 min-h-screen text-base-content px-2 py-5 relative"
                selectable={true}
                eventPropGetter={eventPropGetter}
                onSelectSlot={(slotInfo) => handleSelectSlot(slotInfo)}
                onSelectEvent={(e) => alert(e.title)}
            />
        </div>
    );
};

export default MyCalendar;
