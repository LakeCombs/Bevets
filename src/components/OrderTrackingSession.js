import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const OrderTrackingSession = () => {
	const OrderTip = ({ title, time, color }) => {
		return (
			<div className="flex flex-row items-start justify-start ">
				<BsCheckCircleFill className={`${color} mt-1 z-10 text-[20px]`} />
				<div className="ml-2">
					<p>{title}</p>
					<p>{time}</p>
				</div>
			</div>
		);
	};

	return (
		<div className="h-full flex flex-col">
			<div className="py-3 w-full px-5 md:font-bold font-semibold">
				<h2>ORDER TRACKING</h2>
			</div>
			<hr />

			<div className="flex h-full flex-col  p-3">
				<OrderTip
					title={"Order Placed"}
					time={"1st January, 2023"}
					color={"text-bright-blue"}
				/>
				<div className="w-[2px] h-[100px] bg-app-gray my-[-30px] ml-[10px]"></div>
				<OrderTip
					title={"Confirm Order"}
					time={"1st January, 2023"}
					color={"text-app-gray"}
				/>
				<div className="w-[2px] h-[100px] bg-app-gray my-[-30px] ml-[10px]"></div>
				<OrderTip
					title={"Dispatch"}
					time={"1st January, 2023"}
					color={"text-app-gray"}
				/>
				<div className="w-[2px] h-[100px] bg-app-gray my-[-30px] ml-[10px]"></div>
				<OrderTip
					title={"Delivered"}
					time={"1st January, 2023"}
					color={"text-app-gray"}
				/>
			</div>
		</div>
	);
};

export default OrderTrackingSession;
