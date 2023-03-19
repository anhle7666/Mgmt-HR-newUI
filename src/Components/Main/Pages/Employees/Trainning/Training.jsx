const Training = () => {
    return (
        <div className="min-h-screen bg-base-300">
            {" "}
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="mt-5 md:col-span-1 md:mt-0 py-5 bg-base-300">
                        <div className="overflow-hidden shadow sm:rounded-md ">
                            <div className="bg-base-300 px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Mã nhân viên
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Tên nhân viên
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Mã khóa đào tạo
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Tên khóa đào tạo
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Ngày bắt đầu
                                        </label>
                                        <input
                                            type="date"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Thời gian đào tạo
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium leading-6 text-base-content"
                                        >
                                            Nội dung đào tạo
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="bg-base-300 mt-2 block w-full rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-base-content sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-base-300 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md bg-base-content py-2 px-3 text-sm font-semibold text-base-300 shadow-sm hover:text-base-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Lưu thông tin
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;
