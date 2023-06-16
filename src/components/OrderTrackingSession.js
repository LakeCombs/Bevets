import React, { useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getLastOrderAction } from "../redux/actions/order.action";
import { Spin } from "antd";

const OrderTrackingSession = () => {
	const dispatch = useDispatch();
	const { order, loading, error } = useSelector((state) => state.lastOrder);

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

	const setColor = useEffect(() => {
		dispatch(getLastOrderAction());
	}, []);

	return (
		<div className="h-full flex flex-col">
			<div className="py-3 w-full px-5 md:font-bold font-semibold">
				<h2>
					ORDER TRACKING {loading && <Spin />} ({order?._id}){" "}
				</h2>
			</div>
			<hr />

			<div className="flex h-full flex-col  p-3">
				<OrderTip
					title={"Order Placed"}
					time={order?.order_tracking_status?.order_placed?.date}
					color={order?.order_tracking_status?.order_placed?.value}
				/>
				<div className="w-[2px] h-[100px] bg-app-gray my-[-30px] ml-[10px]"></div>
				<OrderTip
					title={"Confirm Order"}
					time={order?.order_tracking_status?.confirm_order?.date}
					color={order?.order_tracking_status?.confirm_order?.value}
				/>
				<div className="w-[2px] h-[100px] bg-app-gray my-[-30px] ml-[10px]"></div>
				<OrderTip
					title={"Dispatch"}
					time={order?.order_tracking_status?.dispatch?.date}
					color={order?.order_tracking_status?.dispatch?.value}
				/>
				<div className="w-[2px] h-[100px] bg-app-gray my-[-30px] ml-[10px]"></div>
				<OrderTip
					title={"Delivered"}
					time={order?.order_tracking_status?.delivered?.date}
					color={order?.order_tracking_status?.delivered?.value}
				/>
			</div>
		</div>
	);
};

export default OrderTrackingSession;
