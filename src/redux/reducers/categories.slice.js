import { createSlice } from "@reduxjs/toolkit";

const createCategorySlice = createSlice({
	name: "create category",

	initialState: {
		category: {},
		loading: false,
		error: ""
	},
	reducers: {
		createCategoryRequest: (state) => {
			state.loading = true;
		},
		createCategorySuccess: (state, { payload }) => {
			state.category = payload;
			state.loading = false;
		},
		createCategoryFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		},
		resetcreateCategory: (state) => {
			state.category = {};
			state.loading = false;
			state.error = "";
		}
	}
});

export const {
	createCategoryFailed,
	createCategoryRequest,
	createCategorySuccess,
	resetcreateCategory
} = createCategorySlice.actions;
export const createCategoryReducer = createCategorySlice.reducer;

const allCategorySlice = createSlice({
	name: "get all category",

	initialState: {
		categories: [],
		loading: false,
		error: ""
	},
	reducers: {
		allCategoryRequest: (state) => {
			state.loading = true;
		},
		allCategorySuccess: (state, { payload }) => {
			state.categories = payload;
			state.loading = false;
		},
		allCategoryFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
			state.categories = [];
		}
	}
});

export const { allCategoryFailed, allCategoryRequest, allCategorySuccess } =
	allCategorySlice.actions;
export const allCategoryReducer = allCategorySlice.reducer;

const categoryByIdSlice = createSlice({
	name: "category by id",

	initialState: {
		category: {},
		loading: false,
		error: ""
	},
	reducers: {
		categoryByIdRequest: (state) => {
			state.loading = true;
		},
		categoryByIdSuccess: (state, { payload }) => {
			state.category = payload;
			state.loading = false;
		},
		categoryByIdFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		}
	}
});

export const { categoryByIdFailed, categoryByIdRequest, categoryByIdSuccess } =
	categoryByIdSlice.actions;
export const categoryByIdReducer = categoryByIdSlice.reducer;

const updateCategorySlice = createSlice({
	name: "update category",

	initialState: {
		category: {},
		loading: false,
		error: ""
	},
	reducers: {
		updateCategoryRequest: (state) => {
			state.loading = true;
		},
		updateCategorySuccess: (state, { payload }) => {
			state.category = payload;
			state.loading = false;
		},
		updateCategoryFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		}
	}
});

export const {
	updateCategoryFailed,
	updateCategoryRequest,
	updateCategorySuccess
} = updateCategorySlice.actions;
export const updateCategoryReducer = updateCategorySlice.reducer;

const deleteCategorySlice = createSlice({
	name: "update category",

	initialState: {
		category: {},
		loading: false,
		error: ""
	},
	reducers: {
		deleteCategoryRequest: (state) => {
			state.loading = true;
		},
		deleteCategorySuccess: (state, { payload }) => {
			state.category = payload;
			state.loading = false;
		},
		deleteCategoryFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		}
	}
});

export const {
	deleteCategoryFailed,
	deleteCategoryRequest,
	deleteCategorySuccess
} = deleteCategorySlice.actions;
export const deleteCategoryReducer = deleteCategorySlice.reducer;
