/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import WideButton from "./wideButton";
import { AiFillExclamationCircle } from "react-icons/ai";
import {
	AddAddressAction,
	DeleteAddressAction
} from "../redux/actions/address.action";
import { useEffect } from "react";
import { OrderDetailsAction } from "../redux/actions/order.action";

const DeliveryMethodSession = ({ flip, setFlip }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [deliveryFee, setDeliveryFee] = useState(0);
	const { cartItems } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.userLogin);
	const { address: Addr, error } = useSelector((state) => state.addAddress);
	const { address: DelAddr } = useSelector((state) => state.removeAddress);
	const [deliveryPrice, setDeiveryPrice] = useState(0);
	const [editAddress, setEditAddress] = useState(false);
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [selectedAddress, setSelectedAddress] = useState("");
	const [deliveryMethod, setDeliveryMethod] = useState("Door Delivery");
	const [messageApi, contextHolder] = message.useMessage();

	const totalPrice = cartItems?.reduce((accumulator, currectValue) => {
		return accumulator + currectValue?.product?.price * currectValue?.qty;
	}, 0);

	const SaveAddress = () => {
		dispatch(
			AddAddressAction({
				address,
				city,
				state,
				zipCode
			})
		);
	};

	const RemoveAddress = (id) => {
		dispatch(DeleteAddressAction(id));
	};

	const NextClick = () => {
		if (!selectedAddress) {
			return messageApi.open({ type: "warning", content: "Select an address" });
		}

		if (!deliveryMethod) {
			return messageApi.open({
				type: "warning",
				content: "Select a delivery method"
			});
		}

		setFlip(!flip);
	};

	const CheckAddress = userInfo?.addresses?.find(
		(add) => add?._id === selectedAddress
	)?._id;

	useEffect(() => {
		if (Addr?._id) {
			setAddress("");
			setCity("");
			setState("");
			setZipCode("");
			setEditAddress(true);
		}

		if (userInfo?.addresses?.length === 1) {
			setSelectedAddress(userInfo?.addresses[0]?._id);
			dispatch(
				OrderDetailsAction({
					address: userInfo?.addresses[0]?._id
				})
			);
		}
	}, [Addr]);

	useEffect(() => {
		dispatch(
			OrderDetailsAction({
				user: userInfo?._id,
				total_price: totalPrice,
				items: cartItems?.map((item) => {
					return { product: item?.item?._id, qty: item?.qty };
				}),
				delivery_method: deliveryMethod
			})
		);
	}, []);

	return (
		<div className="flex md:flex-row flex-col justify-between w-full ">
			{contextHolder}

			<div className="md:w-8/12 w-full flex flex-col  md:mr-[10px] mr-0">
				<div className="bg-white rounded-2xl shadow-md pb-[15px]">
					<div className="flex justify-between mx-[15px] items-center">
						<h2 className="font-bold  text-[12px] md:text-[15px] my-[10px]">
							ADDRESS DETAILS
						</h2>
						<h2
							className="text-bright-blue text-[12px] md:text-[15px] hover:cursor-pointer "
							onClick={() => {
								setEditAddress(false);
							}}>
							{!userInfo?.addresses?.length && editAddress
								? "Add Address"
								: ""}
						</h2>
					</div>
					<hr />
					{(userInfo?.addresses?.length) ? (
						<>
							{userInfo?.addresses?.map((address) => {
								return (
									<div
										key={address?._id}
										className="ml-[15px] border-b pb-[10px]">
										<div className="flex justify-between items-center mb-[-20px]">
											<p className="font-bold mb-[15px] text-[15px] mt-[10px]">
												Address: {address?.address}
											</p>
											<div className="flex h-[60px] pt-[10px] flex-col justify-between">
												<span
													className={` px-[10px] ${
														CheckAddress === address?._id
															? "bg-green-500 text-white font-bold text-15px py-[4px]"
															: " text-green-600 text-[10px]"
													} cursor-pointer hover:bg-gray-300 `}
													onClick={() => {
														setSelectedAddress(address?._id);
														dispatch(
															OrderDetailsAction({
																address: address?._id
															})
														);
													}}>
													{CheckAddress === address?._id
														? "Selected"
														: "Select"}
													{/* SELECT */}
												</span>
												<span
													className="text-red-500 font-bold text-[10px] px-[10px] cursor-pointer hover:bg-gray-300"
													onClick={() => RemoveAddress(address?._id)}>
													REMOVE{" "}
												</span>
											</div>
										</div>
										<p className=" mt-[5px] text-[11px]">
											Location: {address?.address}
										</p>
										<p className=" mt-[5px] text-[11px]">
											Location: {address?.city}
										</p>

										<p className=" mt-[5px] text-[11px]">
											Closest Land Mark: {address?.state}
										</p>
										<p className=" mt-[5px] text-[11px]">
											Phone: {address?.zipCode}
										</p>
									</div>
								);
							})}

							{!userInfo?.addresses?.length && (
								<div className="flex flex-row items-center justify-center my-[15px]">
									<AiFillExclamationCircle className="text-[30px] text-red-400 mr-[5px]" />{" "}
									<span> No address registered! </span>
								</div>
							)}
						</>
					) : (
						<div className="mx-[15px]">
							{error && <p className="text-red-400 my-[3px]">{error}</p>}
							<div className="flex flex-col">
								<div className="checkout-field">
									<label>Address / Location</label>
									<input
										type="text"
										id="address"
										value={address}
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>
							</div>
							<div className="flex flex-col">
								<div className="checkout-field">
									<label>City</label>
									<input
										name="city"
										type="text"
										id="location"
										value={city}
										onChange={(e) => setCity(e.target.value)}
									/>
								</div>
							</div>
							<div className="flex flex-col">
								<div className="checkout-field">
									<label>Closest Land Mark</label>
									<input
										name="state"
										type="text"
										id="landmark"
										value={state}
										onChange={(e) => setState(e.target.value)}
									/>
								</div>
							</div>
							<div className="flex flex-col">
								<div className="checkout-field">
									<label>Phone No.</label>
									<input
										name="zipCode"
										type="text"
										id="phone"
										value={zipCode}
										onChange={(e) => setZipCode(e.target.value)}
									/>
								</div>
							</div>
							<br />
							<WideButton
								style="bg-bright-blue "
								text={"Save Address"}
								onClick={SaveAddress}
							/>
							<br />
							<WideButton
								style="bg-red-500 "
								text={"Cancel"}
								onClick={() => {
									setEditAddress(true);
								}}
							/>
						</div>
					)}
				</div>

				<div className="bg-white rounded-2xl mt-[20px] shadow-md pb-[20px] flex flex-col ">
					<div className="flex justify-between mx-[15px] items-center">
						<h2 className="font-bold  text-[12px] md:text-[15px] my-[10px]">
							DELIVERY DETAILS
						</h2>
					</div>
					<hr />
					<div className="ml-[15px] mb-[10px]">
						<div className="mt-[10px]">
							<p className=" mt-[5px] ">
								Your items will be delivered{" "}
								<span className="font-semibold">within 24 hours</span>
							</p>
						</div>
					</div>

					<hr />

					<div className="flex p-[30px] w-full flex-col ">
						<div className="flex w-full justify-between mt-[15px]">
							<p>Subtotal</p>
							<p>
								GHC
								{cartItems
									?.reduce((accumulator, currectValue) => {
										return (
											accumulator +
											currectValue?.product?.price * currectValue?.qty
										);
									}, 0)
									?.toLocaleString()}
							</p>
						</div>
						<div className="flex w-full justify-between my-[5px]">
							<p>Delivery Fee</p>
							<p className="font-semibold">
								GHC {deliveryFee?.toLocaleString()}
							</p>
						</div>
						{/* <div className="flex w-full justify-between">
							<p>Discount</p>
							<p className="text-bright-blue font-bold">GHC 100.00</p>
						</div> */}
					</div>

					<hr className="my-[10px] mt-[-20px]" />
					<div className="flex px-[30px] w-full flex-col ">
						<div className="flex w-full justify-between">
							<p className="font-bold">Total</p>
							<p className="text-app-orange font-bold">
								GHC
								{cartItems
									?.reduce((accumulator, currectValue) => {
										return (
											accumulator +
											currectValue?.product?.price * currectValue?.qty +
											deliveryFee
										);
									}, 0)
									?.toLocaleString()}
							</p>
						</div>
					</div>

					<button
						className="w-[55%] text-white bg-bright-blue py-[5px] mt-[15px] self-center rounded-lg hover:shadow-md"
						onClick={NextClick}>
						NEXT
					</button>
				</div>
			</div>
			<div className="md:w-4/12 w-full bg-white rounded-2xl shadow-md p-[10px] md:mt-0 mt-[20px] flex flex-col">
				{" "}
				<h2 className="font-bold ml-[15px] text-[12px] md:text-[15px] my-[5px] ">
					YOUR ORDER (
					{cartItems
						?.reduce((accumulator, currentValue) => {
							return accumulator + currentValue?.qty;
						}, 0)
						?.toLocaleString()}
					) items
				</h2>
				<hr />
				{cartItems?.map((product) => {
					return (
						<div className="flex mt-[15px] px-[20px] mb-[20px]  items-start ">
							<img
								alt={""}
								src={product?.product?.images && product?.product?.images[0]}
								className="h-[100px] w-[100px]"
							/>

							<div className="ml-[20px]">
								<p>{product?.item?.name}</p>
								<p className="text-app-orange mt-[13px]">
									GHC {product?.product?.price?.toLocaleString()}
								</p>
								<p>Qty: {product?.qty} </p>
							</div>
						</div>
					);
				})}
				<hr />
				<div className="flex justify-between mt-[20px]">
					<p>Subtotal</p>
					<p>
						GHC{" "}
						{cartItems
							?.reduce((accumulator, currectValue) => {
								return (
									accumulator + currectValue?.product?.price * currectValue?.qty
								);
							}, 0)
							?.toLocaleString()}
					</p>
				</div>
				<div className="flex justify-between mt-[10px]">
					<p>Delivery Fee</p>
					<p>GHC {deliveryPrice?.toLocaleString()}</p>
				</div>
				{/* <div className="flex justify-between mt-[10px] mb-[5px]">
					<p>Discount</p>
					<p className="text-bright-blue">GHC ?>}</p>
				</div> */}
				<hr />
				<div className="flex justify-between  mt-[10px]">
					<p className="font-bold">Total</p>
					<p className="text-app-orange font-bold">
						GHC{" "}
						{cartItems
							?.reduce((accumulator, currectValue) => {
								return (
									accumulator + currectValue?.product?.price * currectValue?.qty
								);
							}, 0)
							?.toLocaleString()}
					</p>
				</div>
				<button
					className="self-center w-[40%] py-[5px] text-white rounded-lg mt-[20px] mb-[10px] bg-bright-blue"
					onClick={() => navigate("/cart")}>
					Modify Cart
				</button>
			</div>
		</div>
	);
};

export default DeliveryMethodSession;
