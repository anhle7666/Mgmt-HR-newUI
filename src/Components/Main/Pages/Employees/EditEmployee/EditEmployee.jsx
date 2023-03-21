import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    const employees = [
        {
            IDEmployee: "PT_20260",
            accountNumber: "123456789",
            bank: "Vietinbank",
            city: "Cần Thơ",
            country: "Việt Nam",
            districts: "Ninh Kiều",
            emailAddress: "anhle7666@gmail.com",
            firstName: "Lê",
            gender: "Nam",
            graduationYear: "2023",
            lastName: "Phúc Anh",
            birthday: "2001-01-26",
            literacy: "Cao đẳng",
            position: "Dreamie",
            streetAddress: "4 Nguyễn Văn Linh",
            tax: "124568",
            university: "Đại học Cần Thơ",
            ward: "An Khánh",
        },
        {
            IDEmployee: "PT_20261",
            accountNumber: "123456789",
            bank: "Vietinbank",
            city: "Cần Thơ",
            country: "Việt Nam",
            districts: "Ninh Kiều",
            emailAddress: "anhle7666@gmail.com",
            firstName: "Lê",
            gender: "Nam",
            graduationYear: "2023",
            lastName: "Phúc Anh",
            birthday: "2001-01-26",
            literacy: "Cao đẳng",
            position: "Dreamie",
            streetAddress: "4 Nguyễn Văn Linh",
            tax: "124568",
            university: "Đại học Cần Thơ",
            ward: "An Khánh",
        },
        {
            IDEmployee: "PT_20262",
            accountNumber: "123456789",
            bank: "Vietinbank",
            city: "Cần Thơ",
            country: "Việt Nam",
            districts: "Ninh Kiều",
            emailAddress: "anhle7666@gmail.com",
            firstName: "Lê",
            gender: "Nam",
            graduationYear: "2023",
            lastName: "Phúc Anh",
            birthday: "2001-01-26",
            literacy: "Cao đẳng",
            position: "Dreamie",
            streetAddress: "4 Nguyễn Văn Linh",
            tax: "124568",
            university: "Đại học Cần Thơ",
            ward: "An Khánh",
        },
        {
            IDEmployee: "PT_20263",
            accountNumber: "123456789",
            bank: "Vietinbank",
            city: "Cần Thơ",
            country: "Việt Nam",
            districts: "Ninh Kiều",
            emailAddress: "anhle7666@gmail.com",
            firstName: "Lê",
            gender: "Nam",
            graduationYear: "2023",
            lastName: "Phúc Anh",
            birthday: "2001-01-26",
            literacy: "Cao đẳng",
            position: "Dreamie",
            streetAddress: "4 Nguyễn Văn Linh",
            tax: "124568",
            university: "Đại học Cần Thơ",
            ward: "An Khánh",
        },
    ];
    useEffect(() => {
        const employee = employees.find((e) => e.IDEmployee === id);
        setEmployee(employee);
    }, []);

    const handleSumbitForm = (e) => {
        e.preventDefault();
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
                                            autoComplete="gender"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        >
                                            <option> Nam</option>
                                            <option> Nữ</option>
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
                                            autoComplete="university"
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
