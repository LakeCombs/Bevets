import { Checkbox, Dropdown, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	GetOrdersAction,
	ResetUpdateOrderAction,
	updateOrderAction
} from "../redux/actions/order.action";
import moment from "moment";
import { BiDotsVertical } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const DashboardOrderPending = ({ onClick }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { order, loading, error } = useSelector((state) => state.updateOrder);
	const { orders, loading: ordersLoading } = useSelector(
		(state) => state.allOrder
	);

	const pendingOrders = orders?.filter(
		(order) => order?.delivery_status === "pending"
	);

	console.log("the pending orders: ", pendingOrders);

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
		},
		{
			title: "Actions",
			dataIndex: "actions"
		}
	];

	const items = (id) => {
		return [
			{
				label: (
					<p
						onClick={() => {
							dispatch(updateOrderAction(id, { delivery_status: "success" }));
						}}>
						Mark as Delivered
					</p>
				),
				key: "0"
			},
			{
				label: (
					<p
						onClick={() => {
							dispatch(updateOrderAction(id, { delivery_status: "pending" }));
						}}>
						Mark as Pending
					</p>
				),
				key: "1"
			},
			{
				label: (
					<p
						onClick={() => {
							dispatch(updateOrderAction(id, { delivery_status: "failure" }));
						}}>
						Mark as Failed
					</p>
				),
				key: "2"
			}
		];
	};

	const data = [];
	for (let index = 0; index < pendingOrders?.length; index++) {
		data.push({
			orderNo: (
				<p
					onClick={() => {
						navigate(`/admin/orders/${orders[index]?._id}`);
					}}
					className="hover:cursor-pointer">
					{" "}
					{orders[index]?._id?.slice(0, 5)}
				</p>
			),
			createdAt: moment(pendingOrders[index]?.createdAt).format("YYYY-MM-DD"),
			user: `${pendingOrders[index]?.user?.firstname} ${orders[index]?.user?.lastname}`,
			total_price: `GHc ${pendingOrders[index]?.total_price}`,
			payment_method: pendingOrders[index]?.payment_method,
			delivery_method: pendingOrders[index]?.delivery_method,
			status: (
				<span
					className={`${
						pendingOrders[index]?.delivery_status === "pending"
							? "text-orange-400"
							: ""
					} ${
						pendingOrders[index]?.delivery_status === "success"
							? "text-green-500"
							: ""
					} 
					
					${pendingOrders[index]?.delivery_status === "failed" ? "text-red-500" : ""}
					
					`}>
					{pendingOrders[index]?.delivery_status}
				</span>
			),
			actions: (
				<button className="bg-bright-blue text-white rounded-lg py-[5px] px-[5px]">
					<Dropdown
						menu={{
							items: items(pendingOrders[index]?._id)
						}}
						trigger={["click"]}>
						<BiDotsVertical />
					</Dropdown>
				</button>
			)
		});
	}

	useEffect(() => {
		if (order?._id) {
			dispatch(GetOrdersAction());
			dispatch(ResetUpdateOrderAction());
		}
	}, [order?._id]);

	return (
		<div className="w-full bg-white rounded-md p-[10px]">
			<div className="border-b  p-[8px]">Manage Orders</div>

			<Table columns={columns} dataSource={data} />
		</div>
	);
};

export default DashboardOrderPending;
