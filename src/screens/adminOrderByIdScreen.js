import React, { useEffect, useState } from "react";
import { Avatar, Button, Input, Radio, Select, Space, Spin } from "antd";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import SearchComponent from "../components/searchComponent";
import ScreenWithPadding from "../components/ScreenWithPadding";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
	ResetUpdateOrderAction,
	getOrderByIdAction,
	updateOrderAction
} from "../redux/actions/order.action";
import moment from "moment";
import DashboardHeader from "../components/DashboardHeader";

const AdminOrderByIdScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { order, loading, error } = useSelector((state) => state.orderById);
	const {
		order: updateOrder,
		loading: updateLoading,
		error: updateError
	} = useSelector((state) => state.updateOrder);
	const [tracking, setTracking] = useState(
		order?.order_tracking_status?.tracks || ""
	);

	const trackOptions = ["Confirm Order", "Dispatch", "Delivered"];

	useEffect(() => {
		dispatch(getOrderByIdAction(id));
	}, []);

	useEffect(() => {
		if (updateOrder?._id) {
			dispatch(getOrderByIdAction(id));
			dispatch(ResetUpdateOrderAction());
		}
	}, []);

	return (
		<div className="min-h-screen md:bg-background bg-primary-blue">
			<DashboardHeader />
			<ScreenWithPadding>
				<div className="bg-white  w-full p-[10px]">
					<div className="flex flex-row justify-between">
						<div className="w-[70%] mr-[5px] border outline-1 rounded-lg bg-background px-[10px] py-[15px]">
							<div className="flex flex-row w-full justify-between">
								<p className="font-bold text-[12px]">
									Order {order?._id} {(loading || updateLoading) && <Spin />}
									{error && <p className="text-red-400"> {error}</p>}
									{updateError && (
										<p className="text-red-400"> {updateError}</p>
									)}
								</p>
								<div className="flex flex-row items-center">
									<p className="mr-[5px]">Delivery Status</p>
									<p
										className={`px-[2px] py-[3px] text-white w-[100px] text-center rounded-lg  hover:cursor-pointer
						
                    ${
											order?.delivery_status === "pending"
												? "bg-orange-400"
												: ""
										} ${
											order?.delivery_status === "success" ? "bg-green-500" : ""
										} 
					
					${order?.delivery_status === "failed" ? "bg-red-500" : ""}
                                `}>
										{order?.delivery_status}
									</p>
								</div>
							</div>
							<p className="mt-[4px] text-[10px]">
								Created At: {moment(order?.createdAt).format("YYYY-MM-DD")}
							</p>

							<div className="pb-[5px] border-b grid grid-cols-6 gap-1 text-[12px] mt-[12px]">
								<p>Product</p>
								<p>SKU</p>
								<p>Quantity</p>
								<p>Price</p>
							</div>

							{order?.items?.map((item) => {
								return (
									<div className="pb-[5px] border-b grid grid-cols-6 gap-1  text-[12px] mt-[12px] items-center">
										<img
											src={item?.product?.images && item?.product?.images[0]}
											alt=""
											className="w-[50px] h-[50px] "
										/>
										<p>{moment(order?.createdAt).format("YYYY-MM-DD")}</p>
										<p className=" w-[30px] h-[25px] py-[2px] border text-center">
											{item?.qty}
										</p>
										<p>GHc ${item?.product?.price?.toLocaleString()}</p>
									</div>
								);
							})}

							{/* <div className="flex flex-col mt-[12px] w-full text-[13px]">
								<div className="flex flex-row justify-between items-center w-full mb-[3px]">
									<p>Subtotal</p>
									<p> Ȼ 300.00</p>
								</div>
								<div className="flex flex-row justify-between items-center w-full mb-[3px]">
									<p>Discount</p>
									<p> Ȼ 0.00</p>
								</div>

								<div className="flex flex-row justify-between items-center w-full mb-[3px]">
									<p>Shipping</p>
									<p> Ȼ 0.00</p>
								</div>
								<div className="flex flex-row justify-between items-center w-full mb-[3px]">
									<p>Taxes</p>
									<p> Ȼ 5.00</p>
								</div>
								<div className="flex flex-row justify-between items-center font-semibold w-full mb-[3px]">
									<p>Total</p>
									<p> Ȼ 305.00</p>
								</div>
							</div> */}
						</div>
						<div className="rounded-lg  border outline-1 bg-background  py-[15px] w-[30%] ml-[2px]">
							<div className="px-[10px] pb-[5px] border-b">
								<p className="font-bold">Customer</p>
								<p className="mt-[8px]">{order?.user?.email}</p>
							</div>
							<div className="px-[10px] w-full border-b pb-[5px]">
								<div className="flex w-full flex-row justify-between items-center mt-[10px] text-[12px]">
									<p>Shipping Address</p>
								</div>
								<div className="text-[10px] mt-[-10px]">
									<p className="font-bold mt-[25px]">{`${order?.user?.firstname} ${order?.user?.lastname}`}</p>
									<p className="">Address: {order?.address?.address}</p>
									<p className="">City: {order?.address?.city}</p>
									<p className="">State: {order?.address?.state}</p>
									<p className=""> ZipCode: {order?.address?.zipCode}</p>
								</div>
							</div>

							<div className="px-[10px] w-full pb-[5px] mt-[10px] ">
								<p className="font-semibold">Change Tracking Details</p>

								<select
									className="mt-[10px] w-full  rounded-md py-[5px]"
									id="selectOption"
									value={tracking
										?.replace(/_/g, " ")
										.replace(/\b\w/g, (c) => c.toUpperCase())}
									onChange={(e) => {
										setTracking(e.target.value);
										dispatch(
											updateOrderAction(id, {
												[`order_tracking_status.${tracking
													?.toLowerCase()
													.replace(/\s+/g, "_")}`]: {
													value: true,
													date: moment().format("Do MMMM, YYYY")
												}
											})
										);
									}}>
									<option value={tracking}>{tracking}</option>

									{trackOptions
										?.filter((track) => track !== tracking)
										.map((option) => (
											<option key={option} value={option}>
												{option}
											</option>
										))}
								</select>
							</div>

							{/* <div className="px-[10px] w-full pb-[5px]">
								<div className="flex w-full flex-row justify-between items-center mt-[10px] text-[12px]">
									<p>Billing Address</p>
									<p className="bg-green-500 px-[5px] hover:cursor-pointer py-[2px] rounded-lg text-white">
										Edit
									</p>
								</div>
								<div className="text-[10px] mt-[-10px]">
									<p className="font-bold mt-[25px]">John Doe</p>
									<p className="text-text-gray">House No 813/40 To</p>
									<p className="text-text-gray">Greater Accra</p>
									<p className="text-text-gray">CG-738-3306</p>
									<p className="text-text-gray">+233539831157</p>
								</div>
							</div> */}
						</div>
					</div>

					<div className="mt-[20px] flex flex-row justify-between w-full">
						<div className="rounded-lg border bg-background p-[20px] w-[70%]  mr-[5px]">
							<div className="flex flex-row justify-between items-center">
								<div className="flex flex-row">
									<p className="font-bold text-[12px]">Order Summary</p>
									{/* <p className="bg-yellow-400 rounded-lg text-[12px] p-[3px] ml-[20px]">
										{" "}
										Unpaid
									</p> */}
								</div>
								{/* <p className="bg-green-400 px-[6px] text-white rounded-lg text-[12px] py-[4px]">
									Mark as paid
								</p> */}
							</div>

							<div className="flex flex-col mt-[12px] w-full text-[13px]">
								<div className="flex flex-row justify-between items-center w-full mb-[3px]">
									<p>Payment Method</p>
									<p> {order?.payment_method}</p>
								</div>
								<div className="flex flex-row justify-between items-center w-full mb-[3px]">
									<p>Delivery Method</p>
									<p>{order?.delivery_method}</p>
								</div>

								<div className="flex flex-row justify-between items-center w-full mb-[3px]">
									<p>Delivery Status</p>
									<p> {order?.delivery_status?.toUpperCase()}</p>
								</div>
								{/* <div className="flex flex-row justify-between items-center w-full mb-[3px]">
									<p>Taxes</p>
									<p> Ȼ 5.00</p>
								</div> */}
								<div className="flex flex-row mt-[20px] justify-between items-center font-semibold w-full mb-[3px]">
									<p>Total</p>
									<p> GHC {order?.total_price?.toLocaleString()}</p>
								</div>
							</div>
						</div>

						<div className="  flex flex-col   w-[30%] ml-[2px]">
							<div className="rounded-lg bg-background border p-[15px] w-full ">
								<p className="font-bold text-[12px]"> Sales Channel</p>
								<p className="text-[12px] mt-[10px]">Channel - GHc</p>
							</div>

							<div className="rounded-lg bg-background border mt-[10px] p-[15px] w-full ">
								<div className="w-full flex flex-row justify-between items-center">
									<p className="font-bold text-[12px]"> Invoice</p>
									<p className="text-[12px] border px-[5px] py-[3px] hover:cursor-pointer bg-white">
										Generate
									</p>
								</div>

								<p className="text-[12px] mt-[10px]">No Invoice to be shown</p>
							</div>
						</div>
					</div>
					{/*<div className="mt-[10px] w-full border rounded-lg p-[20px] bg-background">
						<p className="font-bold text-[12px]">Order History</p>
						<div className="w-full flex flex-row mt-[10px]">
							<Avatar className="mr-[10px]" />
							 <Space.Compact className="w-full">
								<Input
									className="w-full outline-none hover:outline-none"
									placeholder="Leave your note here ..."
								/>
								<Button className="border outline-none ">Submit</Button>
							</Space.Compact>
						</div>
						<div className="flex flex-row justify-between mt-[25px] w-full text-[12px]">
							<div className="flex flex-row items-center">
								<GoPrimitiveDot />
								<p>AUTHORISATION</p>
							</div>
							<p className="align-end">3 days ago</p>
						</div>
						<div className="flex flex-row justify-between mt-[10px] w-full text-[12px]">
							<div className="flex flex-row items-center">
								<GoPrimitiveDot />
								<p>Order was confirmed</p>
							</div>
							<p className="align-end">3 days ago</p>
						</div>
						<div className="flex flex-row justify-between mt-[10px] w-full text-[12px]">
							<div className="flex flex-row items-center">
								<GoPrimitiveDot />
								<p>Order was placed</p>
							</div>
							<p className="align-end">3 days ago</p>
						</div>
					</div> */}
					<div className="w-full rounded-lg mt-[20px] bg-background p-[25px] justify-end flex flex-row">
						<button
							className="border outline-1 
                 px-[10px] py-[5px] rounded-lg mr-[10px]"
							onClick={() => {
								navigate(-1);
							}}>
							Back
						</button>
						<button
							className="bg-bright-blue text-white rounded-lg px-[5px] py-[3px]"
							onClick={() => {
								if (order?.delivery_status === "success") {
									return;
								} else {
									dispatch(
										updateOrderAction(order?._id, {
											delivery_status: "success"
										})
									);
								}
							}}>
							{order?.delivery_status === "success"
								? "Delivered"
								: "Mark as delivered"}
						</button>
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default AdminOrderByIdScreen;
