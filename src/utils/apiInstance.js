import axios from "axios";

export const api = axios.create({
	baseURL: "http://147.182.251.193:4001/api"
	// baseURL: "http://localhost:4001/api"
});
