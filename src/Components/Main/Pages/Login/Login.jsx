import { useNavigate, Link } from "react-router-dom";

import EmployeeServices from "../../../../Services/Employee";

const Login = () => {
    const navigate = useNavigate();
    const convertFormToJson = (form) => {
        const data = new FormData(form);
        const json = Object.fromEntries(data.entries());
        return json;
    };
    const handleSumbitForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const account = convertFormToJson(form);
        if (!account.username && !account.password) {
            alert("Vui lòng nhập tài khoản và mật khẩu");
        }
        const login = await EmployeeServices.login(account);
        if (login) navigate("/");
        window.location.reload();
    };

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Đăng nhập</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSumbitForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Mã nhân viên</span>
                                </label>
                                <input type="text" name="username" placeholder="ID" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Mật khẩu</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Mật khẩu"
                                    name="password"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <Link to="/doi-mat-khau" className="label-text-alt link link-hover">
                                        Đổi mật khẩu
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
