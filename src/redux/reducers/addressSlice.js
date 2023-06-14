import { createSlice } from "@reduxjs/toolkit";

const addAddressSlice = createSlice({
	name: "add address",
	initialState: {
		address: {},
		loading: false,
		error: ""
	},
	reducers: {
		addAddressRequest: (state) => {
			state.loading = true;
		},
		addAddressSuccess: (state, { payload }) => {
			state.loading = false;
			state.address = payload;
			state.error = "";
		},
		addAddressFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		resetAddAddress: (state) => {
			state.loading = false;
			state.address = {};
			state.error = "";
		}
	}
});

export const {
	addAddressRequest,
	addAddressSuccess,
	addAddressFailed,
	resetAddAddress
} = addAddressSlice.actions;
export const addAddressReducer = addAddressSlice.reducer;

const getAddressByIdSice = createSlice({
	name: "add address",
	initialState: {
		address: {},
		loading: false,
		error: ""
	},
	reducers: {
		addressByIdRequest: (state) => {
			state.loading = true;
		},
		addressByIdSuccess: (state, { payload }) => {
			state.loading = false;
			state.address = payload;
			state.error = "";
		},
		addressByIdFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		}
	}
});

export const { addressByIdRequest, addressByIdSuccess, addressByIdFailed } =
	getAddressByIdSice.actions;
export const addressByIdReducer = getAddressByIdSice.reducer;

const removeAddressSlice = createSlice({
	name: "remove address",
	initialState: {
		address: {},
		loading: false,
		error: ""
	},

	reducers: {
		removeAddressRequest: (state) => {
			state.loading = true;
		},
		removeAddressSuccess: (state, { payload }) => {
			state.loading = false;
			state.address = payload;
			state.error = "";
		},
		removeAddressFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		}
	}
});

export const {
	removeAddressFailed,
	removeAddressRequest,
	removeAddressSuccess
} = removeAddressSlice.actions;
export const removeAddressReducer = removeAddressSlice.reducer;

const updateAddressById = createSlice({
	name: "update address",
	initialState: {
		address: {},
		loading: false,
		error: ""
	},
	reducers: {
		updateAddressRequest: (state) => {
			state.loading = true;
		},
		updateAddressSuccess: (state, { payload }) => {
			state.loading = false;
			state.address = payload;
			state.error = "";
		},
		updateAddressFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		}
	}
});

export const {
	updateAddressFailed,
	updateAddressRequest,
	updateAddressSuccess
} = updateAddressById.actions;
export const updateAddressReducer = updateAddressById.reducer;
