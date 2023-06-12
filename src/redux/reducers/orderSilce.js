import { createSlice } from "@reduxjs/toolkit";

const OrderDetailsSlice = createSlice({
	name: "orderDetails",
	initialState: {
		user: "",
		address: "",
		total_price: "",
		items: [],
		delivery_method: "",
		payment_method: ""
	},
	reducers: {
		updateOrderDetails: (state, { payload }) => {
			state.user = payload?.user ? payload?.user : state.user;
			state.address = payload?.address ? payload?.address : state.address;
			state.total_price = payload?.total_price
				? payload?.total_price
				: state.total_price;
			state.items = payload?.items ? payload?.items : state.items;
			state.delivery_method = payload?.delivery_method
				? payload?.delivery_method
				: state.delivery_method;
			state.payment_method = payload?.payment_method
				? payload?.payment_method
				: state.payment_method;
		},
		resetUpdateOrderDetails: (state) => {
			state.user = "";
			state.delivery_method = "";
			state.address = "";
			state.items = [];
			state.total_price = "";
			state.payment_method = "";
		}
	}
});

export const { updateOrderDetails, resetUpdateOrderDetails } =
	OrderDetailsSlice.actions;
export const OrderDetailsReducer = OrderDetailsSlice.reducer;

const createOrderSlice = createSlice({
	name: "createOrder",
	initialState: {
		order: {},
		loading: false,
		error: ""
	},
	reducers: {
		createOrderSuccess: (state, { payload }) => {
			state.order = payload;
			state.loading = false;
			state.error = "";
		},
		createOrderFailure: (state, { payload }) => {
			state.order = {};
			state.loading = false;
			state.error = payload;
		},
		createOrderRequest: (state, { payload }) => {
			state.loading = true;
			state.error = "";
		}
	}
});

export const { createOrderFailure, createOrderRequest, createOrderSuccess } =
	createOrderSlice.actions;
export const createOrderReducer = createOrderSlice.reducer;

const getAllOrderSlice = createSlice({
	name: "getAllOrder",
	initialState: {
		orders: [],
		loading: false,
		error: ""
	},
	reducers: {
		getAllOrderRequest: (state) => {
			state.loading = true;
		},
		getAllOrderSuccess: (state, { payload }) => {
			state.orders = payload;
			state.error = "";
			state.loading = false;
		},
		getAllOrderFailure: (state, { payload }) => {
			state.orders = [];
			state.error = payload;
			state.loading = false;
		}
	}
});

export const { getAllOrderFailure, getAllOrderRequest, getAllOrderSuccess } =
	getAllOrderSlice.actions;
export const getAllOrderReducer = getAllOrderSlice.reducer;

const getOrderByIdSlice = createSlice({
	name: "getOrderById",
	initialState: {
		order: {},
		loading: false,
		error: ""
	},
	reducers: {
		getOrderByIdRequest: (state) => {
			state.loading = true;
			state.error = "";
		},
		getAllOrderFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
			state.order = {};
		},
		getOrderByIdSuccess: (state, { payload }) => {
			state.loading = false;
			state.error = "";
			state.order = payload;
		}
	}
});

export const { getOrderByIdFailure, getOrderByIdRequest, getOrderByIdSuccess } =
	getOrderByIdSlice.actions;
export const getOrderByIdReducer = getOrderByIdSlice.reducer;

const updateOrderSlice = createSlice({
	name: "updateOrder",
	initialState: {
		order: {},
		loading: false,
		error: ""
	},
	reducers: {
		updateOrderRequest: (state) => {
			state.loading = true;
			state.error = "";
			state.order = {};
		},
		updateOrderSuccess: (state, { payload }) => {
			state.loading = false;
			state.error = "";
			state.order = payload;
		},
		updateOrderFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
			state.order = {};
		}
	}
});

export const { updateOrderFailure, updateOrderRequest, updateOrderSuccesss } =
	updateOrderSlice.actions;
export const updateOrderReducer = updateOrderSlice.reducer;

const deleteOrderSlice = createSlice({
	name: "delete Order",
	initialState: {
		order: {},
		loading: false,
		error: ""
	},
	reducers: {
		deleteOrderRequest: (state) => {
			state.loading = true;
			state.error = "";
			state.order = {};
		},
		deleteOrderSuccess: (state, { payload }) => {
			state.loading = false;
			state.error = "";
			state.order = payload;
		},
		deleteOrderFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
			state.order = {};
		}
	}
});

export const { deleteOrderFailure, deleteOrderRequest, deleteOrderSuccess } =
	deleteOrderSlice.actions;
export const deleteOrderReducer = deleteOrderSlice.reducer;

const orderByUserSlice = createSlice({
	name: "Order by user",
	initialState: {
		orders: [],
		loading: false,
		error: ""
	},
	reducers: {
		orderByUserRequest: (state) => {
			state.loading = true;
			state.error = "";
			state.orders = [];
		},
		orderByUserSuccess: (state, { payload }) => {
			state.loading = false;
			state.error = "";
			state.orders = payload;
		},
		orderByUserFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
			state.orders = [];
		}
	}
});

export const { orderByUserRequest, orderByUserSuccess, orderByUserFailure } =
	orderByUserSlice.actions;
export const OrderByUserReducer = orderByUserSlice.reducer;
