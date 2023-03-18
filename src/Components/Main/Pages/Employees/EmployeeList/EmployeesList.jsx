import Search from "./Search/Search";

const EmployeesList = () => {
    return (
        <>
            <Search />
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Favorite Color</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover cursor-pointer">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>1000000</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover cursor-pointer">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                            <td>1000000</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover cursor-pointer">
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            <td>1000000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EmployeesList;
