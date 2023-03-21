import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeServices from "../../../../../Services/Employee";

const EditEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    useEffect(() => {
        // const employee = employees.find((e) => e._id === id);
        const loadData = async () => {
            const employee = await EmployeeServices.getAnEmployee(id);
            setEmployee(employee);
        };
        loadData();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee({
            ...employee,
            [name]: value,
        });
    };

    const handleSumbitForm = async (e) => {
        e.preventDefault();
        await EmployeeServices.updateEmployee(id, employee);
        
    };

    if (!employee) return <h1>Loading</h1>;

    return (
        <div className="min-h-screen bg-base-200">
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="mt-5 md:col-span-1 md:mt-0 py-5 bg-base-300">
                        <form action="#" id="employeeForm" className="overflow-hidden shadow sm:rounded-md ">
                            <div className="bg-base-300 px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="firstName"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Họ
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={employee.firstName}
                                            onChange={handleChange}
                                            autoComplete="first-name"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="lastName"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Tên đệm và Tên
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={employee.lastName}
                                            onChange={handleChange}
                                            autoComplete="family-name"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div
                                        className="col-span-6 sm:col-span-2 lg:col-span-1"
                                        data-te-datepicker-init
                                        data-te-input-wrapper-init
                                    >
                                        <label
                                            htmlFor="birthday"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Ngày sinh
                                        </label>
                                        <input
                                            type="date"
                                            name="birthday"
                                            id="birthday"
                                            value={employee.birthday}
                                            onChange={handleChange}
                                            autoComplete="birthday"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2 lg:col-span-1">
                                        <label
                                            htmlFor="university"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Giới tính
                                        </label>
                                        <select
                                            type="text"
                                            name="gender"
                                            id="gender"
                                            value={employee.gender}
                                            onChange={handleChange}
                                            autoComplete="gender"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        >
                                            <option> Nam</option>
                                            <option> Nữ</option>
                                        </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-2 lg:col-span-1">
                                        <label
                                            htmlFor="cmnd"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            CMND /CCCD
                                        </label>
                                        <input
                                            type="text"
                                            name="cmnd"
                                            id="cmnd"
                                            autoComplete="cmnd"
                                            value={employee.cmnd}
                                            onChange={handleChange}
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2 lg:col-span-1">
                                        <label
                                            htmlFor="literacy"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Trình độ học vấn
                                        </label>
                                        <select
                                            type="text"
                                            name="literacy"
                                            id="literacy"
                                            value={employee.literacy}
                                            onChange={handleChange}
                                            autoComplete="literacy"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        >
                                            <option>Cao đẳng</option>
                                            <option>Đại học</option>
                                            <option>Thạc sĩ</option>
                                        </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-2 lg:col-span-1">
                                        <label
                                            htmlFor="university"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Trường
                                        </label>
                                        <input
                                            type="text"
                                            name="university"
                                            id="university"
                                            value={employee.university}
                                            onChange={handleChange}
                                            autoComplete="university"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2 lg:col-span-1">
                                        <label
                                            htmlFor="graduationYear"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Năm tốt nghiệp
                                        </label>
                                        <input
                                            type="number"
                                            name="graduationYear"
                                            id="graduationYear"
                                            value={employee.graduationYear}
                                            onChange={handleChange}
                                            autoComplete="graduationYear"
                                            min="1990"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label
                                            htmlFor="tax"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Mã số thuế
                                        </label>
                                        <input
                                            type="text"
                                            name="tax"
                                            id="tax"
                                            value={employee.tax}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label
                                            htmlFor="IDEmployee"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Mã nhân viên
                                        </label>
                                        <input
                                            type="text"
                                            name="IDEmployee"
                                            id="IDEmployee"
                                            value={employee.IDEmployee}
                                            readOnly
                                            autoComplete="address-level1"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label
                                            htmlFor="position"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Vị trí làm việc
                                        </label>
                                        <select
                                            type="text"
                                            name="position"
                                            id="position"
                                            value={employee.position}
                                            onChange={handleChange}
                                            autoComplete="position"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        >
                                            <option>Dreamie</option>
                                            <option>Supervisor</option>
                                        </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-4">
                                        <label
                                            htmlFor="emailAddress"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="emailAddress"
                                            id="emailAddress"
                                            value={employee.emailAddress}
                                            onChange={handleChange}
                                            autoComplete="email"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Quốc Tịch
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={employee.country}
                                            onChange={handleChange}
                                            autoComplete="country-name"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        >
                                            <option>Việt Nam</option>
                                            <option>Hàn Quốc</option>
                                            <option>Khác</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label
                                            htmlFor="streetAddress"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Địa chỉ
                                        </label>
                                        <input
                                            type="text"
                                            name="streetAddress"
                                            id="streetAddress"
                                            value={employee.streetAddress}
                                            onChange={handleChange}
                                            autoComplete="streetAddress"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label
                                            htmlFor="city"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Tỉnh /Thành phố
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            value={employee.city}
                                            onChange={handleChange}
                                            autoComplete="address-level2"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label
                                            htmlFor="districts"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Quận /Huyện
                                        </label>
                                        <input
                                            type="text"
                                            name="districts"
                                            id="districts"
                                            value={employee.districts}
                                            onChange={handleChange}
                                            autoComplete="address-level1"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label
                                            htmlFor="ward"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Phường /Xã
                                        </label>
                                        <input
                                            type="text"
                                            name="ward"
                                            id="ward"
                                            value={employee.ward}
                                            onChange={handleChange}
                                            autoComplete="address-level2"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label
                                            htmlFor="bank"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Tên ngân hàng
                                        </label>
                                        <input
                                            type="text"
                                            name="bank"
                                            id="bank"
                                            value={employee.bank}
                                            onChange={handleChange}
                                            autoComplete="bank"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-4">
                                        <label
                                            htmlFor="accountNumber"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Số tài khoản
                                        </label>
                                        <input
                                            type="text"
                                            name="accountNumber"
                                            id="accountNumber"
                                            value={employee.accountNumber}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-base-300 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md bg-base-content py-2 px-3 text-sm font-semibold text-base-300 shadow-sm hover:text-base-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    onClick={handleSumbitForm}
                                >
                                    Lưu thông tin
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditEmployee;
