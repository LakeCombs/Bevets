import { Checkbox } from "antd";
import React from "react";

const DashboardOrderAll = ({ onClick }) => {
	return (
		<div className="w-full bg-white rounded-md p-[10px]">
			<div className="border-b  p-[8px]">Manage Orders</div>
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
						<th className="font-light" onClick={onClick}>
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

export default DashboardOrderAll;
