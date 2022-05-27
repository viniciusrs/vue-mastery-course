import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000",
});

export default {
    async getEvents(perPage = 5, page = 1) {
        const { data, headers } = await http.get(`/events?_limit=${perPage}&_page=${page}`);

        return {
            data,
            count: headers["x-total-count"]
        };
    },
    async getEvent(id) {
        const { data } = await http.get(`/events/${id}`);
        return data;
    },
    async postEvent(event) {
        const { data } = await http.post(`/events`, event);
        return data;
    }
}