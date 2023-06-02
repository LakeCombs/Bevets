import { createSlice } from "@reduxjs/toolkit";

const uploadImageSlice = createSlice({
	name: "upload image",
	initialState: {
		image: {} || [],
		loading: false,
		error: ""
	},
	reducers: {
		uploadImageRequest: (state) => {
			state.loading = true;
		},
		uploadImageSuccess: (state, { payload }) => {
			state.loading = false;
			state.image = payload;
			state.error = "";
		},
		uploadImageFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		resetUploadImage: (state) => {
			state.loading = false;
			state.error = "";
			state.image = {};
		}
	}
});

export const {
	resetUploadImage,
	uploadImageFailed,
	uploadImageRequest,
	uploadImageSuccess
} = uploadImageSlice.actions;
export const uploadImageReducer = uploadImageSlice.reducer;

const getAllImageSlice = createSlice({
	name: "get All Image",
	initialState: {
		images: [],
		loading: false,
		error: ""
	},
	reducers: {
		getAllImageRequest: (state) => {
			state.loading = true;
		},
		getAllImageSuccess: (state, { payload }) => {
			state.loading = false;
			state.images = payload;
			state.error = "";
		},
		getAllImageFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		}
	}
});

export const { getAllImageFailed, getAllImageRequest, getAllImageSuccess } =
	getAllImageSlice.actions;
export const getAllImageReducer = getAllImageSlice.reducer;

const getAllImageByIdSlice = createSlice({
	name: "image by id",
	initialState: {
		image: {},
		loading: false,
		error: ""
	},
	reducers: {
		getImageByIdRequest: (state) => {
			state.loading = true;
		},
		getImageByIdSuccess: (state, { payload }) => {
			state.loading = false;
			state.image = payload;
			state.error = "";
		},
		getImageByIdFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		}
	}
});

export const { getImageByIdFailed, getImageByIdRequest, getImageByIdSuccess } =
	getAllImageByIdSlice.actions;
export const getImageByIdReducer = getAllImageByIdSlice.reducer;

const editImageByIdSlice = createSlice({
	name: "edit image by id",
	initialState: {
		image: {},
		loading: false,
		error: ""
	},
	reducers: {
		editImageByIdRequest: (state) => {
			state.loading = true;
		},
		editImageByIdSuccess: (state, { payload }) => {
			state.loading = false;
			state.image = payload;
			state.error = "";
		},
		editImageByIdFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		}
	}
});

export const {
	editImageByIdFailed,
	editImageByIdRequest,
	editImageByIdSuccess
} = editImageByIdSlice.actions;
export const editImageByIdReducer = editImageByIdSlice.reducer;

const deleteImageByIdSlice = createSlice({
	name: "delete image by id",
	initialState: {
		image: {},
		loading: false,
		error: ""
	},
	reducers: {
		deleteImageByIdRequest: (state) => {
			state.loading = true;
		},
		deleteImageByIdSuccess: (state, { payload }) => {
			state.loading = false;
			state.image = payload;
			state.error = "";
		},
		deleteImageByIdFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		resetDeleteImage: (state) => {
			state.image = {};
			state.loading = false;
			state.error = "";
		}
	}
});

export const {
	deleteImageByIdFailed,
	deleteImageByIdRequest,
	deleteImageByIdSuccess,
	resetDeleteImage
} = deleteImageByIdSlice.actions;
export const deleteImageByIdReducer = deleteImageByIdSlice.reducer;
