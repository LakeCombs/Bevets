import { api } from "../../utils/apiInstance";
import { RequestError } from "../../utils/error";
import { headerConfig } from "../../utils/headerConfig";
import {
	allMessageFailure,
	allMessageRequest,
	allMessageSuccess,
	createMessageFailure,
	createMessageRequest,
	createMessageSuccess,
	messageByUserFailure,
	messageByUserRequest,
	messageByUserSuccess
} from "../reducers/messag.slice";

export const CreateMessageAction = (message) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();
		dispatch(createMessageRequest());
		const { data } = await api.post(
			"/messages",
			{ ...message },
			headerConfig(userInfo)
		);
		dispatch(createMessageSuccess(data));
	} catch (error) {
		dispatch(createMessageFailure(RequestError(error)));
	}
};

export const GetAllMessageAction = () => async (dispatch, getState) => {
	console.log("All Message Action");
	try {
		const {
			userLogin: { userInfo }
		} = getState();

		dispatch(allMessageRequest());
		const { data } = await api.get("/messages", headerConfig(userInfo));
		dispatch(allMessageSuccess(data));
	} catch (error) {
		dispatch(allMessageFailure(RequestError(error)));
	}
};

export const GetMessageByUser = () => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo }
		} = getState();

		dispatch(messageByUserRequest());
		const { data } = await api.get("/messages/user", headerConfig(userInfo));
		dispatch(messageByUserSuccess(data));
	} catch (error) {
		dispatch(messageByUserFailure(RequestError(error)));
	}
};
