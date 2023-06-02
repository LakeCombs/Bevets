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
	cartReducer,
	createProductReducer,
	deleteProductReducer,
	getAllProductReducer,
	productByCategoryReducer,
	productByIdReducer,
	updateProductReducer
} from "./reducers/product.slice";
import {
	allCategoryReducer,
	categoryByIdReducer,
	createCategoryReducer,
	deleteCategoryReducer,
	updateCategoryReducer
} from "./reducers/categories.slice";
import {
	deleteImageByIdReducer,
	editImageByIdReducer,
	getAllImageReducer,
	getImageByIdReducer,
	uploadImageReducer
} from "./reducers/image.slice";

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
	deleteProduct: deleteProductReducer,
	productByCategory: productByCategoryReducer,
	cart: cartReducer,

	//category reducers
	createCategory: createCategoryReducer,
	allCategory: allCategoryReducer,
	categoryById: categoryByIdReducer,
	updateCategory: updateCategoryReducer,
	deleteCategory: deleteCategoryReducer,

	//image reducer
	uploadImage: uploadImageReducer,
	getAllImage: getAllImageReducer,
	getImageById: getImageByIdReducer,
	editImage: editImageByIdReducer,
	deleteImage: deleteImageByIdReducer
});

export default rootReducer;
