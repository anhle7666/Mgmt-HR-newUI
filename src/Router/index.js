import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Loadding = lazy(() => import("../Components/Main/Pages/Loadding"));
const Homepage = lazy(() => import("../Components/Main/Pages/Homepage"));
const EmployeesList = lazy(() => import("../Components/Main/Pages/Employees/EmployeeList/EmployeesList"));
const NewEmployee = lazy(() => import("../Components/Main/Pages/Employees/AddNewEmployee/AddNewEmployee"));
const EditEmployee = lazy(() => import("../Components/Main/Pages/Employees/EditEmployee/EditEmployee"));
const Training = lazy(() => import("../Components/Main/Pages/Employees/Trainning/Training"));
const AddFace = lazy(() => import("../Components/Main/Pages/Employees/AddFace"));
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
            element: <Homepage />,
        },

        {
            key: "dsns",
            path: "/danh-sach-nhan-su",
            element: <EmployeesList />,
        },
        {
            key: "tns",
            path: "/them-nhan-su",
            element: <NewEmployee />,
        },
        {
            key: "csns",
            path: "/chinh-sua-thong-tin/:id",
            element: <EditEmployee />,
        },
        {
            key: "dt",
            path: "/dao-tao",
            element: <Training />,
        },
        {
            key: "llv",
            path: "/lich-lam-viec",
            element: <ScheduleBoard />,
        },
        {
            key: "cc",
            path: "/cham-cong",
            element: <TimeKeeping />,
        },
        {
            key: "tll",
            path: "/tao-lich-lam",
            element: <CreateSchedule />,
        },
        {
            key: "bh",
            path: "/bao-hiem",
            element: <Insurance />,
        },
        {
            key: "luong",
            path: "/luong",
            element: <Salary />,
        },
        {
            key: "np",
            path: "/nghi-phep",
            element: <Leave />,
        },
        {
            key: "dn",
            path: "/dang-nhap",
            element: <Login />,
        },
        {
            key: "tkm",
            path: "/them-khuon-mat",
            element: <AddFace />,
        },
    ];

    return (
        <Suspense fallback={<Loadding />}>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.key} path={route.path} element={route.element} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default Router;
