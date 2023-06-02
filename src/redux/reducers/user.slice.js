import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const user = Cookie.get("userInfo") ? JSON.parse(Cookie.get("userInfo")) : {};

const userLoginSlice = createSlice({
	name: "login user",
	initialState: {
		userInfo: user,
		loading: false,
		error: ""
	},
	reducers: {
		loginRequest: (state) => {
			state.loading = true;
		},
		loginSuccess: (state, { payload }) => {
			state.userInfo = payload;
			state.loading = false;
		},

		logOut: (state) => {
			state.userInfo = {};
			state.loading = false;
			state.error = "";
		},

		loginFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		}
	}
});

export const { loginRequest, loginSuccess, logOut, loginFailed } =
	userLoginSlice.actions;
export const userLoginReducer = userLoginSlice.reducer;

const userRegisterSlice = createSlice({
	name: "user register",
	initialState: {
		userInfo: {},
		loading: false,
		error: ""
	},
	reducers: {
		registerRequest: (state) => {
			state.loading = true;
		},
		registerSuccess: (state, { payload }) => {
			state.userInfo = payload;
			state.loading = false;
		},

		registerFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		}
	}
});

export const { registerRequest, registerSuccess, registerFailed } =
	userRegisterSlice.actions;
export const userRegisterReducer = userRegisterSlice.reducer;

const userByIdSlice = createSlice({
	name: "get user by id",
	initialState: {
		user: {},
		loading: false,
		error: ""
	},
	reducers: {
		userByIdRequest: (state) => {
			state.loading = true;
		},
		userByIdSuccess: (state, { payload }) => {
			state.user = payload;
			state.loading = false;
		},

		userByIdFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		}
	}
});

export const { userByIdFailed, userByIdRequest, userByIdSuccess } =
	userByIdSlice.actions;
export const userByIdReducer = userByIdSlice.reducer;

const getAllUserSlice = createSlice({
	name: "get all user",
	initialState: {
		users: [],
		loading: false,
		error: ""
	},
	reducers: {
		getAllUserRequest: (state) => {
			state.loading = true;
		},
		getAllUserSuccess: (state, { payload }) => {
			state.users = payload;
			state.loading = false;
		},
		getAllUserFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		}
	}
});

export const { getAllUserFailed, getAllUserRequest, getAllUserSuccess } =
	getAllUserSlice.actions;
export const getAllUserReducer = getAllUserSlice.reducer;

const deleteUserSlice = createSlice({
	name: "delete user by id",
	initialState: {
		user: {},
		loading: false,
		error: ""
	},
	reducers: {
		deleteUserRequest: (state) => {
			state.loading = true;
		},
		deleteUserSuccess: (state, { payload }) => {
			state.user = payload;
			state.loading = false;
		},
		deleteUserFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		}
	}
});

export const { deleteUserFailed, deleteUserRequest, deleteUserSuccess } =
	deleteUserSlice.actions;
export const deleteUserReducer = deleteUserSlice.reducer;

const updateUserSlice = createSlice({
	name: "update user by id",
	initialState: {
		user: {},
		loading: false,
		error: ""
	},
	reducers: {
		updateUserRequest: (state) => {
			state.loading = true;
		},
		updateUserSuccess: (state, { payload }) => {
			state.user = payload;
			state.loading = false;
		},
		updateUserFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		},
		resetUpdateUser: (state) => {
			state.loading = false;
			state.error = "";
			state.user = {};
		}
	}
});

export const {
	updateUserFailed,
	updateUserRequest,
	updateUserSuccess,
	resetUpdateUser
} = updateUserSlice.actions;
export const updateUserReducer = updateUserSlice.reducer;

const blockUserSlice = createSlice({
	name: "block user by id",
	initialState: {
		user: {},
		loading: false,
		error: ""
	},
	reducers: {
		blockUserRequest: (state) => {
			state.loading = true;
		},
		blockUserSuccess: (state, { payload }) => {
			state.user = payload;
			state.loading = false;
		},
		blockUserFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		},
		resetBlockUser: (state) => {
			state.user = {};
			state.loading = false;
			state.error = "";
		}
	}
});

export const {
	blockUserFailed,
	blockUserRequest,
	blockUserSuccess,
	resetBlockUser
} = blockUserSlice.actions;
export const blockUserReducer = blockUserSlice.reducer;

const unBlockUserSlice = createSlice({
	name: "unblock user by id",
	initialState: {
		user: {},
		loading: false,
		error: ""
	},
	reducers: {
		unBlockUserRequest: (state) => {
			state.loading = true;
		},
		unBlockUserSuccess: (state, { payload }) => {
			state.user = payload;
			state.loading = false;
		},
		unBlockUserFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		},
		resetunBlockUser: (state) => {
			state.user = {};
			state.loading = false;
			state.error = "";
		}
	}
});

export const {
	unBlockUserFailed,
	unBlockUserRequest,
	unBlockUserSuccess,
	resetunBlockUser
} = unBlockUserSlice.actions;
export const unBlockUserReducer = unBlockUserSlice.reducer;
