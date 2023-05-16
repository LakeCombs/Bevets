import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk, logger];

const store = configureStore({
	reducer: rootReducer,
	middleware
});

export default store;
