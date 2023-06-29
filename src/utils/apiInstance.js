import axios from "axios";

export const api = axios.create({
	// baseURL: "https://api.bevetsgh.com/api"
	baseURL: process.env.REACT_APP_API
	// baseURL: "http://localhost:4001/api"
});
