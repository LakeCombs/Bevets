import { api } from "../../utils/apiInstance";
import { RequestError } from "../../utils/error";
import { headerConfig } from "../../utils/headerConfig";
import {
	allCategoryFailed,
	allCategoryRequest,
	allCategorySuccess,
	categoryByIdFailed,
	categoryByIdRequest,
	categoryByIdSuccess,
	createCategoryFailed,
	createCategoryRequest,
	createCategorySuccess,
	deleteCategoryFailed,
	deleteCategoryRequest,
	deleteCategorySuccess,
	resetcreateCategory,
	updateCategoryFailed,
	updateCategoryRequest,
	updateCategorySuccess
} from "../reducers/categories.slice";

export const createCategoryAction =
	(categoryData) => async (dispatch, getState) => {
		try {
			const {
				userLogin: { userInfo }
			} = getState();
			dispatch(createCategoryRequest());
			const { data } = await api.post(
				"/categories",
				{ ...categoryData },
				headerConfig(userInfo)
			);
			dispatch(createCategorySuccess(data));
		} catch (error) {
			dispatch(createCategoryFailed(RequestError(error)));
		}
	};

export const resetcreateCategoryAction = () => (dispatch) => {
	dispatch(resetcreateCategory());
};

export const allCategoryAction = () => async (dispatch, getState) => {
	try {
		dispatch(allCategoryRequest());
		const { data } = await api.get("/categories");
		dispatch(allCategorySuccess(data));
	} catch (error) {
		dispatch(allCategoryFailed(RequestError(error)));
	}
};

export const categoryByIdAction = (id) => async (dispatch, getState) => {
	try {
		dispatch(categoryByIdRequest());
		const { data } = await api.get(`/categories/${id}`);
		dispatch(categoryByIdSuccess(data));
	} catch (error) {
		dispatch(categoryByIdFailed(RequestError(error)));
	}
};

export const updateCategoryAction =
	(id, update) => async (dispatch, getState) => {
		try {
			dispatch(updateCategoryRequest());
			const { data } = await api.put(`/categories/${id}`, { ...update });
			dispatch(updateCategorySuccess(data));
		} catch (error) {
			dispatch(updateCategoryFailed(RequestError(error)));
		}
	};

export const deleteCategoryAction = (id) => async (dispatch, getState) => {
	try {
		dispatch(deleteCategoryRequest());
		const { data } = await api.delete(`/categories/${id}`);
		dispatch(deleteCategorySuccess(data));
	} catch (error) {
		dispatch(deleteCategoryFailed(RequestError(error)));
	}
};
