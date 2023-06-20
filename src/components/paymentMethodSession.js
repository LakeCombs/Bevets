import { Checkbox, Radio, Spin, message } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetAddressByIdAction } from "../redux/actions/address.action.js";
import {
	OrderDetailsAction,
	CreateOrderAction,
	ResetOrderDetailsAction
} from "../redux/actions/order.action";
import { useNavigate } from "react-router-dom";
import { ResetCartAction } from "../redux/actions/product.action.js";

const PaymentMethodSession = ({ flip, setFlip }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { address, delivery_method, items, payment_method, total_price, user } =
		useSelector((state) => state.orderDetails);
	const { cartItems } = useSelector((state) => state.cart);
	const {
		address: addressFromId,
		loading,
		error
	} = useSelector((state) => state.addressById);
	const {
		loading: createOrderLoading,
		error: createOrderError,
		order: createdOrder
	} = useSelector((state) => state.createOrder);

	const [paymentMethod, setPaymentMethod] = useState("Cash on delivery");
	const [checked, setChecked] = useState(false);
	const [messageApi, contextHolder] = message.useMessage();

	const orderItems = () => {
		return cartItems.map((item) => {
			if (item?.product?._id) {
				return {
					product: item?.product?._id,
					qty: item?.qty
				};
			}
		});
	};

	const ConfirmOrder = () => {
		if (!paymentMethod) {
			return messageApi.open({
				type: "warning",
				content: "Select a payment method"
			});
		}

		dispatch(
			CreateOrderAction({
				address,
				delivery_method,
				items: orderItems(),
				payment_method,
				total_price,
				user
			})
		);

		navigate("/orders");

		dispatch(ResetCartAction());
	};

	useEffect(() => {
		if (!address) {
			messageApi.open({
				type: "warning",
				content: "Select an address"
			});
			return setFlip(!flip);
		}
		dispatch(GetAddressByIdAction(address));
	}, [address, dispatch]);

	useEffect(() => {
		dispatch(
			OrderDetailsAction({
				payment_method: paymentMethod
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if (createdOrder?._id) {
			messageApi.open({
				type: "success",
				content: "Order have been created"
			});

			navigate("/orders");
			dispatch(ResetOrderDetailsAction());
		}
	}, [createdOrder]);

	return (
		<div className="flex md:flex-row flex-col justify-between w-full ">
			{contextHolder}
			<div className="md:w-8/12 w-full flex flex-col  md:mr-[10px] mr-0">
				<div className="bg-white rounded-2xl shadow-md pb-[15px]">
					<div className="flex justify-between mx-[15px] items-center">
						<h2 className="font-bold  text-[12px] md:text-[15px] my-[10px]">
							SELECTED ADDRESS DETAILS {loading && <Spin />}{" "}
							{error && <p>{error}</p>}
						</h2>
					</div>
					<hr />
					<div className="ml-[15px]">
						<p className="font-bold mb-[15px] text-[15px] mt-[10px]">
							Address: {addressFromId?.address}
						</p>
						<p className=" mt-[5px] text-[11px]">City: {addressFromId?.city}</p>

						<p className=" mt-[5px] text-[11px]">
							State: {addressFromId?.state}
						</p>
						<p className=" mt-[5px] text-[11px]">
							Zip Code: {addressFromId?.zipCode}
						</p>
					</div>
				</div>

				<div className="bg-white rounded-2xl mt-[20px] shadow-md pb-[20px] flex flex-col ">
					<div className="flex justify-between mx-[15px] items-center">
						<h2 className="font-bold  text-[12px] md:text-[15px] my-[10px]">
							DELIVERY METHOD
						</h2>
					</div>
					<hr />
					<div className="ml-[15px] mb-[10px]">
						<p className="font-[500] text-[15px] mt-[10px]">
							{delivery_method}
						</p>

						{/* <p className="text-gray ml-[20px]">
							Delivery by{" "}
							<span className="text-black font-semibold">Monday 2 Jan</span> for{" "}
							<span className="text-app-orange font-semibold">C 15.00</span>
						</p> */}
					</div>
				</div>

				<div className="bg-white rounded-2xl mt-[20px] shadow-md pb-[20px] flex flex-col ">
					<div className="flex justify-between mx-[15px] items-center">
						<h2 className="font-bold  text-[12px] md:text-[15px] my-[10px]">
							PAYMENT METHOD
						</h2>
					</div>
					<hr />
					<div className=" mb-[10px] flex flex-col">
						<p className=" ml-[15px] font-[500] text-[15px] mt-[10px]">
							How do you want pay for your order?
						</p>

						<div className=" ml-[15px] flex flex-row w-full justify-start">
							<input
								type="radio"
								className="mr-[20px]"
								checked={checked}
								value={"Pay via bank"}
								onChange={() => {
									setPaymentMethod("Pay via bank");
									setChecked(!checked);
									dispatch(
										OrderDetailsAction({
											payment_method: "Pay via bank"
										})
									);
								}}
							/>

							<img alt="mtn" src={"/assets/pngegg (11) 2.svg"} />

							<img
								alt="vodafone"
								src={"/assets/Vodafone-Cash-587x424 2.svg"}
								className="mx-[10px]"
							/>
							<img
								alt="airteltigo"
								src={"/assets/airteltigo-money-logo 2.svg"}
							/>

							<img
								alt="visa"
								src={"/assets/Vector.svg"}
								className="mx-[10px]"
							/>
							<img alt="mastercard" src={"/assets/mastercard.svg"} />
						</div>

						<div className="ml-[20px] mt-[20px]">
							<p className="text-text-gray ">
								1. Your security, our priority. You keep control of every
								transaction and are protected against fraud and stealth.
								<br />
								<br />
								2. Before you proceed, please make sure you have enough money in
								your mobile money wallet or bank account linked to your card.
							</p>
						</div>

						<div className="ml-[20px] flex flex-row items-center mt-[15px] ">
							<input
								type="radio"
								value={"Cash on delivery"}
								checked={!checked}
								onChange={() => {
									setPaymentMethod("Cash on delivery");
									setChecked(!checked);
									dispatch(
										OrderDetailsAction({
											payment_method: "Cash on delivery"
										})
									);
								}}
							/>

							<p className="mx-[10px]"> Pay Cash on Delivery</p>
							<img alt="pay on delivery" src="/assets/pngwing 1.svg" />
						</div>

						<hr className="my-[15px]" />

						<div className="flex pb-[30px] pt-[15px] px-[30px] w-full flex-col ">
							<div className="flex w-full justify-between ">
								<p>Subtotal</p>
								<p>
									GHC{" "}
									{cartItems?.reduce((accumulator, currectValue) => {
										return (
											accumulator +
											currectValue?.product?.price * currectValue?.qty
										);
									}, 0)}
								</p>
							</div>
							<div className="flex w-full justify-between my-[5px]">
								<p>Delivery Fee</p>
								<p className="font-semibold">GHC 0</p>
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
									GHC{" "}
									{cartItems?.reduce((accumulator, currectValue) => {
										return (
											accumulator +
											currectValue?.product?.price * currectValue?.qty
										);
									}, 0)}
								</p>
							</div>
						</div>

						<button
							className="w-[55%] text-white bg-bright-blue py-[5px] mt-[15px] self-center rounded-lg hover:shadow-md"
							onClick={ConfirmOrder}>
							CONFIRM ORDER
						</button>

						{createOrderLoading && <Spin size={"large"} />}
					</div>
				</div>
			</div>
			<div className="md:w-4/12 w-full bg-white rounded-2xl shadow-md p-[10px] md:mt-0 mt-[20px] flex flex-col ">
				{" "}
				<h2 className="font-bold ml-[15px] text-[12px] md:text-[15px] my-[5px] ">
					YOUR ORDER ({" "}
					{cartItems?.reduce((accumulator, currentValue) => {
						return accumulator + currentValue?.qty;
					}, 0)}{" "}
					items)
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
								<p>{product?.product?.name}</p>
								<p className="text-app-orange mt-[13px]">
									GHC {product?.item?.price}
								</p>
								<p>Quantity: {product?.qty} </p>
							</div>
						</div>
					);
				})}
				<hr />
				<div className="flex justify-between mt-[20px]">
					<p>Subtotal</p>
					<p>
						GHC{" "}
						{cartItems?.reduce((accumulator, currectValue) => {
							return (
								accumulator + currectValue?.product?.price * currectValue?.qty
							);
						}, 0)}
					</p>
				</div>
				<div className="flex justify-between mt-[10px]">
					<p>Delivery Fee</p>
					<p>GHC 0</p>
				</div>
				{/* <div className="flex justify-between mt-[10px] mb-[5px]">
					<p>Discount</p>
					<p className="text-bright-blue">GHC 0.00</p>
				</div> */}
				<hr />
				<div className="flex justify-between  mt-[10px]">
					<p className="font-bold">Total</p>
					<p className="text-app-orange font-bold">
						GHC{" "}
						{cartItems?.reduce((accumulator, currectValue) => {
							return (
								accumulator + currectValue?.product?.price * currectValue?.qty
							);
						}, 0)}
					</p>
				</div>
				<button
					className="self-center w-[40%] py-[5px] text-white rounded-lg mt-[20px] mb-[10px] bg-bright-blue"
					onClick={() => {
						navigate("/cart");
					}}>
					Modify Cart
				</button>
			</div>
		</div>
	);
};

export default PaymentMethodSession;
