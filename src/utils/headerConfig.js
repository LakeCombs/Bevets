export const headerConfig = (userInfo) => {
	if (userInfo?.token) {
		return {
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${userInfo.token}`
			}
		};
	} else {
		return {
			headers: {
				"Content-type": "application/json"
			}
		};
	}
};
