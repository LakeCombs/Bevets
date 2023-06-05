import { api } from "../../utils/apiInstance";
import { RequestError } from "../../utils/error";
import { headerConfig } from "../../utils/headerConfig";
import {
	addToCart,
	addToFav,
	createProductFailed,
	createProductRequest,
	createProductSuccess,
	deleteProductFailed,
	deleteProductRequest,
	deleteProductSuccess,
	getAllProductFailed,
	getAllProductRequest,
	getAllProductSuccess,
	getProductByIdFailed,
	getProductByIdRequest,
	getProductByIdSuccess,
	productByCategoryFailed,
	productByCategoryRequest,
	productByCategorySuccess,
	removeFromCart,
	resetCreateProduct,
	resetDeleteProduct,
	resetUpdateProduct,
	updateProductFailed,
	updateProductRequest,
	updateProductSuccess
} from "../reducers/product.slice";
import Cookie from "js-cookie";

export const createProductAction = (product) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(createProductRequest());
		const { data } = await api.post(
			`/products/`,
			{ ...product },
			headerConfig(userInfo)
		);
		dispatch(createProductSuccess(data));
	} catch (error) {
		dispatch(createProductFailed(RequestError(error)));
	}
};

export const resetCreateProductAction = () => (dispatch) => {
	dispatch(resetCreateProduct());
};

export const getProductByIdAction = (id) => async (dispatch, getState) => {
	try {
		dispatch(getProductByIdRequest());
		const { data } = await api.get(`/products/${id}`);
		dispatch(getProductByIdSuccess(data));
	} catch (error) {
		dispatch(getProductByIdFailed(RequestError(error)));
	}
};

export const getAllProductAction = () => async (dispatch) => {
	try {
		dispatch(getAllProductRequest());
		const { data } = await api.get("/products");
		dispatch(getAllProductSuccess(data));
	} catch (error) {
		dispatch(getAllProductFailed(RequestError(error)));
	}
};

export const updateProductAction =
	(id, update) => async (dispatch, getState) => {
		try {
			const {
				userLogin: { userInfo }
			} = getState();
			dispatch(updateProductRequest());
			const { data } = await api.put(
				`/products/${id}`,
				{ ...update },
				headerConfig(userInfo)
			);
			dispatch(updateProductSuccess(data));
		} catch (error) {
			dispatch(updateProductFailed(RequestError(error)));
		}
	};

export const resetUpdateProductAction = () => (dispatch) => {
	dispatch(resetUpdateProduct());
};

export const DeleteProductAction = (id) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(deleteProductRequest());
		const { data } = await api.delete(
			`/products/${id}`,
			headerConfig(userInfo)
		);
		dispatch(deleteProductSuccess(data));
	} catch (error) {
		dispatch(deleteProductFailed(RequestError(error)));
	}
};

export const resetDeleteProductAction = () => (dispatch) => {
	dispatch(resetDeleteProduct());
};

export const GetProductByCategoryAction =
	(_id) => async (dispatch, getState) => {
		try {
			const {
				userLogin: { userInfo }
			} = getState();
			dispatch(productByCategoryRequest());
			const { data } = await api.get(
				`/products/categories/${_id}`,
				headerConfig(userInfo)
			);
			dispatch(productByCategorySuccess(data));
		} catch (error) {
			dispatch(productByCategoryFailed(RequestError(error)));
		}
	};

export const AddToCartAction = (prod) => (dispatch) => {
	const cart = Cookie.get("cartItems")
		? JSON.parse(Cookie.get("cartItems"))
		: [];

	const exist = cart?.find((item) => item?.item?._id === prod?._id);

	const items = exist
		? cart?.map((item) => {
				if (item?._id === exist?._id) {
					return { ...item, qty: item.qty + 1 };
				} else {
					return {
						...item
					};
				}
		  })
		: [...cart, { item: prod, qty: 1 }];
	Cookie.set("cartItems", JSON.stringify(items));
	dispatch(addToCart(items));
};

export const AddToFavAction = (prod) => (dispatch) => {
	dispatch(addToFav(prod));
};

export const RemoveFromCartAction = (prod) => (dispatch) => {
	dispatch(removeFromCart(prod));
};
