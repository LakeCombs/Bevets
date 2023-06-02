import axios from "axios";

export const api = axios.create({
	// baseURL: "https://bevetsapi.onrender.com/api"
	baseURL: "http://localhost:2002/api"
});
