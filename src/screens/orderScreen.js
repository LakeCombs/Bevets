import React, { useEffect } from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import { useDispatch, useSelector } from "react-redux";
import { OrderByUserAction } from "../redux/actions/order.action";

const MyOrderScreen = () => {
	const dispatch = useDispatch();
	const { orders, loading, error } = useSelector((state) => state.orderByUser);

	useEffect(() => {
		dispatch(OrderByUserAction());
	}, []);
	return (
		<div className="bg-background">
			<Header />
			<ScreenWithPadding>
				<div className=" min-h-screen pb-[20px]">
					<div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">My Orders</h3>
					</div>

					<table className="table-fixed">
						<thead>
							<tr>
								<th className="px-4 py-2">Order id</th>
								<th className="px-4 py-2">Product</th>
								<th className="px-4 py-2">Qty</th>
								<th className="px-4 py-2">Delivery Status</th>
							</tr>
						</thead>
						<tbody>
							{orders?.map((order) => (
								<tr key={order?._id}>
									<td className="border px-4 py-2">
										{" "}
										{order?._id?.slice(0, 5)}
									</td>
									<td className="border px-4 py-2">
										<div className="flex flex-row">
											<img className=" h-[60px] w-[60px]" alt="" />{" "}
											<div className="ml-[5px]">
												<p>Name: </p>
												<p>Price: </p>
												<p>Qty:</p>
											</div>
										</div>
									</td>

									<td className="border px-4 py-2">{}</td>

									<td className="border px-4 py-2">{order?.delivery_status}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default MyOrderScreen;
