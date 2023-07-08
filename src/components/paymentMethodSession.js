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
import PayButton from "../utils/PayButton";
import '../styles/checkout.css'

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

	const paymentMethod = "Payment before delivery.";
	const [messageApi, contextHolder] = message.useMessage();

	const amount = cartItems
		?.reduce((accumulator, currectValue) => {
			return (
				accumulator +
				currectValue?.product?.price * currectValue?.qty
			);
		}, 0)
		?.toFixed(2)*100;

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	const resetForm = () => {
		setEmail('');
		setName('');
		setPhone('');
	};

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
							SELECTED DELIVERY ADDRESS DETAILS {loading && <Spin />}{" "}
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
							PAYMENT DETAILS
						</h2>
					</div>
					<hr />
					<div className=" mb-[10px] flex flex-col">
						<div className="flex flex-col px-5">
							<div className="checkout-field">
									<label>Name</label>
									<input
										type="text"
										id="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="checkout-field">
									<label>Email</label>
									<input
										type="text"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="checkout-field">
									<label>Phone</label>
									<input
										type="text"
										id="phone"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
							</div>

						<div className="ml-[20px] mt-[20px]">
							<p className="text-text-gray text-sm ">
								1. Your security, our priority. You keep control of every
								transaction and are protected against fraud and stealth.
								<br />
								<br />
								2. Before you proceed, please make sure you have enough money in
								your mobile money wallet or bank account linked to your card.
							</p>
						</div>

						<hr className="my-[15px]" />

						<div className="flex pb-[30px] pt-[15px] px-[30px] w-full flex-col ">
							<div className="flex w-full justify-between ">
								<p>Subtotal</p>
								<p>
									GHC{" "}
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
						</div>

						{/*<button*/}
						{/*	className="w-[55%] text-white bg-bright-blue py-[5px] mt-[15px] self-center rounded-lg hover:shadow-md"*/}
						{/*	onClick={ConfirmOrder}>*/}
						{/*	CONFIRM ORDER*/}
						{/*</button>*/}

						<div className="mx-[50px]">
							<PayButton amount={amount} email={email} />
						</div>

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
									GHC {product?.item?.price?.toLocaleString()}
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
