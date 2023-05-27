import axios from "axios";

export const api = axios.create({
	baseURL: "https://bevetsapi.onrender.com/api"
});
