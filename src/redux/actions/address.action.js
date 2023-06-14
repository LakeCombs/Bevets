import { api } from "../../utils/apiInstance";
import { RequestError } from "../../utils/error";
import { headerConfig } from "../../utils/headerConfig";
import {
	addAddressFailed,
	addAddressRequest,
	addAddressSuccess,
	removeAddressFailed,
	removeAddressRequest,
	removeAddressSuccess,
	resetAddAddress,
	addressByIdRequest,
	addressByIdSuccess,
	addressByIdFailed,
	updateAddressRequest,
	updateAddressSuccess,
	updateAddressFailed
} from "../reducers/addressSlice";
import { loginSuccess } from "../reducers/user.slice";
import Cookie from "js-cookie";

export const AddAddressAction = (address) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(addAddressRequest());
		const { data } = await api.post(
			"/address",
			{ ...address },
			headerConfig(userInfo)
		);

		dispatch(addAddressSuccess(data));
		dispatch(loginSuccess(data));
		Cookie.set("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch(addAddressFailed(RequestError(error)));
	}
};

export const GetAddressByIdAction = (id) => async (dispatch, getState) => {
	try {
		dispatch(addressByIdRequest());
		const { data } = await api.get(`/address/${id}`);
		dispatch(addressByIdSuccess(data));
	} catch (error) {
		dispatch(addressByIdFailed(RequestError(error)));
	}
};

export const resetAddAddressAction = () => async (dispatch) => {
	dispatch(resetAddAddress());
};

export const DeleteAddressAction = (id) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(removeAddressRequest());
		const { data } = await api.delete(`/address/${id}`, headerConfig(userInfo));

		dispatch(removeAddressSuccess(data));
		dispatch(loginSuccess(data));
		Cookie.set("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch(removeAddressFailed(RequestError(error)));
	}
};

export const UpdateAddressAction =
	(id, update) => async (dispatch, getState) => {
		try {
			const {
				userLogin: { userInfo }
			} = getState();
			dispatch(updateAddressRequest());
			const { data } = await api.put(
				`/address/${id}`,
				{ ...update },
				headerConfig(userInfo)
			);

			dispatch(updateAddressSuccess(data));
			dispatch(loginSuccess(data));
			Cookie.set("userInfo", JSON.stringify(data));
		} catch (error) {
			dispatch(updateAddressFailed(RequestError(error)));
		}
	};
