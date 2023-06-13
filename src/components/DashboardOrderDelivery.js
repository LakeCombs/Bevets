import { Checkbox, Dropdown, Spin, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
	GetOrdersAction,
	ResetUpdateOrderAction,
	updateOrderAction
} from "../redux/actions/order.action";
import { BiDotsVertical } from "react-icons/bi";

const DashboardOrderDelivery = ({ onClick }) => {
	const dispatch = useDispatch();
	const { order, loading, error } = useSelector((state) => state.updateOrder);
	const { orders, loading: ordersLoading } = useSelector(
		(state) => state.allOrder
	);

	const deliveredOrders = orders?.filter(
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
	for (let index = 0; index < deliveredOrders?.length; index++) {
		data.push({
			orderNo: (
				<p onClick={() => {}} className="hover:cursor-pointer">
					{" "}
					{deliveredOrders[index]?._id?.slice(0, 5)}
				</p>
			),
			createdAt: moment(deliveredOrders[index]?.createdAt).format("YYYY-MM-DD"),
			user: `${deliveredOrders[index]?.user?.firstname} ${orders[index]?.user?.lastname}`,
			total_price: `GHc ${deliveredOrders[index]?.total_price}`,
			payment_method: deliveredOrders[index]?.payment_method,
			delivery_method: deliveredOrders[index]?.delivery_method,
			status: (
				<span
					className={`${
						deliveredOrders[index]?.delivery_status === "pending"
							? "text-orange-400"
							: ""
					} ${
						deliveredOrders[index]?.delivery_status === "success"
							? "text-green-500"
							: ""
					} 
					
					${deliveredOrders[index]?.delivery_status === "failed" ? "text-red-500" : ""}
					
					`}>
					{deliveredOrders[index]?.delivery_status}
				</span>
			),
			actions: (
				<button className="bg-bright-blue text-white rounded-lg py-[5px] px-[5px]">
					<Dropdown
						menu={{
							items: items(deliveredOrders[index]?._id)
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
			<div className="border-b  p-[8px]">
				Manage Orders {(loading || ordersLoading) && <Spin />}{" "}
				{error && <p className="text-red-400">{error}</p>}
			</div>

			<Table columns={columns} dataSource={data} />
		</div>
	);
};

export default DashboardOrderDelivery;
