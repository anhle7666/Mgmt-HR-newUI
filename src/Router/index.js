import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Homepage = lazy(() => import("../Components/Main/Pages/Homepage"));
const EmployeesList = lazy(() => import("../Components/Main/Pages/Employees/EmployeeList/EmployeesList"));
const NewEmployee = lazy(() => import("../Components/Main/Pages/Employees/AddNewEmployee/AddNewEmployee"));
const Training = lazy(() => import("../Components/Main/Pages/Employees/Trainning/Training"));
const CreateSchedule = lazy(() => import("../Components/Main/Pages/ScheduleWorkingBoard/CreateSchedule"));
const TimeKeeping = lazy(() => import("../Components/Main/Pages/ScheduleWorkingBoard/TimeKeeping"));
const ScheduleBoard = lazy(() => import("../Components/Main/Pages/ScheduleWorkingBoard/ScheduleBoard"));
const Salary = lazy(() => import("../Components/Main/Pages/Salary/Salary"));
const Insurance = lazy(() => import("../Components/Main/Pages/Insurance/Insurance"));
const Leave = lazy(() => import("../Components/Main/Pages/Leave/Leave"));
const Login = lazy(() => import("../Components/Main/Pages/Login/Login"));

const Router = () => {
    const routes = [
        {
            key: "tc",
            path: "/",
            title: "Trang chủ",
            element: <Homepage />,
        },

        {
            key: "dsns",
            path: "/danh-sach-nhan-su",
            title: "Trang chủ",
            element: <EmployeesList />,
        },
        {
            key: "tns",
            path: "/them-nhan-su",
            title: "Trang chủ",
            element: <NewEmployee />,
        },
        {
            key: "dt",
            path: "/dao-tao",
            title: "Trang chủ",
            element: <Training />,
        },
        {
            key: "llv",
            path: "/lich-lam-viec",
            title: "Trang chủ",
            element: <ScheduleBoard />,
        },
        {
            key: "cc",
            path: "/cham-cong",
            title: "Trang chủ",
            element: <TimeKeeping />,
        },
        {
            key: "tll",
            path: "/tao-lich-lam",
            title: "Trang chủ",
            element: <CreateSchedule />,
        },
        {
            key: "bh",
            path: "/bao-hiem",
            title: "Trang chủ",
            element: <Insurance />,
        },
        {
            key: "luong",
            path: "/luong",
            title: "Trang chủ",
            element: <Salary />,
        },
        {
            key: "np",
            path: "/nghi-phep",
            title: "Trang chủ",
            element: <Leave />,
        },
        {
            key: "dn",
            path: "/dang-nhap",
            title: "Trang chủ",
            element: <Login />,
        },
    ];

    return (
        <Suspense
            fallback={
                <div className="container-loader">
                    <span className="loader"></span>
                </div>
            }
        >
            <Routes>
                {routes.map((route) => (
                    <Route key={route.key} path={route.path} navigator={route.title} element={route.element} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default Router;
