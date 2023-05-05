// import faceIO from "@faceio/fiojs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./MenuApp/adminMenu";
const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    // let faceio = new faceIO("fioa555c");

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) setIsLogin(true);
    }, [isLogin]);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        setIsLogin(null);
    };

    return (
        <div className="navbar bg-base-100">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
                MgmtHR
            </Link>
            <AdminMenu isLogin={isLogin} />
            <div className="navbar-end">
                {isLogin ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://img.icons8.com/doodle/256/user.png" alt="avt" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/them-khuon-mat" className="justify-between">
                                    Thêm khuôn mặt
                                </Link>
                            </li>
                            <li>
                                <Link to="/cai-dat">Cài đặt</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={handleLogout}>
                                    Đăng xuất
                                </Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link to="/dang-nhap" className="btn">
                        Đăng nhập
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
