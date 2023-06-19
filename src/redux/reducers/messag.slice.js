import { createSlice } from "@reduxjs/toolkit";

const createMessageSlice = createSlice({
	name: "create message",
	initialState: {
		message: {},
		loading: false,
		error: ""
	},
	reducers: {
		createMessageRequest: (state) => {
			state.loading = true;
			state.error = "";
			state.message = {};
		},
		createMessageSuccess: (state, action) => {
			state.loading = false;
			state.error = "";
			state.message = action.payload;
		},
		createMessageFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.message = {};
		}
	}
});

export const {
	createMessageRequest,
	createMessageSuccess,
	createMessageFailure
} = createMessageSlice.actions;
export const createMessageReducer = createMessageSlice.reducer;

const allMessageSlice = createSlice({
	name: "all message",
	initialState: {
		messages: [],
		loading: false,
		error: ""
	},
	reducers: {
		allMessageRequest: (state) => {
			state.loading = true;
			state.error = "";
			state.messages = [];
		},
		allMessageSuccess: (state, action) => {
			state.loading = false;
			state.error = "";
			state.messages = action.payload;
		},
		allMessageFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.messages = [];
		}
	}
});

export const { allMessageRequest, allMessageSuccess, allMessageFailure } =
	allMessageSlice.actions;
export const allMessageReducer = allMessageSlice.reducer;

const messageByUserSlice = createSlice({
	name: " message by user",
	initialState: {
		messages: [],
		loading: false,
		error: ""
	},
	reducers: {
		messageByUserRequest: (state) => {
			state.loading = true;
			state.error = "";
			state.messages = [];
		},
		messageByUserSuccess: (state, action) => {
			state.loading = false;
			state.error = "";
			state.messages = action.payload;
		},
		messageByUserFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.messages = [];
		}
	}
});

export const {
	messageByUserRequest,
	messageByUserSuccess,
	messageByUserFailure
} = messageByUserSlice.actions;
export const messageByUserReducer = messageByUserSlice.reducer;

const deleteMessageSlice = createSlice({
	name: "delete message",
	initialState: {
		message: {},
		loading: false,
		error: ""
	},
	reducers: {
		deleteMessageRequest: (state) => {
			state.loading = true;
			state.error = "";
			state.message = {};
		},
		deleteMessageSuccess: (state, action) => {
			state.loading = false;
			state.error = "";
			state.message = action.payload;
		},
		deleteMessageFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.message = {};
		}
	}
});

export const {
	deleteMessageRequest,
	deleteMessageSuccess,
	deleteMessageFailure
} = deleteMessageSlice.actions;
export const deleteMessageReducer = deleteMessageSlice.reducer;
