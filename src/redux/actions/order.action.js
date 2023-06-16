import { api } from "../../utils/apiInstance";
import { RequestError } from "../../utils/error";
import { headerConfig } from "../../utils/headerConfig";
import {
	createOrderFailure,
	createOrderRequest,
	createOrderSuccess,
	deleteOrderFailure,
	deleteOrderRequest,
	deleteOrderSuccess,
	getAllOrderFailure,
	getOrderByIdRequest,
	getOrderByIdSuccess,
	resetUpdateOrderDetails,
	updateOrderDetails,
	updateOrderFailure,
	updateOrderRequest,
	orderByUserRequest,
	orderByUserSuccess,
	orderByUserFailure,
	getAllOrderSuccess,
	getAllOrderRequest,
	resetOrderDetails,
	resetUpdateOrder,
	updateOrderSuccess,
	lastOrderRequest,
	lastOrderSuccess,
	lastOrderFailure
} from "../reducers/orderSilce";
import {
	getAllProductFailed,
	getAllProductRequest,
	getAllProductSuccess
} from "../reducers/product.slice";

export const CreateOrderAction = (orderData) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(createOrderRequest());

		const { data } = await api.post(
			"/orders",
			{ ...orderData },
			headerConfig(userInfo)
		);
		dispatch(createOrderSuccess(data));
	} catch (error) {
		dispatch(createOrderFailure(RequestError(error)));
	}
};

export const GetOrdersAction = () => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(getAllOrderRequest());
		const { data } = await api.get("/orders", headerConfig(userInfo));
		dispatch(getAllOrderSuccess(data));
	} catch (error) {
		dispatch(getAllOrderFailure(RequestError(error)));
	}
};

export const getOrderByIdAction = (orderId) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(getOrderByIdRequest());
		const { data } = await api.get(
			`/orders/${orderId}`,
			headerConfig(userInfo)
		);
		dispatch(getOrderByIdSuccess(data));
	} catch (error) {
		dispatch(getAllOrderFailure(RequestError(error)));
	}
};

export const updateOrderAction = (id, update) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(updateOrderRequest());
		const { data } = await api.put(
			`/orders/${id}`,
			{ ...update },
			headerConfig(userInfo)
		);
		dispatch(updateOrderSuccess(data));
	} catch (error) {
		dispatch(updateOrderFailure(RequestError(error)));
	}
};

export const deleteOrderAction = (id) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(deleteOrderRequest());
		const { data } = await api.delete(`/orders/${id}`, headerConfig(userInfo));
		dispatch(deleteOrderSuccess(data));
	} catch (error) {
		dispatch(deleteOrderFailure(RequestError(error)));
	}
};

export const getLastOrderAction = () => async (dispatch) => {
	try {
		dispatch(lastOrderRequest());
		const { data } = await api.get("/orders/last");
		dispatch(lastOrderSuccess(data));
	} catch (error) {
		dispatch(lastOrderFailure(RequestError(error)));
	}
};

export const OrderByUserAction = () => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(orderByUserRequest());
		const { data } = await api.get(
			`/orders/user/${userInfo?._id}`,
			headerConfig(userInfo)
		);
		dispatch(orderByUserSuccess(data));
	} catch (error) {
		dispatch(orderByUserFailure(RequestError(error)));
	}
};

export const OrderDetailsAction = (payload) => (dispatch) => {
	dispatch(updateOrderDetails(payload));
};

export const ResetOrderDetailsAction = () => (dispatch) => {
	dispatch(resetOrderDetails());
};

export const ResetUpdateOrderAction = () => (dispatch) => {
	dispatch(resetUpdateOrder());
};
