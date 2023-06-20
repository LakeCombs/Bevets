import { api } from "../../utils/apiInstance";
import { RequestError } from "../../utils/error";
import { headerConfig } from "../../utils/headerConfig";
import {
	adminSearchFailed,
	adminSearchRequest,
	adminSearchSuccess,
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
