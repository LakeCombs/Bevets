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
	resetAddAddress
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
