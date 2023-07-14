import axios from "axios";

export const api = axios.create({
	baseURL: "https://apitest.bevetsgh.com/api"
});
