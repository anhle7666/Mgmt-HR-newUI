import axios from "axios";
import backend from "../Configs/index.js";

const API_URL = backend.API_url;

class ScheduleServices {
    static async getSchedule() {
        try {
            const events = await axios.get(`${API_URL}/schedule`);
            return events.data;
        } catch (err) {
            throw err;
        }
    }

    static async getAllSchedule() {
        try {
            const events = await axios.get(`${API_URL}/all-schedule`);
            return events.data;
        } catch (err) {
            throw err;
        }
    }
    static async addSchedule(data) {
        try {
            const result = await axios.post(`${API_URL}/schedule`, data);
            return result;
        } catch (err) {
            throw err;
        }
    }

    static async getAllTimeKeep() {
        try {
            const result = await axios.get(`${API_URL}/get-all-time`);
            return result.data;
        } catch (err) {
            throw err;
        }
    }

    static async checkIn(data) {
        try {
            const result = await axios.post(`${API_URL}/checkin`, data);
            return result;
        } catch (err) {
            throw err;
        }
    }
}
export default ScheduleServices;
