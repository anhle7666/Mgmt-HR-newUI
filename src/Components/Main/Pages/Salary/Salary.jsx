const Salary = () => {
    return (
        <>
            <div className="overflow-x-auto px-5 py-5">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Mã NV</th>
                            <th>Họ và Tên</th>
                            <th>Vị trí</th>
                            <th>Lương CB (1)</th>
                            <th>Tổng giờ làm (2)</th>
                            <th>Tổng Lương (3)</th>
                            <th>Thuế (4)</th>
                            <th>Bảo hiểm (5)</th>
                            <th>Lương thanh toán (6)</th>
                            <th>Tình trạng thanh toán</th>
                            <th>Ngày thanh toán</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <th>1</th>
                            <td>Lê Phúc Anh</td>
                            <td>Dreamie</td>
                            <td>20.000</td>
                            <td>190</td>
                            <td>3.800.000</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td>3.800.000</td>
                            <td>Đã thanh toán</td>
                            <td>10/03/2023</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Nguyễn Kiều Nguyệt Giang</td>
                            <td>Dreamie</td>
                            <td>20.000</td>
                            <td>190</td>
                            <td>3.800.000</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td>3.800.000</td>
                            <td>Đã thanh toán</td>
                            <td>10/03/2023</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Nguyễn Xuân Phúc</td>
                            <td>Dreamie</td>
                            <td>20.000</td>
                            <td>190</td>
                            <td>3.800.000</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td>3.800.000</td>
                            <td>Đã thanh toán</td>
                            <td>10/03/2023</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Trần Đoàn Minh Triết</td>
                            <td>Dreamie</td>
                            <td>20.000</td>
                            <td>190</td>
                            <td>3.800.000</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td>3.800.000</td>
                            <td>Đã thanh toán</td>
                            <td>10/03/2023</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>760</th>
                            <th>15.200.000</th>
                            <th>0</th>
                            <th>0</th>
                            <th>15.200.000</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default Salary;
