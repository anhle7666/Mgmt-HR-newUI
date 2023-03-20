const Leave = () => {
    return (
        <>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Họ và tên</th>
                            <th>Vị trí</th>
                            <th>Thời gian nghỉ</th>
                            <th>Tổng thời gian nghỉ (h)</th>
                            <th>Loại phép</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">PT_02021</div>
                                    </div>
                                </div>
                            </td>
                            <td>Dreamie</td>
                            <td>
                                <span className="font-bold">10/03/2023 - 13/03/2023</span>
                                <br />
                                <span className="badge badge-ghost badge-sm">Bận việc gia đình</span>
                            </td>
                            <td>16</td>
                            <td>Có lương</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">chỉnh sửa</button>
                            </th>
                        </tr>
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                                <span className="font-bold">16</span>
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default Leave;
