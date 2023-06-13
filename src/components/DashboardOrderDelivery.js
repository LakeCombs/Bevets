import { Checkbox, Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const DashboardOrderDelivery = ({ onClick }) => {
	const { loading, error } = useSelector((state) => state.updateOrder);
	const { loading: ordersLoading } = useSelector((state) => state.allOrder);

	console.log("the loading for all orders is ", ordersLoading);
	return (
		<div className="w-full bg-white rounded-md p-[10px]">
			<div className="border-b  p-[8px]">
				Manage Orders {(loading || ordersLoading) && <Spin />}{" "}
				{error && <p className="text-red-400">{error}</p>}
			</div>
			<table className="w-full">
				<thead>
					<tr>
						<th></th>
						<th>Order No</th>
						<th>Date</th>
						<th>Customer</th>
						<th>Price</th>
						<th>Payment Status</th>
						<th>Fulfillment status</th>
					</tr>
				</thead>

				<tbody>
					<tr className="font-light">
						<th>
							<Checkbox
								onChange={(e) => {
									console.log("clicked");
								}}></Checkbox>
						</th>
						<th className="font-light " onClick={onClick}>
							#009893
						</th>

						<th className="font-light">1 days ago</th>
						<th className="font-light">John Doe </th>
						<th className="font-light">C 2000</th>

						<th>
							<span className="bg-green-300 rounded-lg font-light p-[2px] ">
								paid
							</span>
						</th>
						<th>
							<span className="bg-purple-300 rounded-lg font-light p-[2px] ">
								fulfilled
							</span>
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default DashboardOrderDelivery;
