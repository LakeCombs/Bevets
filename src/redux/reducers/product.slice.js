import { createSlice } from "@reduxjs/toolkit";

const createProductSlice = createSlice({
	name: "create product",
	initialState: {
		product: {},
		loading: false,
		error: ""
	},
	reducers: {
		createProductRequest: (state) => {
			state.loading = true;
		},
		createProductSuccess: (state, { payload }) => {
			state.loading = false;
			state.product = payload;
			state.error = "";
		},
		createProductFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		resetCreateProduct: (state) => {
			state.loading = false;
			state.error = "";
			state.product = {};
		}
	}
});

export const {
	createProductRequest,
	createProductSuccess,
	createProductFailed,
	resetCreateProduct
} = createProductSlice.actions;
export const createProductReducer = createProductSlice.reducer;

const getProductByIdSlice = createSlice({
	name: "get product by id",
	initialState: {
		product: {},
		loading: false,
		error: ""
	},
	reducers: {
		getProductByIdRequest: (state) => {
			state.loading = true;
		},
		getProductByIdSuccess: (state, { payload }) => {
			state.loading = false;
			state.product = payload;
			state.error = "";
		},
		getProductByIdFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		}
	}
});

export const {
	getProductByIdFailed,
	getProductByIdRequest,
	getProductByIdSuccess
} = getProductByIdSlice.actions;
export const productByIdReducer = getProductByIdSlice.reducer;

const getAllProductSlice = createSlice({
	name: "get all product",
	initialState: {
		products: [],
		loading: false,
		error: ""
	},
	reducers: {
		getAllProductRequest: (state) => {
			state.loading = true;
		},
		getAllProductSuccess: (state, { payload }) => {
			state.loading = false;
			state.products = payload;
			state.error = "";
		},
		getAllProductFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		}
	}
});

export const {
	getAllProductRequest,
	getAllProductSuccess,
	getAllProductFailed
} = getAllProductSlice.actions;
export const getAllProductReducer = getAllProductSlice.reducer;

const updateProductSlice = createSlice({
	name: "update product",
	initialState: {
		product: {},
		loading: false,
		error: ""
	},
	reducers: {
		updateProductRequest: (state) => {
			state.loading = true;
		},
		updateProductSuccess: (state, { payload }) => {
			state.loading = false;
			state.product = payload;
			state.error = "";
		},
		updateProductFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		resetUpdateProduct: (state) => {
			state.loading = false;
			state.product = {};
			state.error = "";
		}
	}
});

export const {
	resetUpdateProduct,
	updateProductRequest,
	updateProductSuccess,
	updateProductFailed
} = updateProductSlice.actions;
export const updateProductReducer = updateProductSlice.reducer;

const deleteProductSlice = createSlice({
	name: "delete product",
	initialState: {
		product: {},
		loading: false,
		error: ""
	},
	reducers: {
		deleteProductRequest: (state) => {
			state.loading = true;
		},
		deleteProductSuccess: (state, { payload }) => {
			state.loading = false;
			state.product = payload;
			state.error = "";
		},
		deleteProductFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		resetDeleteProduct: (state) => {
			state.loading = false;
			state.product = {};
			state.error = "";
		}
	}
});

export const {
	deleteProductRequest,
	deleteProductSuccess,
	deleteProductFailed,
	resetDeleteProduct
} = deleteProductSlice.actions;
export const deleteProductReducer = deleteProductSlice.reducer;
