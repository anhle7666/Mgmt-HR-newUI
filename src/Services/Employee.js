import axios from "axios";
import backend from "../Configs/index.js";

const API_URL = backend.API_url;

class EmployeeServices {
    static async login(account) {
        try {
            const response = await axios.post(`${API_URL}/login`, account);
            localStorage.setItem("accessToken", response.data);
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async getIP() {
        const res = await axios.get(`${API_URL}/saveIP`);
        return res.data;
    }

    static async saveIP(ip) {
        const res = await axios.post(`${API_URL}/saveIP`, { ip: ip });
        return res.data;
    }

    static async getAllEmployees() {
        try {
            const response = await axios.get(`${API_URL}/employees/list`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
    static async getAnEmployee(id) {
        try {
            const employee = await axios.get(`${API_URL}/employees/update/${id}`);
            return employee.data;
        } catch (err) {
            throw err;
        }
    }
    static async addNewEmployee(employee) {
        try {
            const response = await axios.post(`${API_URL}/employees/add-new`, employee);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static async updateEmployee(id, inforUpdate) {
        try {
            const response = await axios.put(`${API_URL}/employees/update/${id}`, inforUpdate);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async addTrainingEmloyee(id, course) {
        try {
            const response = await axios.post(`${API_URL}/employees/training/${id}`, course);
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async getListShifts() {
        try {
            const response = await axios.get(`${API_URL}/shift`);
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async addNewShift(shift) {
        try {
            const response = await axios.post(`${API_URL}/shift`, shift);
            return response.data;
        } catch (err) {
            throw err;
        }
    }
}

export default EmployeeServices;
