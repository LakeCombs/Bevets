import { Input, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../redux/actions/user.action";
import { resetUpdateUser } from "../redux/reducers/user.slice";
import {
	AddAddressAction,
	DeleteAddressAction,
	UpdateAddressAction
} from "../redux/actions/address.action";
import { BiPen } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { api } from "../utils/apiInstance";

const AccountSession = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { user, loading, error } = useSelector((state) => state.updateUser);
	const {
		address: addedAddress,
		loading: addAddressLoading,
		error: addAddressError
	} = useSelector((state) => state.addAddress);
	const {
		address: deletedAddress,
		loading: deleteAddressLoading,
		error: deleteAddressError
	} = useSelector((state) => state.removeAddress);
	const {
		address: updatedAddress,
		loading: updateAddressLoading,
		error: updateAddressError
	} = useSelector((state) => state.updateAddress);

	const [updateUserDetails, setUpdateUserDetails] = useState(false);
	const [addAddress, setAddAddress] = useState(false);
	const [editAddress, setEditAddress] = useState(false);

	const [firstname, setFirstname] = useState(userInfo?.firstname || "");
	const [lastname, setLastname] = useState(userInfo?.lastname || "");
	const [email, setEmail] = useState(userInfo?.email || "");
	const [mobile, setMobile] = useState(userInfo?.mobile || "");
	const [profile_picture, setProfile_picture] = useState(
		userInfo?.profile_picture || ""
	);
	const [uploadImageLoading, setUploadImageLoading] = useState(false);

	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [addressId, setAddressId] = useState("");
	const inputRef = useRef(null);

	const handleFileChange = async (e) => {
		inputRef.current.click();

		const fileObj = e.target.files && e.target.files[0];
		if (!fileObj) {
			return;
		}

		let formData = new FormData();
		formData.append("image", fileObj, fileObj?.name);
		try {
			setUploadImageLoading(true);
			const res = await api.post("/images", formData);
			setProfile_picture(res?.data?.image);
			setUploadImageLoading(false);
			// Handle the response from the API as needed
		} catch (error) {
			setUploadImageLoading(false);
			// Handle any errors that occurred during the API request
		}
	};

	useEffect(() => {
		if (user?._id) {
			setUpdateUserDetails(false);
			dispatch(resetUpdateUser());
			setFirstname(userInfo?.firstname || "");
			setLastname(userInfo?.lastname || "");
			setEmail(userInfo?.email || "");
			setMobile(userInfo?.mobile || "");
		}
	}, [user?._id]);

	useEffect(() => {
		if (addedAddress?._id) {
			setAddAddress(false);
			setAddress("");
			setCity("");
			setState("");
			setZipCode("");
		}
	}, [addedAddress?._id]);

	useEffect(() => {
		if (updatedAddress?._id) {
			setEditAddress(false);
			setAddress("");
			setCity("");
			setState("");
			setZipCode("");
			setAddressId("");
		}
	}, [updatedAddress?._id]);

	return (
		<div>
			<div className="py-3 w-full px-5 md:font-bold font-semibold">
				<h2>ACCCOUNT OVERVIEW</h2>
			</div>
			<hr />
			<div className=" flex-wrap p-5 flex justify-between gap-4">
				<div
					className={` w-full md:w-[320px] ${
						updateUserDetails ? "h-auto" : "h-[170px]"
					} border rounded-lg`}>
					<div className="py-3 w-full px-5 md:font-bold font-semibold flex  justify-between">
						<h2 className="font-semibold">Account Details</h2>
						{error && <p className="text-red-400">{error}</p>}

						{!updateUserDetails ? (
							<p
								className="text-app-orange hover:cursor-pointer"
								onClick={() => {
									setUpdateUserDetails(true);
								}}>
								Edit
							</p>
						) : (
							<></>
						)}
					</div>
					<hr />

					{!updateUserDetails ? (
						<div className="px-5 pt-2">
							<img
								className="border h-[50px] w-[50px] rounded-none"
								src={userInfo?.profile_picture}
							/>
							<h2 className="font-semibold md:text-[15px] text-[12px]">
								{`${userInfo?.firstname} ${userInfo?.lastname}`}
							</h2>
							<p className="md:text-[12px] text-[10px]">{userInfo?.email}</p>
							<p className="md:text-[12px] text-[10px]">{userInfo?.mobile}</p>
						</div>
					) : (
						<div className="px-5 pt-2 flex flex-col">
							<div className="w-full flex justify-center items-center flex-col">
								<img
									className="border h-[60px] w-[60px] rounded-full"
									src={userInfo?.profile_picture}
									alt=""
								/>
								<input
									type="file"
									ref={inputRef}
									accept="image/*"
									onChange={handleFileChange}
									className="hidden"
									src={profile_picture}
								/>

								<BsPencil
									className="mt-[-20px] mr-[-30px] bg-bright-blue p-[5px] text-[25px] rounded-full text-white"
									onClick={handleFileChange}
								/>

								{uploadImageLoading && <Spin />}
							</div>

							<p className="text-[10px]">First name</p>
							<Input
								value={firstname}
								onChange={(e) => {
									setFirstname(e.target.value);
								}}
								className="mb-[5px]"
							/>

							<p className="text-[10px]">Last name</p>
							<Input
								value={lastname}
								onChange={(e) => {
									setLastname(e.target.value);
								}}
								className="mb-[5px]"
							/>

							<p className="text-[10px]"> Email</p>
							<Input
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								className="mb-[5px]"
							/>

							<p className="text-[10px]">Phone</p>
							<Input
								value={mobile}
								onChange={(e) => {
									setMobile(e.target.value);
								}}
								className="mb-[5px]"
							/>
							<div className="mt-[10px] mb-[10px] justify-between w-full flex flex-row">
								<button
									className="bg-red-400 text-white px-[15px] py-[8px] rounded-lg"
									onClick={() => {
										setUpdateUserDetails(false);
									}}>
									Cancel
								</button>

								<button
									className="bg-green-400 text-white px-[15px] py-[8px] rounded-lg"
									onClick={() => {
										dispatch(
											updateUserAction(userInfo?._id, {
												firstname,
												lastname,
												email,
												mobile,
												profile_picture
											})
										);
									}}>
									Update {loading && <Spin />}
								</button>
							</div>
						</div>
					)}
				</div>

				<div className="w-full md:w-[320px]  h-auto  border rounded-lg">
					<div className="py-3 w-full px-5 md:font-bold font-semibold flex  justify-between">
						<h2 className="font-semibold">
							Address Details{" "}
							{(addAddressLoading ||
								deleteAddressLoading ||
								updateAddressLoading) && <Spin />}
							{addAddressError && (
								<p className="text-red-400"> {addAddressError}</p>
							)}
							{updateAddressError && (
								<p className="text-red-400"> {updateAddressError}</p>
							)}
						</h2>

						{!addAddress && (
							<p
								className="text-app-orange hover:cursor-pointer"
								onClick={() => {
									setAddAddress(true);
								}}>
								Add
							</p>
						)}
					</div>
					<hr />

					{addAddress && (
						<div className="px-5 pt-2 flex flex-col ">
							<p className="text-[10px]">Address</p>
							<Input
								value={address}
								onChange={(e) => {
									setAddress(e.target.value);
								}}
								className="mb-[5px]"
							/>

							<p className="text-[10px]">City</p>
							<Input
								value={city}
								onChange={(e) => {
									setCity(e.target.value);
								}}
								className="mb-[5px]"
							/>

							<p className="text-[10px]">State</p>
							<Input
								value={state}
								onChange={(e) => {
									setState(e.target.value);
								}}
								className="mb-[5px]"
							/>

							<p className="text-[10px]">ZipCode</p>
							<Input
								value={zipCode}
								onChange={(e) => {
									setZipCode(e.target.value);
								}}
								className="mb-[5px]"
							/>
							<div className="mt-[10px] mb-[10px] justify-between w-full flex flex-row">
								<button
									className="bg-red-400 text-white px-[15px] py-[8px] rounded-lg"
									onClick={() => {
										setAddAddress(false);
									}}>
									Cancel
								</button>

								<button
									className="bg-green-400 text-white px-[15px] py-[8px] rounded-lg"
									onClick={() => {
										dispatch(
											AddAddressAction({
												address,
												city,
												state,
												zipCode
											})
										);
									}}>
									Add {loading && <Spin />}
								</button>
							</div>
						</div>
					)}

					<div className="px-5 ">
						{userInfo?.addresses?.map((add) => {
							return (
								<div
									key={add?._id}
									className="flex  pb-[10px] flex-row justify-between">
									<p className="md:text-[12px] text-[10px]">
										<br />
										Address: {add?.address}
										<br />
										City: {add?.city}
										<br />
										State: {add?.state}
										<br />
										ZipCode: {add?.zipCode}
									</p>

									<div className="pt-[20px]">
										<p
											className="text-green-400 hover:cursor-pointer font-bold  text-[12px]"
											onClick={() => {
												setEditAddress(true);
												setAddress(add?.address);
												setCity(add?.city);
												setState(add?.state);
												setZipCode(add?.zipCode);
												setAddressId(add?._id);
											}}>
											Edit
										</p>
										<br />
										<p
											className="text-red-400 hover:cursor-pointer font-bold text-[12px]"
											onClick={() => {
												dispatch(DeleteAddressAction(add?._id));
											}}>
											Delete
										</p>
									</div>
								</div>
							);
						})}

						{editAddress && (
							<div className="px-5 pt-2 flex flex-col ">
								<p className="text-[10px]">Address</p>
								<Input
									value={address}
									onChange={(e) => {
										setAddress(e.target.value);
									}}
									className="mb-[5px]"
								/>

								<p className="text-[10px]">City</p>
								<Input
									value={city}
									onChange={(e) => {
										setCity(e.target.value);
									}}
									className="mb-[5px]"
								/>

								<p className="text-[10px]">State</p>
								<Input
									value={state}
									onChange={(e) => {
										setState(e.target.value);
									}}
									className="mb-[5px]"
								/>

								<p className="text-[10px]">ZipCode</p>
								<Input
									value={zipCode}
									onChange={(e) => {
										setZipCode(e.target.value);
									}}
									className="mb-[5px]"
								/>
								<div className="mt-[10px] mb-[10px] justify-between w-full flex flex-row">
									<button
										className="bg-red-400 text-white px-[15px] py-[8px] rounded-lg"
										onClick={() => {
											setEditAddress(false);
										}}>
										Cancel
									</button>

									<button
										className="bg-green-400 text-white px-[15px] py-[8px] rounded-lg"
										onClick={() => {
											dispatch(
												UpdateAddressAction(addressId, {
													address,
													city,
													state,
													zipCode
												})
											);
										}}>
										Update {updateAddressLoading && <Spin />}
									</button>
								</div>
							</div>
						)}
					</div>
				</div>

				<div className="w-full md:w-[320px] h-[170px] border rounded-lg">
					<div className="py-3 w-full px-5 md:font-bold font-semibold flex  justify-between">
						<h2 className="font-semibold">NEWSLETTER PREFERENCE</h2>
					</div>
					<hr />
					<div className="px-5 pt-2">
						<p className="md:text-[12px] text-[10px] ">
							You are currently not subscribed to any of our newsletters.
						</p>
					</div>
					<h2 className="text-app-orange px-5 align-end cursor-pointer">
						EDIT NEWSLETTER PREFERENCE
					</h2>
				</div>
			</div>
		</div>
	);
};

export default AccountSession;
