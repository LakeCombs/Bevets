import React, { useState, useEffect } from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByIdAction } from "../redux/actions/order.action";
import { Spin } from "antd";

const OrderByIdScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const { order, loading, error } = useSelector((state) => state.orderById);

	useEffect(() => {
		dispatch(getOrderByIdAction(id));
	}, []);
	return (
		<div className="bg-background">
			<Header />
			<ScreenWithPadding>
				<div className=" min-h-screen pb-[20px]">
					<div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">
							Your Order with id {id} {loading && <Spin />}
							{error && <p className="text-red-400">{error}</p>}
						</h3>
					</div>
					<div className="mt-[20px]">
						<h2 className="font-bold">Product Details</h2>
						<hr />
						{order?.items?.map((product) => {
							return (
								<div className="mt-[10px] flex flex-row mt-[20px]">
									<img
										className="w-[70px] h-[70px] "
										src={
											product?.product?.images && product?.product?.images[0]
										}
										alt=""
									/>
									<div className="ml-[15px]">
										<p>Name: {product?.product?.name}</p>
										<p>Description: {product?.product?.description}</p>
										<p>Price: GHc {product?.product?.price}</p>
									</div>
								</div>
							);
						})}

						<p className="font-semibold mt-[20px]">
							Total Price:GHc {order?.total_price}
						</p>

						<h2 className="mt-[20px] font-bold"> Contact User</h2>
						<hr />

						<p className="mt-[10px]">
							Name: {order?.user?.firstname} {order?.user?.lastname}
						</p>
						<p>Contact Email: {order?.user?.email}</p>
						<p>Contact Phone: {order?.user?.mobile}</p>

						<h2 className="mt-[20px] font-bold"> Contact Address Details</h2>
						<hr />

						<p className="mt-[10px]">Address: {order?.address?.address}</p>
						<p>City: {order?.address?.city}</p>
						<p>State: {order?.address?.state}</p>
						<p>ZipCode: {order?.address?.zipCode}</p>

						<h2 className="font-bold mt-[20px]">Payment Method</h2>
						<hr />
						<p className="mt-[10px]"> {order?.payment_method}</p>

						<h2 className="font-bold mt-[20px]">Delivery Method</h2>
						<hr />
						<p className="mt-[10px]"> {order?.delivery_method}</p>

						<h2 className="font-bold mt-[20px]">Delivery Status</h2>
						<hr />
						<p className="mt-[10px]"> {order?.delivery_status}</p>

						<br />
						<button
							className="bg-bright-blue px-[60px] py-[6px] rounded-lg text-white font-bold"
							onClick={() => {
								navigate(-1);
							}}>
							Back
						</button>
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default OrderByIdScreen;
