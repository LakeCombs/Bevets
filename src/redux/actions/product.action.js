import { api } from "../../utils/apiInstance";
import { RequestError } from "../../utils/error";
import { headerConfig } from "../../utils/headerConfig";
import {
	addToCart,
	addToFav,
	addToRecently_viewed,
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
	reduceItemInCart,
	removeFromCart,
	removeFromFav,
	resetCart,
	resetCreateProduct,
	resetDeleteProduct,
	resetUpdateProduct,
	updateProductFailed,
	updateProductRequest,
	updateProductSuccess
} from "../reducers/product.slice";
import Cookie from "js-cookie";
import { updateUserAction } from "./user.action";

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

export const AddToCartAction = (prod) => (dispatch, getState) => {
	const carts = Cookie.get("cartItems")
		? JSON.parse(Cookie.get("cartItems"))
		: [];

	const {
		userLogin: { userInfo }
	} = getState();

	const exist = carts?.find((item) => item?.product?._id === prod?._id);

	const items = exist
		? carts?.map((item) => {
				if (item?.product?._id === exist?.product?._id) {
					return { ...item, qty: item.qty + 1 };
				} else {
					return {
						...item
					};
				}
		  })
		: [...carts, { product: prod, qty: 1 }];

	Cookie.set("cartItems", JSON.stringify(items));
	dispatch(addToCart(items));
};

export const AddToFavAction = (prod) => (dispatch) => {
	const favorite = Cookie.get("favorite")
		? JSON.parse(Cookie.get("favorite"))
		: [];

	const exist = favorite?.find((item) => item?._id === prod?._id);
	const setFav = exist
		? [...favorite]
		: prod?._id
		? [...favorite, prod]
		: [...favorite];

	Cookie.set("favorite", JSON.stringify(setFav));
	dispatch(addToFav(setFav));
};

export const RemoveFromFavAction = (prod) => (dispatch) => {
	const favorite = Cookie.get("favorite")
		? JSON.parse(Cookie.get("favorite"))
		: [];

	const fav = favorite?.filter((f) => f?._id !== prod?._id);

	Cookie.set("favorite", JSON.stringify(fav));
	dispatch(removeFromFav(fav));
};

export const RemoveFromCartAction = (prod) => (dispatch) => {
	const carts = Cookie.get("cartItems")
		? JSON.parse(Cookie.get("cartItems"))
		: [];

	const itemLeft = carts?.filter((item) => item?.product?._id !== prod?._id);

	Cookie.set("cartItems", JSON.stringify(itemLeft));
	dispatch(removeFromCart(itemLeft));
};

export const ReductItemInCartAction = (prod) => (dispatch) => {
	const carts = Cookie.get("cartItems")
		? JSON.parse(Cookie.get("cartItems"))
		: [];

	const itemExist = carts?.find((item) => item?.product?._id === prod?._id);

	const items = itemExist
		? carts?.map((item) => {
				if (item?.qty === 1) {
					return carts?.filter((item) => item?.product?._id !== prod?._id);
				} else if (item?.qty > 1) {
					return { ...item, qty: item?.qty - 1 };
				} else {
					return {
						...item
					};
				}
		  })
		: carts?.filter((item) => item?.product?._id === prod?._id);

	Cookie.set("cartItems", JSON.stringify(items));
	dispatch(reduceItemInCart(items));
};

export const ResetCartAction = () => (dispatch) => {
	dispatch(resetCart());
};

export const AddToRecentlyViewedAction = (prod) => (dispatch) => {
	const recently_viewed = Cookie.get("recently_viewed")
		? JSON.parse(Cookie.get("recently_viewed"))
		: [];

	const itemExist = recently_viewed?.find((item) => item?._id === prod?._id);

	const itemInViewed = itemExist
		? [...recently_viewed]
		: prod?._id
		? [...recently_viewed, prod]
		: [...recently_viewed];

	dispatch(addToRecently_viewed(itemInViewed));
	Cookie.set("recently_viewed", JSON.stringify(itemInViewed));
};
