import axios from "axios";

export const api = axios.create({
	baseURL: "https://147.182.251.193/api"
	// baseURL: "http://localhost:4001/api"
});
