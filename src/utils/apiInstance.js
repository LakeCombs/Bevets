import axios from "axios";

export const api = axios.create({
	baseURL: "https://bevet-api.onrender.com/api"
});
