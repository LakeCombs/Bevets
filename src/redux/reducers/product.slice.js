import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

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

const productByCategorySlice = createSlice({
	name: "product by category",
	initialState: {
		products: [],
		loading: false,
		error: ""
	},
	reducers: {
		productByCategoryRequest: (state) => {
			state.loading = true;
			state.error = "";
		},
		productByCategorySuccess: (state, { payload }) => {
			state.loading = false;
			state.products = payload;
			state.error = "";
		},
		productByCategoryFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		}
	}
});

export const {
	productByCategoryFailed,
	productByCategoryRequest,
	productByCategorySuccess
} = productByCategorySlice.actions;
export const productByCategoryReducer = productByCategorySlice.reducer;

const cart = {
	cartItems: Cookie.get("cartItems") ? JSON.parse(Cookie.get("cartItems")) : [],
	favorite: Cookie.get("favorite") ? JSON.parse(Cookie.get("favorite")) : []
};

const cartSlice = createSlice({
	name: "cart slice",
	initialState: {
		...cart,
		loading: false,
		error: ""
	},
	reducers: {
		setCart: (state, { payload }) => {
			state.cartItems = payload.cartItems;
			state.favorite = payload.favorite;
			Cookie.set("cartItems", JSON.stringify(payload?.cartItems));
			Cookie.set("favorite", JSON.stringify(payload?.favorite));
		},

		addToCart: (state, { payload }) => {
			state.cartItems = payload;
		},

		removeFromCart: (state, { payload }) => {
			state.cartItems = payload;
		},

		reduceItemInCart: (state, { payload }) => {
			state.cartItems = payload;
		},

		addToFav: (state, { payload }) => {
			state.favorite = payload;
		}
	}
});

export const {
	addToCart,
	addToFav,
	removeFromCart,
	setCart,
	reduceItemInCart
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
