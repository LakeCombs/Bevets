import { api } from "../../utils/apiInstance";
import { RequestError } from "../../utils/error";
import { headerConfig } from "../../utils/headerConfig";
import {
	adminSearchFailed,
	adminSearchRequest,
	adminSearchSuccess,
	getSummaryFailed,
	getSummaryRequest,
	getSummarySuccess,
	resetadminSearch
} from "../reducers/adminSearchSlice";

export const adminSearchAction = (input) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(adminSearchRequest());
		const { data } = await api.get(
			`/admin/search/?search=${input}`,
			headerConfig(userInfo)
		);
		dispatch(adminSearchSuccess(data));
	} catch (error) {
		dispatch(adminSearchFailed(RequestError(error)));
	}
};

export const ResetAminSearchAction = () => (dispatch) => {
	dispatch(resetadminSearch());
};

export const getSummaryAction = () => async (dispatch, getState) => {
	try {
		dispatch(getSummaryRequest());
		const {
			userLogin: { userInfo }
		} = getState();
		const { data } = await api.get(`/admin/summary`, headerConfig(userInfo));
		dispatch(getSummarySuccess(data));
	} catch (error) {
		dispatch(getSummaryFailed(RequestError(error)));
	}
};
