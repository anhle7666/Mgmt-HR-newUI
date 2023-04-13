import faceIO from "@faceio/fiojs";
import ScheduleServices from "../../../Services/Schedule";
// import { useEffect } from "react";

const Homepage = () => {
    const faceio = new faceIO("fioaf245");
    const authenticateUser = async () => {
        // let userData = await faceio.authenticate({});
        // const IDEmployee = userData.payload.IDEmployee;
        const timekeep = {};
        const Time = new Date();
        const IDEmployee = "PT00002";
        //lấy thời gian hiện tại
        timekeep.IDEmployee = IDEmployee;
        timekeep.time = Time;
        try {
            await ScheduleServices.checkIn(timekeep);
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
                        <h1 className="text-5xl font-bold">Đã đến văn phòng!</h1>
                        <p className="py-6">
                            Đây là một môi trường dịch vụ.
                            <br />
                            Hãy luôn niềm nở với khách hàng, những người mang đến công việc cho chúng ta
                        </p>
                        <button className="btn btn-primary" onClick={authenticateUser}>
                            Chấm vào
                        </button>
                        {/* <button className="btn btn-primary mx-10" onClick={authenticateUser}>
                            Chấm ra
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
