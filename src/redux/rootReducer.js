import { combineReducers } from "@reduxjs/toolkit";
import {
	blockUserReducer,
	deleteUserReducer,
	getAllUserReducer,
	unBlockUserReducer,
	updateUserReducer,
	userByIdReducer,
	userLoginReducer,
	userRegisterReducer
} from "./reducers/user.slice";
import {
	createProductReducer,
	deleteProductReducer,
	getAllProductReducer,
	productByIdReducer,
	updateProductReducer
} from "./reducers/product.slice";

const rootReducer = combineReducers({
	//user reducers
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userById: userByIdReducer,
	allUser: getAllUserReducer,
	deleteUser: deleteUserReducer,
	updateUser: updateUserReducer,
	blockUser: blockUserReducer,
	unblockUser: unBlockUserReducer,

	//product reducers
	createProduct: createProductReducer,
	productById: productByIdReducer,
	allProduct: getAllProductReducer,
	updateProduct: updateProductReducer,
	deleteProduct: deleteProductReducer
});

export default rootReducer;
