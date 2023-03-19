const TimeKeeping = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Mã NV</th>
                            <th>Họ và tên</th>
                            <th>Vị trí</th>
                            <th>Ca làm</th>
                            <th>Giờ vào</th>
                            <th>Giờ ra</th>
                            <th>Tổng giờ công</th>
                            <th>30%</th>
                            <th>60%</th>
                            <th>90%</th>
                            <th>200%</th>
                            <th>300%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Lê Phúc Anh</td>
                            <td>Part-time</td>
                            <td>6H_8:30</td>
                            <td>07:03:00 19/03/2023</td>
                            <td>17:03:00 19/03/2023</td>
                            <td>10</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>
                                <input type="checkbox" className="checkbox bg-base-300" />
                            </td>
                            <td>
                                <input type="checkbox" className="checkbox bg-base-300" />
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Nguyễn Kiều Nguyệt Giang</td>
                            <td>Part-time</td>
                            <td>6H_8:30</td>
                            <td>07:03:00 19/03/2023</td>
                            <td>17:03:00 19/03/2023</td>
                            <td>10</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>
                                <input type="checkbox" className="checkbox bg-base-300" />
                            </td>
                            <td>
                                <input type="checkbox" className="checkbox bg-base-300" />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>20</th>
                            <th>4</th>
                            <th>0</th>
                            <th>0</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default TimeKeeping;
