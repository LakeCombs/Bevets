import React, { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
	getLastOrderAction,
	getOrderByIdAction
} from "../redux/actions/order.action";
import { Spin, Table } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const OrderTrackingSession = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { order, orderByIdLoading } = useSelector((state) => state.orderById);
	const { orders, loading, error } = useSelector((state) => state.orderByUser);

	const openOrder = orders?.filter(
		(order) => order?.delivery_status !== "success"
	);

	const [track, setTrack] = useState(false);
	const OrderTip = ({ title, time, color }) => {
		return (
			<div className="flex flex-row items-start justify-start ">
				<BsCheckCircleFill
					className={`${color ? "text-bright-blue" : ""} mt-1 z-10 text-[20px]`}
				/>
				<div className="ml-2">
					<p>{title}</p>
					<p>{time}</p>
				</div>
			</div>
		);
	};

	const columns = [
		{
			title: "Order No",
			dataIndex: "orderNo"
		},
		{
			title: "Date",
			dataIndex: "createdAt"
		},
		{
			title: "Customer",
			dataIndex: "user"
		},
		{
			title: "Price",
			dataIndex: "total_price"
		},
		{
			title: "Payment Method",
			dataIndex: "payment_method"
		},
		{
			title: "Delivery Method",
			dataIndex: "delivery_method"
		},
		{
			title: "Order status",
			dataIndex: "status"
		}
	];

	const data = [];
	for (let index = 0; index < openOrder?.length; index++) {
		data.push({
			orderNo: (
				<p
					onClick={() => {
						setTrack(!track);
						dispatch(getOrderByIdAction(`${openOrder[index]?._id}`));
					}}
					className="hover:cursor-pointer">
					{" "}
					{openOrder[index]?._id?.slice(0, 5)}
				</p>
			),
			createdAt: moment(openOrder[index]?.createdAt).format("YYYY-MM-DD"),
			user: `${openOrder[index]?.user?.firstname} ${openOrder[index]?.user?.lastname}`,
			total_price: `GHc ${openOrder[index]?.total_price}`,
			payment_method: openOrder[index]?.payment_method,
			delivery_method: openOrder[index]?.delivery_method,
			status: (
				<span
					className={`${
						openOrder[index]?.delivery_status === "pending"
							? "text-orange-400"
							: ""
					} ${
						openOrder[index]?.delivery_status === "success"
							? "text-green-500"
							: ""
					} 
					
					${openOrder[index]?.delivery_status === "failed" ? "text-red-500" : ""}
					
					`}>
					{openOrder[index]?.delivery_status}
				</span>
			)
		});
	}

	return (
		<div className="h-full flex flex-col">
			<div className="py-3 w-full px-5 md:font-bold font-semibold flex flex-row ">
				<h2
					className={`${
						!track ? "bg-bright-blue text-white rounded-lg " : ""
					} px-[10px] py-[5px]`}>
					{" "}
					Open Orders {loading && <Spin />}
				</h2>

				<h2
					className={`${
						track ? "bg-bright-blue text-white rounded-lg " : ""
					} px-[10px] py-[5px]`}>
					Order Tracking {orderByIdLoading && <Spin />}
				</h2>
			</div>

			<hr />

			{!track ? (
				<div className="flex h-full flex-col  p-3">
					<Table columns={columns} dataSource={data} />
				</div>
			) : (
				<div className="flex h-full flex-col  p-3">
					<OrderTip
						title={"Order Placed"}
						time={order?.order_tracking_status?.order_placed?.date}
						color={
							order?.order_tracking_status?.order_placed?.value ||
							order?.order_tracking_status?.confirm_order?.value ||
							order?.order_tracking_status?.dispatch?.value ||
							order?.order_tracking_status?.delivered?.value
						}
					/>
					<div className="w-[2px] h-[100px] bg-app-gray my-[-30px] ml-[10px]"></div>
					<OrderTip
						title={"Confirm Order"}
						time={order?.order_tracking_status?.confirm_order?.date}
						color={
							order?.order_tracking_status?.confirm_order?.value ||
							order?.order_tracking_status?.dispatch?.value ||
							order?.order_tracking_status?.delivered?.value
						}
					/>
					<div className="w-[2px] h-[100px] bg-app-gray my-[-30px] ml-[10px]"></div>
					<OrderTip
						title={"Dispatch"}
						time={order?.order_tracking_status?.dispatch?.date}
						color={
							order?.order_tracking_status?.dispatch?.value ||
							order?.order_tracking_status?.delivered?.value
						}
					/>
					<div className="w-[2px] h-[100px] bg-app-gray my-[-30px] ml-[10px]"></div>
					<OrderTip
						title={"Delivered"}
						time={order?.order_tracking_status?.delivered?.date}
						color={order?.order_tracking_status?.delivered?.value}
					/>

					<div
						className="mt-[50px] flex hover:cursor-pointer justify-center bg-bright-blue px-[10px] py-[5px] w-[70px] rounded-lg text-white"
						onClick={() => {
							setTrack(!track);
						}}>
						Back
					</div>
				</div>
			)}
		</div>
	);
};

export default OrderTrackingSession;
