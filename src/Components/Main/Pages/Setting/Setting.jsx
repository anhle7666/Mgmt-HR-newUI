import { useState, useEffect } from "react";
const Setting = () => {
    const [edit, isEdit] = useState(false);
    const [ipAddress, setIpAddress] = useState("");
    useEffect(() => {
        fetch("https://api.ipify.org/?format=json")
            .then((response) => response.json())
            .then((data) => {
                setIpAddress(data.ip);
            });
    }, []);
    const handleChangeIP = (event) => {
        setIpAddress(event.target.value);
    };
    const setThisPC = () => {
        fetch("https://api.ipify.org/?format=json")
            .then((response) => response.json())
            .then((data) => {
                setIpAddress(data.ip);
            });
    };

    return (
        <>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Địa chỉ IP</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            {edit ? (
                                <td>
                                    <input
                                        type="text"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        placeholder={ipAddress}
                                        onChange={handleChangeIP}
                                        value={ipAddress}
                                    />
                                </td>
                            ) : (
                                <td>{ipAddress}</td>
                            )}
                            <td>
                                {edit ? (
                                    <button className="btn btn-success btn-xs" onClick={() => isEdit(false)}>
                                        Xong
                                    </button>
                                ) : (
                                    <button className="btn btn-success btn-xs" onClick={() => isEdit(true)}>
                                        Sửa IP
                                    </button>
                                )}
                            </td>
                            <td>
                                <button className="btn btn-success btn-xs" onClick={() => setThisPC()}>
                                    Lấy máy này làm máy chấm công
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </>
    );
};

export default Setting;
