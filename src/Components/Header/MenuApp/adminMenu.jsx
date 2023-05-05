import { Link } from "react-router-dom";
export default function adminMenu(props) {
    const { isLogin } = props;
    if (isLogin)
        return (
            <>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="" className="justify-between">
                                    Nhân sự
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </Link>
                                <ul className="p-2 z-50 ">
                                    <li className="bg-base-100">
                                        <Link to="/danh-sach-nhan-su">Danh sách nhân sự</Link>
                                    </li>
                                    <li className="bg-base-100">
                                        <Link to="/them-nhan-su">Thêm nhân sự</Link>
                                    </li>
                                    <li className="bg-base-100">
                                        <Link to="/dao-tao">Đào tạo</Link>
                                    </li>
                                </ul>
                            </li>
                            <li tabIndex={0}>
                                <Link to="/" className="justify-between">
                                    Ca làm việc
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </Link>
                                <ul className="p-2 z-50">
                                    <li className="bg-base-100">
                                        <Link to="/lich-lam-viec">Lịch làm việc</Link>
                                    </li>
                                    <li className="bg-base-100">
                                        <Link to="/cham-cong">Chấm công</Link>
                                    </li>
                                    <li className="bg-base-100">
                                        <Link to="/tao-lich-lam">Tạo lịch làm</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/luong">Lương</Link>
                            </li>
                            {/* <li>
                                <Link to="/bao-hiem">Bảo hiểm</Link>
                            </li>
                            <li>
                                <Link to="/nghi-phep">Nghỉ phép</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="">
                                Nhân sự
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </Link>
                            <ul className="p-2 z-50">
                                <li className="bg-base-100">
                                    <Link to="/danh-sach-nhan-su">Danh sách nhân sự</Link>
                                </li>
                                <li className="bg-base-100">
                                    <Link to="/them-nhan-su">Thêm nhân sự</Link>
                                </li>
                                <li className="bg-base-100">
                                    <Link to="/dao-tao">Đào tạo</Link>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <Link to="">
                                Ca làm việc
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </Link>
                            <ul className="p-2 z-50">
                                <li className="bg-base-100">
                                    <Link to="/lich-lam-viec">Lịch làm việc</Link>
                                </li>
                                <li className="bg-base-100">
                                    <Link to="/cham-cong">Chấm công</Link>
                                </li>
                                <li className="bg-base-100">
                                    <Link to="tao-lich-lam">Tạo lịch làm</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/luong">Lương</Link>
                        </li>
                        {/* <li>
                            <Link to="/bao-hiem">Bảo hiểm</Link>
                        </li>
                        <li>
                            <Link to="/nghi-phep">Nghỉ phép</Link>
                        </li> */}
                    </ul>
                </div>
            </>
        );
}
