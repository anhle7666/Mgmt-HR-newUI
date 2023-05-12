import { useState, useEffect } from "react";
import EmployeeServices from "../../../../Services/Employee";

const Setting = () => {
    const [edit, isEdit] = useState(false);

    const [ip, setIP] = useState("");

    useEffect(() => {
        const loadData = async () => {
            const IP = await EmployeeServices.getIP();
            IP.ip ? setIP(IP.ip) : setIP("-");
        };
        loadData();
    }, []);

    const updateIP = async (ip) => {
        await EmployeeServices.saveIP(ip);
    };

    const isValidIP = (ip) => {
        const IP_PATTERN = /^(\d{1,3}\.){3}\d{1,3}$/; // pattern for IPv4 addresses
        return IP_PATTERN.test(ip);
    };

    const saveIP = () => {
        const IP = ip;
        if (isValidIP(IP)) {
            console.log(IP);
            updateIP(IP);
            isEdit(false);
        } else {
            alert("IP không hợp lệ");
        }
    };

    const setThisPC = () => {
        fetch("https://api.ipify.org/?format=json")
            .then((response) => response.json())
            .then((data) => {
                setIP(data.ip);
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
                                        onChange={(e) => {
                                            setIP(e.target.value);
                                        }}
                                        value={ip}
                                    />
                                </td>
                            ) : (
                                <td>{ip}</td>
                            )}
                            <td>
                                {edit ? (
                                    <button className="btn btn-success btn-xs" onClick={() => saveIP()}>
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
