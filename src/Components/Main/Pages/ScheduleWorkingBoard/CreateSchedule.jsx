import WvCalendar from "../../Week-view Calendar/Weekview-Calendar";
const CreateSchedule = () => {
    return (
        <>
            <div className="grid grid-cols-8 min-h-screen">
                <div className="md:col-span-3 lg:col-span-2 max-w-fit">
                    <WvCalendar />
                </div>
                <div className="lg:col-span-6 md:col-span-5 bg-base-200">
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th>Mã NV</th>
                                    <th>Họ và tên</th>
                                    <th>Vị trí</th>
                                    <th>Ca làm</th>
                                    <th>Thời gian</th>
                                    <th>Bộ phận mong muốn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Dreamie</td>
                                    <td>
                                        <select className="select  w-fit max-w-xs">
                                            <option value="">6H_8:00</option>
                                            <option value="">6H_8:30</option>
                                            <option value="">6H_9:00</option>
                                            <option value="">6H_9:30</option>
                                        </select>
                                    </td>
                                    <td>8.00-21.00</td>
                                    <td>Sales</td>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Dreamie</td>
                                    <td>
                                        <select className="select  w-fit max-w-xs">
                                            <option value="">6H_8:00</option>
                                            <option value="">6H_8:30</option>
                                            <option value="">6H_9:00</option>
                                            <option value="">6H_9:30</option>
                                        </select>
                                    </td>
                                    <td>8.00-21.00</td>
                                    <td>Sales</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Mã NV</th>
                                    <th>Họ và tên</th>
                                    <th>Vị trí</th>
                                    <th>Ca làm</th>
                                    <th>Thời gian</th>
                                    <th>Bộ phận mong muốn</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateSchedule;
