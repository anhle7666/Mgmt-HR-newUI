import faceIO from "@faceio/fiojs";
import { useEffect, useState } from "react";
import ScheduleServices from "../../../Services/Schedule";

const Homepage = () => {
    const faceio = new faceIO("fioaf245");
    const [noti, setNoti] = useState("");
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const loadSchedule = async () => {
            try {
                const schedule = await ScheduleServices.getAllSchedule();
                setSchedule(schedule);
            } catch (err) {
                throw err;
            }
        };
        loadSchedule();
    }, []);
    const checkTime = (time, event) => {
        const thirtyMinutesInMilliseconds = 1800000;
        const fiveMinutesInMilliseconds = 300000;
        const tenMinutesInMilliseconds = 600000;
        time = new Date(time);
        const hasTime = event.find((e) => {
            const start = new Date(e.start);
            const end = new Date(e.end);
            const timeBeforeStart = start - time;
            if (timeBeforeStart < -thirtyMinutesInMilliseconds || timeBeforeStart > fiveMinutesInMilliseconds) {
                return false;
            }

            const timeBeforeEnd = end - time;
            if (timeBeforeEnd < -tenMinutesInMilliseconds) {
                return false;
            }

            return true;
        });

        if (!hasTime) {
            return null;
        }

        return hasTime;
    };

    const formatTime = (timeString) => {
        const options = {
            hour12: false,
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        };
        const date = new Date(timeString);
        return date.toLocaleDateString("en-US", options);
    };

    const findScheduleOfID = (IDEmployee) => {
        const event = schedule.find((s) => s.IDEmployee === IDEmployee);
        return event ? event.events : [];
    };

    const authenticateUser = async () => {
        // const IDEmployee = "PT00013";
        let userData = await faceio.authenticate({});
        const IDEmployee = userData.payload.IDEmployee;
        console.log(IDEmployee);
        const timekeep = {};
        const Time = new Date();
        timekeep.IDEmployee = IDEmployee;
        timekeep.time = Time.toISOString();
        try {
            const event = findScheduleOfID(IDEmployee);
            if (checkTime(timekeep.time, event)) {
                const name = event[0].title.split("-")[0];
                const result = await ScheduleServices.checkIn(timekeep);
                if (result.status === 200) {
                    setNoti(`Xin chào ${name}, giờ chấm công là: ${formatTime(timekeep.time)}.`);
                }
            } else {
                setNoti(`Ngoài khung giờ chấm công rồi nhé!`);
            }
        } catch (err) {
            throw err;
        }
    };
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-waving-illustration_52683-79273.jpg?w=1380&t=st=1679467889~exp=1679468489~hmac=1622872de484770f7095e0975550cc144194f091380cfd0d59b924dad7748aa0"
                        className="md:max-w-lg lg:max-w-lg sm:max-w-sm  rounded-lg shadow-2xl"
                        alt="img"
                    />

                    <div>
                        <h1 className="text-5xl font-bold">Lotte Cinema Ninh Kiều</h1>
                        {noti ? (
                            <h1 className="py-6">{noti}</h1>
                        ) : (
                            <p className="py-6">
                                Đây là một môi trường dịch vụ.
                                <br />
                                Hãy luôn niềm nở với khách hàng, những người mang đến công việc cho chúng ta
                            </p>
                        )}
                        <button className="btn btn-primary" onClick={() => authenticateUser()}>
                            Chấm công
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
