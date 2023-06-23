import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderByUserAction } from "../redux/actions/order.action";
import { Dropdown, Table } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const OrderSession = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [open, setOpen] = useState(true);
	const { orders, loading, error } = useSelector((state) => state.orderByUser);

	const openOrder = orders?.filter(
		(order) => order?.delivery_status !== "success"
	);

	const closedOrder = orders?.filter(
		(order) => order?.delivery_status === "success"
	);

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

	const columns2 = [
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
						navigate(`/order/${openOrder[index]?._id}`);
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

	const data2 = [];
	for (let index = 0; index < closedOrder?.length; index++) {
		data2.push({
			orderNo: (
				<p
					onClick={() => {
						navigate(`/order/${closedOrder[index]?._id}`);
					}}
					className="hover:cursor-pointer">
					{" "}
					{closedOrder[index]?._id?.slice(0, 5)}
				</p>
			),
			createdAt: moment(closedOrder[index]?.createdAt).format("YYYY-MM-DD"),
			user: `${closedOrder[index]?.user?.firstname} ${closedOrder[index]?.user?.lastname}`,
			total_price: `GHc ${closedOrder[index]?.total_price}`,
			payment_method: closedOrder[index]?.payment_method,
			delivery_method: closedOrder[index]?.delivery_method,
			status: (
				<span
					className={`${
						closedOrder[index]?.delivery_status === "pending"
							? "text-orange-400"
							: ""
					} ${
						closedOrder[index]?.delivery_status === "success"
							? "text-green-500"
							: ""
					} 
					
					${closedOrder[index]?.delivery_status === "failed" ? "text-red-500" : ""}
					
					`}>
					{closedOrder[index]?.delivery_status}
				</span>
			)
		});
	}

	useEffect(() => {
		dispatch(OrderByUserAction());
	}, []);
	return (
		<div className="h-full flex flex-col">
			<div className="py-3 w-full px-5 md:font-bold font-semibold">
				<h2>ORDERS</h2>
			</div>
			<hr />

			<div className="w-full flex flex-row py-2 border-b">
				<h2
					className={`${
						open ? "text-app-orange border-b-app-orange" : "text-app-gray"
					} px-5 h-full hover:cursor-pointer`}
					onClick={() => setOpen(true)}>
					OPEN ORDERS
				</h2>
				<h2
					className={`${
						!open ? "text-app-orange border-app-orange" : "text-app-gray"
					} px-5 h-full hover:cursor-pointer`}
					onClick={() => setOpen(false)}>
					CLOSED ORDERS
				</h2>
			</div>

			{open ? (
				<div className="flex h-[100%] flex-col justify-center items-bet">
					<div className="flex-grow">
						{!openOrder?.length && !loading ? (
							<div className="flex justify-center w-full h-full items-center flex-col">
								<img alt="" src={"/assets/order.svg"} />
								<h2 className="">You haven’t placed any new orders yet</h2>
							</div>
						) : (
							<Table columns={columns} dataSource={data} />
						)}
					</div>
					<div className="mt-auto">
						<hr />
						<div className="py-3 px-5 flex justify-center items-end ">
							<h2 className="text-app-orange font-semibold">START SHOPPING</h2>
						</div>
					</div>
				</div>
			) : (
				<div className="flex h-[100%] flex-col justify-center items-bet">
					<div className="flex-grow">
						{!closedOrder?.length && !loading ? (
							<div className="flex justify-center w-full h-full items-center flex-col">
								<img alt="" src={"/assets/order.svg"} />
								<h2 className="">You haven’t closed placed any orders yet</h2>
							</div>
						) : (
							<Table columns={columns2} dataSource={data2} />
						)}
					</div>
					<div className="mt-auto">
						<hr />
						<div className="py-3 px-5 flex justify-center items-end ">
							<h2
								className="text-app-orange font-semibold hover:cursor-pointer"
								onClick={() => {
									navigate("/category/name");
								}}>
								START SHOPPING
							</h2>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default OrderSession;
