import axios from "axios";

export const api = axios.create({
	baseURL: "https://api.bevetsgh.com/api"
	// baseURL: "http://localhost:4001/api"
});
