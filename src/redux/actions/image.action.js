import { upload } from "@testing-library/user-event/dist/upload";
import { api } from "../../utils/apiInstance";
import {
	deleteImageByIdFailed,
	deleteImageByIdRequest,
	deleteImageByIdSuccess,
	editImageByIdFailed,
	editImageByIdRequest,
	editImageByIdSuccess,
	getImageByIdFailed,
	getImageByIdRequest,
	getImageByIdSuccess,
	resetDeleteImage,
	uploadImageFailed,
	uploadImageRequest,
	uploadImageSuccess
} from "../reducers/image.slice";

export const uploadImageAction = (images) => async (dispatch) => {
	try {
		dispatch(uploadImageRequest());
		const { data } = await api.post("/image", { ...images });
		dispatch(uploadImageSuccess(data));
	} catch (error) {
		dispatch(uploadImageFailed(error));
	}
};

export const getImageByIdAction = (id) => async (dispatch) => {
	try {
		dispatch(getImageByIdRequest());
		const { data } = await api.get(`/image/${id}`);
		dispatch(getImageByIdSuccess(data));
	} catch (error) {
		dispatch(getImageByIdFailed(error));
	}
};

export const updateImageByIdAction = (id, file) => async (dispatch) => {
	try {
		dispatch(editImageByIdRequest());
		const { data } = await api.put(`/images/${id}`, { ...file });
		dispatch(editImageByIdSuccess(data));
	} catch (error) {
		dispatch(editImageByIdFailed(error));
	}
};

export const deleteImageByfileNameAction = (name) => async (dispatch) => {
	try {
		dispatch(deleteImageByIdRequest());
		const { data } = await api.delete(`/images/${name}`);
		dispatch(deleteImageByIdSuccess(data));
	} catch (error) {
		dispatch(deleteImageByIdFailed(error));
	}
};

export const resetDeleteImageAction = () => async (dispatch) => {
	dispatch(resetDeleteImage());
};
