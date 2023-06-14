import { RequestError } from "../../utils/error";
import { api } from "../../utils/apiInstance";
import Cookie from "js-cookie";
import {
	blockUserFailed,
	blockUserRequest,
	blockUserSuccess,
	deleteUserFailed,
	deleteUserRequest,
	deleteUserSuccess,
	getAllUserFailed,
	getAllUserRequest,
	getAllUserSuccess,
	logOut,
	loginFailed,
	loginRequest,
	loginSuccess,
	registerFailed,
	registerRequest,
	registerSuccess,
	resetBlockUser,
	resetUpdateUser,
	resetunBlockUser,
	unBlockUserFailed,
	unBlockUserRequest,
	unBlockUserSuccess,
	updateUserFailed,
	updateUserRequest,
	updateUserSuccess,
	userByIdFailed,
	userByIdRequest,
	userByIdSuccess
} from "../reducers/user.slice";
import { headerConfig } from "../../utils/headerConfig";

export const userLoginAction =
	({ email, password }) =>
	async (dispatch, getState) => {
		try {
			dispatch(loginRequest());
			const { data } = await api.post("/users/login", { email, password });
			Cookie.set("userInfo", JSON.stringify(data));
			dispatch(loginSuccess(data));
		} catch (error) {
			dispatch(loginFailed(RequestError(error)));
		}
	};

export const userRegisterAction =
	(userDetails) => async (dispatch, getState) => {
		try {
			dispatch(registerRequest());
			const { data } = await api.post("/users/signup", { ...userDetails });
			Cookie.set("userInfo", JSON.stringify(data));
			dispatch(registerSuccess(data));
			dispatch(loginSuccess(data));
		} catch (error) {
			dispatch(registerFailed(RequestError(error)));
		}
	};

export const logoutUserAction = () => (dispatch) => {
	Cookie.remove("userInfo");
	dispatch(logOut());
};

export const getUserByIdAction = (id) => async (dispatch, getState) => {
	try {
		dispatch(userByIdRequest());
		const { data } = await api.get(`/users/${id}`);
		dispatch(userByIdSuccess(data));
	} catch (error) {
		dispatch(userByIdFailed(RequestError(error)));
	}
};

export const getAllUserAction = () => async (dispatch, getState) => {
	try {
		dispatch(getAllUserRequest());
		const { data } = await api.get("/users");
		dispatch(getAllUserSuccess(data));
	} catch (error) {
		dispatch(getAllUserFailed(RequestError(error)));
	}
};

export const deleteUserAction = (id) => async (dispatch, getState) => {
	const {
		userLogin: { userInfo }
	} = getState();
	try {
		dispatch(deleteUserRequest());
		const { data } = await api.delete(`/users/${id}`, headerConfig(userInfo));
		dispatch(deleteUserSuccess(data));
	} catch (error) {
		dispatch(deleteUserFailed(RequestError(error)));
	}
};

export const updateUserAction = (id, update) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();

		dispatch(updateUserRequest());
		const { data } = await api.put(
			`/users/${id}`,
			{ ...update },
			headerConfig(userInfo)
		);

		Cookie.set("userInfo", JSON.stringify(data));
		dispatch(loginSuccess(data));
		dispatch(updateUserSuccess(data));
	} catch (error) {
		dispatch(updateUserFailed(RequestError(error)));
	}
};

export const resetUpdateUserAction = () => (dispatch) => {
	dispatch(resetUpdateUser());
};

export const blockUpdateUserAction = (id) => async (dispatch, getState) => {
	const {
		userLogin: { userInfo }
	} = getState();
	try {
		dispatch(blockUserRequest());
		const { data } = await api.post(
			`/users/blockUser/${id}`,
			{},
			headerConfig(userInfo)
		);
		dispatch(blockUserSuccess(data));
	} catch (error) {
		dispatch(blockUserFailed(RequestError(error)));
	}
};

export const resetBlockUserAction = () => (dispatch) => {
	dispatch(resetBlockUser());
};

export const unblockUpdateUserAction = (id) => async (dispatch, getState) => {
	const {
		userLogin: { userInfo }
	} = getState();
	try {
		dispatch(unBlockUserRequest());
		const { data } = await api.post(
			`/users/unBlockUser/${id}`,
			{},
			headerConfig(userInfo)
		);
		dispatch(unBlockUserSuccess(data));
	} catch (error) {
		dispatch(unBlockUserFailed(RequestError(error)));
	}
};

export const resetunBlockUserAction = () => (dispatch) => {
	dispatch(resetunBlockUser());
};
