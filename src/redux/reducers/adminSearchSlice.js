import { createSlice } from "@reduxjs/toolkit";

const adminSearchSlice = createSlice({
	name: "admin search",
	initialState: {
		products: [],
		users: [],
		messages: [],
		orders: [],
		loading: false,
		error: ""
	},
	reducers: {
		adminSearchRequest: (state) => {
			state.loading = true;
			state.error = "";
			state.products = [];
			state.users = [];
			state.messages = [];
			state.orders = [];
		},
		adminSearchSuccess: (state, { payload }) => {
			state.loading = false;
			state.products = payload?.products;
			state.users = payload?.users;
			state.messages = payload?.messages;
			state.orders = payload?.orders;
			state.error = "";
		},
		adminSearchFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
			state.products = [];
			state.users = [];
			state.messages = [];
			state.orders = [];
		},
		resetadminSearch: (state) => {
			state.loading = false;
			state.products = [];
			state.users = [];
			state.messages = [];
			state.orders = [];
			state.error = "";
		}
	}
});

export const {
	adminSearchRequest,
	adminSearchSuccess,
	adminSearchFailed,
	resetadminSearch
} = adminSearchSlice.actions;
export const adminSearchReducer = adminSearchSlice.reducer;

const summarySlice = createSlice({
	name: "summary ",
	initialState: {
		loading: false,
		error: "",
		summary: {}
	},
	reducers: {
		getSummaryRequest: (state) => {
			state.loading = true;
		},

		getSummarySuccess: (state, { payload }) => {
			state.loading = false;
			state.summary = payload;
		},
		getSummaryFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		}
	}
});
export const { getSummaryFailed, getSummaryRequest, getSummarySuccess } =
	summarySlice.actions;
export const summaryReducer = summarySlice.reducer;
