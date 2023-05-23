export const RequestError = (error) => {
	return error?.response ? error?.response?.data : error?.message;
};
