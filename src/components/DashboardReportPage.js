import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../redux/actions/product.action";

const DashboardReportPage = () => {
	const dispatch = useDispatch();
	const { orders } = useSelector((state) => state.allOrder);
	const { users } = useSelector((state) => state.allUser);
	const { products } = useSelector((state) => state.allProduct);

	useEffect(() => {
		dispatch(getAllProductAction());
	}, []);
	return (
		<div>
			<h2 className="font-semibold"> App Report</h2>

			<div className="w-full bg-white rounded-md p-[10px] mt-[5px]">
				<div>
					<h2 className="my-[10px]">Total User: {users?.length} </h2>

					<h2 className="my-[10px]">Total Orders: {orders?.length} </h2>

					<h2 className="my-[10px]">
						Pending Orders:{" "}
						{
							orders?.map((order) => order?.delivery_status === "pending")
								?.length
						}
					</h2>
					<h2 className="my-[10px]">
						Completed Orders:{" "}
						{
							orders?.map((order) => order?.delivery_status === "success")
								?.length
						}
					</h2>

					<h2 className="my-[10px]">
						Failed Orders:{" "}
						{
							orders?.map((order) => order?.delivery_status === "failed")
								?.length
						}
					</h2>

					<h2 className="my-[10px]">
						Total Number of Product: {products?.length}
					</h2>

					<h2 className="my-[10px]">
						Total Number of Product In Stock:{" "}
						{products?.map((product) => product?.status === "IN_STOCK")?.length}
					</h2>

					<h2 className="my-[10px]">
						Total Revenue Generated : GHc{" "}
						{orders
							?.reduce((accumulator, currentValue) => {
								if (currentValue?.delivery_status === "success") {
									const orderRevenue = currentValue?.items?.reduce(
										(acc, cv) => {
											return acc + (cv?.product?.price || 0);
										},
										0
									);
									return accumulator + orderRevenue;
								}
								return accumulator;
							}, 0)
							?.toLocaleString()}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default DashboardReportPage;
